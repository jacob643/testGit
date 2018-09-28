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
            service.post(games[0].name,new Blob(["hey"])).subscribe(
                (game: Game) => {
                    expect(game).toEqual(games[0], 'should received a game');
                    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
                }
            )
        });

        it('should have received an empty observable of game on fail', () => {
            let error = new Error("blah")
            httpClientSpy.post.and.returnValue(TestHelper.asyncError(error));
            service.post(games[0].name,new Blob(["hey"])).subscribe(
                (_game: Game) => {
                    expect(true).toBeFalsy();
                }, (_err: Error) => {
                    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
                    expect(errorHandler.handleAsyncError).toHaveBeenCalledTimes(1);
                }
            );
        })
    });

    describe("getGames", () => {
        it('should return a observable of game when fine', () => {
            httpClientSpy.get.and.returnValue(TestHelper.asyncData(games));
            service.getGames().subscribe(
                (game: Game[]) => {
                    expect(game).toEqual(games, 'should have a game');
                    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
                }
            )
        });

        it('should have received an empty observable of game on fail', () => {
            let error = new Error("test error")
            httpClientSpy.get.and.returnValue(TestHelper.asyncError(error));
            service.getGames().subscribe(
                (_game: Game[]) => {
                    expect(true).toBeFalsy();
                }, (_err: Error) => {
                    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
                    expect(errorHandler.handleAsyncError).toHaveBeenCalledTimes(1);
                }
            );
        })
    });

    describe("getGamesSingleView", () => {
        it('should return a observable of game when fine', () => {
            httpClientSpy.get.and.returnValue(TestHelper.asyncData(games));
            service.getGamesSingleView().subscribe(
                (game: Game[]) => {
                    expect(game).toEqual(games, 'should have a game');
                    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
                }
            )
        });
    });
});
