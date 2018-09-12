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


    updateview() {


        // Time calculations minutes and seconds
        let minutes = Math.floor(
            this.elapsedTime / (MILI_IN_SEC * SEC_IN_MIN));
        let seconds = Math.floor(
            (this.elapsedTime % (MILI_IN_SEC * SEC_IN_MIN)) / MILI_IN_SEC);

        if (minutes > 99) {
            this.output = "99:59";
        }
        else {

            let strsec = this.padding(seconds);
            let strmin = this.padding(minutes);

            this.output = strmin + ':' + strsec;
        }
    }

    padding(amount: number) {
        let str = amount + '';
        if (str.length < CHAR_IN_DISPLAY) str = '0' + str;
        return str;
    }


    constructor() {
    }

    ngOnInit() {
        //valeur initial du output a 00:00
        this.output = "00:00"
        this.startTime = 0;
    }

}
