import { GameService } from './game.service';
import { Game, createGame } from '../../../../common/game/game'
import { TestHelper } from '../../test.helper'

let httpClientSpy: any;
let errorHandler: any;
let games: Game[];
let service: GameService;

describe('GameService', () => {
    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj("HttpClient", ["get", "post"]);
        errorHandler = jasmine.createSpyObj("ErrorsHandler", ["handleAsyncError"]);
        games = new Array<Game>();
        games.push(createGame());
        service = new GameService(httpClientSpy, errorHandler)
    });

    describe("post", () => {
        it('should return a observable of game when fine', () => {
            httpClientSpy.post.and.returnValue(TestHelper.asyncData(games[0]));
            service.post(games[0].name).subscribe(
                (game: Game) => {
                    expect(game).toEqual(games[0], 'should received a game');
                    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
                }
            )
        });

        it('should received an empty observable of game on fail', () => {
            let error = new Error("blah")
            httpClientSpy.post.and.returnValue(TestHelper.asyncError(error));
            service.post(games[0].name).subscribe(
                (game: Game) => {
                    expect(true).toBeFalsy();
                }, (err: Error) => {
                    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
                    expect(errorHandler.handleAsyncError).toHaveBeenCalledTimes(1);
                }
            );
        })

    });

});
