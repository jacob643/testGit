import { User } from "../../../../../common/user/user"
import { UserService } from './user.service';
import { TestHelper } from "../../../test.helper";
import { } from "jasmine";

let httpClientSpy: any;
let errorHandler: any;
let userService: UserService;

describe('UserService', () => {
    let user: User;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj("HttpClient", ["get", "post"]);
        errorHandler = jasmine.createSpyObj("ErrorsHandler", ["handleAsyncError"]);
        userService = new UserService(httpClientSpy, errorHandler);
        user = { name: "Blah123" };
    });

    describe("GetUsers", () => {
        it("should get a list of user and only be called once", () => {
            httpClientSpy.get.and.returnValue(TestHelper.asyncData([user]));
            userService.getUsers().subscribe(
                (response: User[]) => {
                    expect(response.length).toEqual(1, "number check");
                    expect(response[0]).toEqual(user, "check if its the good user");
                },
                fail
            );
            // check if only one call was made
            expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
        })
    })

    describe("PostUser", () => {
        it("should post a user to the http only once", () => {
            httpClientSpy.post.and.returnValue(TestHelper.asyncData(user));

            userService.postUser(user.name).subscribe(
                (res: User) => {
                    expect(res).toEqual(user);
                },
                fail
            )
            expect(httpClientSpy.post.calls.argsFor(0)).toContain({ name: user.name }, "body of the request is the user");
            expect(httpClientSpy.post.calls.count()).toBe(1, "one call");
        });
    });

    describe("GetUser", () => {
        it("should get a single user from http", () => {
            let url = "http://localhost:3000/users/" + user.name;
            httpClientSpy.get.and.returnValue(TestHelper.asyncData(user));
            userService.getUser(user.name).subscribe(
                (res: User) => {
                    expect(res).toEqual(user);
                },
                fail
            )
            expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
            expect(httpClientSpy.get.calls.argsFor(0)).toContain(url, "ask the right url");
        });
    });
});
