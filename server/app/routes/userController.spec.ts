import { NextFunction } from "express";
import { expect } from "chai";
import { mockReq, mockRes } from 'sinon-express-mock'
import "reflect-metadata";
let chai = require("chai");
let sinon = require("sinon");
var sinonChai = require("sinon-chai");

import { UserController } from "./userController"
import { User } from "../../../common/user/user"

chai.should();
chai.use(sinonChai);

describe("UserController", () => {
    let controller: UserController.Users;
    let next: NextFunction
    let user: User;

    beforeEach(() => {
        controller = new UserController.Users();
        user = { name: "Blah123", regexpression: /a/ };
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
            let req = mockReq({ body: {} });
            let res = mockRes();
            controller.getUsers(req, res, next);
            expect(res.send).to.have.been.calledWith(JSON.stringify(controller.users));
        });
    });

    describe("postUsers", () => {
        let req = mockReq();
        let res = mockRes();

        beforeEach(() => {
            req = mockReq({ body: { user: user } });
            res = mockRes();
        })

        it("should add a user to users property", () => {
            controller.post(req, res, next);
            expect(controller.users).to.contain(user);
        });

        it("should send the user data back", () => {
            controller.post(req, res, next);
            expect(res.send).to.have.been.calledWith(JSON.stringify(user));
        })

        it("should not add name shorter than 4 chars", () => {
            user = { name: "bbb", regexpression: /a/ }
            req = mockReq({ body: { user: user } })
            controller.post(req, res, next)
            expect(controller.users).to.be.an('array').that.is.empty;
            expect(res.status).to.be.calledWith(500);
        });

        it("should not add name longer than 10 chars", () => {
            user = { name: "12345678901", regexpression: /a/ }
            req = mockReq({ body: { user: user } })
            controller.post(req, res, next)
            expect(controller.users).to.be.an('array').that.is.empty;
            expect(res.status).to.be.calledWith(500);
        })

        it("should be impossible to have a name that isn't alphanumeric", () => {
            user = { name: "blah+", regexpression: /a/ }
            req = mockReq({ body: { user: user } })
            controller.post(req, res, next)
            expect(controller.users).to.be.an('array').that.is.empty;
            expect(res.status).to.be.calledWith(500);
        })
    });
});
