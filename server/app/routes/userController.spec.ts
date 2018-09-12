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
            let req = mockReq({ body: { name: 'blah' } });
            let res = mockRes();
            controller.get(req, res, next);
            expect(res.send).to.have.been.calledWith(JSON.stringify(controller.users));
        })
    })
});
