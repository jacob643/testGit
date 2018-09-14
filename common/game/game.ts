import { ScoreBoard, createScoreBoard } from './scoreBoard';

export interface Game {
    id: Number;
    name: string;
    scoreSolo: ScoreBoard;
    score1v1: ScoreBoard;
    imagePath: string;
    singleView: boolean;
}

export function createGame(id = 0, name = "defaultName", scoreSolo: ScoreBoard = undefined,
    score1v1: ScoreBoard = undefined, imagePath = "defaultPath", singleView = true): Game {

    if (!scoreSolo) {
        scoreSolo = createScoreBoard();
    }

    if (!score1v1) {
        score1v1 = createScoreBoard();
    }

    return { id: id, name: name, scoreSolo: scoreSolo, score1v1: score1v1, imagePath: imagePath, singleView: singleView };
}
