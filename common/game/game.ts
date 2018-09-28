import { ScoreBoard, createScoreBoard } from './scoreBoard';

export interface Game {
    id: Number;
    name: string;
    scoreSolo: ScoreBoard;
    score1v1: ScoreBoard;
    imagePath: string;
    singleView: boolean;
    original: number;
}

export function createGame(id = 0, name = "defaultName", scoreSolo: ScoreBoard | undefined = undefined,
    score1v1: ScoreBoard | undefined = undefined, imagePath = "defaultPath", singleView = true, original = 0): Game {

    if (!scoreSolo) {
        scoreSolo = createScoreBoard();
    }

    if (!score1v1) {
        score1v1 = createScoreBoard();
    }

    return { id: id, name: name, scoreSolo: scoreSolo, score1v1: score1v1, imagePath: imagePath, singleView: singleView, original: original };
}
