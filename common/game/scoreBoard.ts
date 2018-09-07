import { Score } from './score.ts';

export interface ScoreBoard {
    id: int;
    first: Score;
    second: Score;
    third: Score;
}
