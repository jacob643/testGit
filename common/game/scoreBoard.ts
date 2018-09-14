import { Score, createScore } from './score';

export interface ScoreBoard {
    id: Number;
    first: Score;
    second: Score;
    third: Score;
}

export function createScoreBoard(id = 0, first: Score = undefined, second: Score = undefined, third: Score = undefined): ScoreBoard {

    if (!first) {
        first = createScore();
    }

    if (!second) {
        second = createScore();
    }

    if (!third) {
        third = createScore();
    }

    return { id: id, first: first, second: second, third: third }
}
