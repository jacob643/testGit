import { assert } from "chai"
import "reflect-metadata";

import { UserController } from "./userController"

describe("Testing UserController methods", () => {
    let controller: UserController.Users;

    beforeEach(() => {
        controller = new UserController.Users();
    })

    describe("initialization", () => {
        it("Should initialize an empty user array", () => {
            assert.deepEqual(controller.users, [], "should be empty");
        });
    });
});
