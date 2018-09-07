import { ScoreBoard } from './scoreBoard.ts';

export interface Game {
    name: string;
    soloScore: ScoreBoard;
    1v1Score: ScoreBoard;
    imagePath: string;
    singleView: boolean;
}
