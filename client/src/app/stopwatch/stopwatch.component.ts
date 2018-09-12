import { Component, OnInit } from '@angular/core';

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
