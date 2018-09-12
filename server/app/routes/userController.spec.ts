import { NextFunction } from "express";
import { assert, expect } from "chai";
import { mockReq, mockRes } from 'sinon-express-mock'
import "reflect-metadata";
let chai = require("chai");
let sinon = require("sinon");
var sinonChai = require("sinon-chai");

import { UserController } from "./userController"
import { User } from "../../../common/user/user"

chai.should();
chai.use(sinonChai);

describe("Testing UserController methods", () => {
    let controller: UserController.Users;
    let next: NextFunction
    let user: User;

    beforeEach(() => {
        controller = new UserController.Users();
        user = { name: "blah", regexpression: /a/ };
    })

    afterEach(() => {
        sinon.restore()
    })

    describe("initialization", () => {
        it("Should initialize an empty user array", () => {
            assert.deepEqual(controller.users, [], "should be empty");
        });
    });

    describe("getUsers", () => {
        it("send an user list", () => {
            controller.users.push(user)
            let req = mockReq({ body: {} });
            let res = mockRes();
            controller.getUsers(req, res, next);
            expect(res.send).to.have.been.calledWith(JSON.stringify(controller.users));
        });
    });

    describe("postUsers", () => {
        it("should add a user to users property", () => {
            let req = mockReq({ body: { user: user } });
            let res = mockRes();
            controller.post(req, res, next);
            expect(controller.users).to.contain(user);
        });

        it("should send the user data back", () => {
            let req = mockReq({ body: { user: user } });
            let res = mockRes();
            controller.post(req, res, next);
            expect(res.send).to.have.been.calledWith(JSON.stringify(user));
        })
    });
});
