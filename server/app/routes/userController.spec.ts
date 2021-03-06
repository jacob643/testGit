import { NextFunction } from "express";
import { expect } from "chai";
import { mockReq, mockRes } from 'sinon-express-mock'
import "reflect-metadata";
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

import { UserController } from "./userController"
import { User, createUser } from "../../../common/user/user"

chai.should();
chai.use(sinonChai);

describe("UserController", () => {
    let controller: UserController.Users;
    let next: NextFunction
    let user: User;
    let req = mockReq();
    let res = mockRes();

    beforeEach(() => {
        controller = new UserController.Users();
        user = createUser("Blah123");
    })

    afterEach(() => {
        sinon.restore()
    })

    describe("initialization", () => {
        it("should initialize an empty User array", () => {
            expect(controller.users).to.be.an('array').that.is.empty;
        });
    });

    describe("getUsers", () => {
        it("should send an user list", () => {
            controller.users.push(user)
            controller.getUsers(req, res, next);
            expect(res.send).to.have.been.calledWith(JSON.stringify(controller.users));
        });
    });

    describe("updateUsers", () => {
        beforeEach(() => {
            req = mockReq({ body: { name: user.name, id: user.socketId } });
            res = mockRes();
            controller.users.push(createUser("", user.socketId))
        })

        it("should change user from users property", () => {
            controller.updateUser(req, res, next);
            expect(controller.users).to.deep.include(user);
        });

        it("should send the user data back", () => {
            controller.updateUser(req, res, next);
            expect(res.send).to.have.been.calledWith(JSON.stringify(user));
        })

        it("should not add name shorter than 4 chars", () => {
            user.name = "bbb";
            req = mockReq({ body: { name: user.name, id: user.socketId } });
            expect(() => controller.updateUser(req, res, next)).to.throw();
            expect(controller.users).to.not.deep.include(user);
            expect(res.status).to.be.calledWith(500);
        });

        it("should not add name longer than 10 chars", () => {
            user = createUser("12345678901");
            req = mockReq({ body: { name: user.name, id: user.socketId } });
            expect(() => controller.updateUser(req, res, next)).to.throw();
            expect(controller.users).to.not.deep.include(user);
            expect(res.status).to.be.calledWith(500);
        })

        it("should be impossible to have a name that isn't alphanumeric", () => {
            user = createUser("blah+");
            req = mockReq({ body: { name: user.name } })
            expect(() => controller.updateUser(req, res, next)).to.throw();
            expect(controller.users).to.not.deep.include(user);
            expect(res.status).to.be.calledWith(500);
        })

        it("should be a unique name", () => {
            controller.users.push(user);
            expect(() => controller.updateUser(req, res, next)).to.throw();
            expect(res.status).to.be.calledWith(500);
        })

    });

    describe("getUser", () => {
        beforeEach(() => {
            req = mockReq({ params: { name: user.name } });
            res = mockRes();
        })

        it("should send a single user through server", () => {
            controller.users.push(user);
            controller.getUser(req, res, next);
            expect(res.send).to.be.calledWith(JSON.stringify(user));
        });

    });
    describe("deleteUser", () => {
        let user2: User;

        beforeEach(() => {
            req = mockReq({ body: { id: user.socketId } });
            res = mockRes();
            user2 = createUser("Blah1234", "djoijdwqd");
            controller.users.push(user);
            controller.users.push(user2);
        });

        it("should delete only one user", () => {
            controller.deleteUser(req, res, next);
            expect(controller.users.length).to.equal(1);
            expect(controller.users).not.to.include(user);
            expect(res.send).to.have.been.calledWith(JSON.stringify(user));
        });

        it("should throw if id doesn't exist", () => {
            req = mockReq({ body: { name: "i dont exist", id: "me neither" } });
            expect(() => controller.deleteUser(req, res, next)).to.throw();
        });

    });

});
