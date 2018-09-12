import { Component, OnInit } from '@angular/core';

const MILI_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const CHAR_IN_DISPLAY = 2;

@Component({
    selector: 'app-stopwatch',
    templateUrl: './stopwatch.component.html',
    styleUrls: ['./stopwatch.component.scss']
})

export class StopwatchComponent implements OnInit {

    startTime: number;
    finalTime: number;
    now: number;
    elapsedTime: number;
    loop: any;
    output: string;


    constructor() {
    }

    ngOnInit() {
    }

}
