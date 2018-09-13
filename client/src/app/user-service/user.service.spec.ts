import { User } from "../../../../common/user/user"
import { UserService } from './user.service';
import { TestHelper } from "../../test.helper";
import { } from "jasmine";

let httpClientSpy: any;
let userService: UserService;

describe('UserService', () => {
    let user: User;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
        userService = new UserService(httpClientSpy);
        user = { name: "Blah123", regexpression: /a/ };
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
            httpClientSpy = jasmine.createSpyObj("HttpClient", ["post"]);
            httpClientSpy.post.and.returnValue(TestHelper.asyncData(user));

            userService.postUser(user).subscribe(
                (res: User) => {
                    expect(res).toEqual(user);
                },
                fail
            )
            expect(httpClientSpy.post.calls.argsFor(1)).toBe(user, "body of the request is the user");
            expect(httpClientSpy.post.calls.count()).toBe(1, "one call");
        });
    });
});
