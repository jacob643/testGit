import { ScoreBoard } from './scoreBoard';

export interface Game {
    id: Number;
    name: string;
    scoreSolo: ScoreBoard;
    score1v1: ScoreBoard;
    imagePath: string;
    singleView: boolean;
}
