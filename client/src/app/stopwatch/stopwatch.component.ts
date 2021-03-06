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

    start() {
        //set start time
        this.startTime = new Date().getTime();
        this.elapsedTime = 0;
        //preventing multiple start of the stopwatch
        clearInterval(this.loop);

        this.output = "00:00";

        // Update the stopwatch every 1 second
        this.loop = setInterval(() => this.refreshTime(), 1 * MILI_IN_SEC);


    }


    refreshTime() {

        // Get actual Time
        this.now = new Date().getTime();

        // Find the difference between now and the start time
        this.elapsedTime = this.now - this.startTime;

        this.updateview();
    }


    stop() {

        if (this.startTime == 0)
            return 0;

        this.finalTime = new Date().getTime();
        clearInterval(this.loop);
        this.elapsedTime = this.finalTime - this.startTime;

        //preventing from calling stop() twice
        this.startTime = 0;

        this.updateview();

        return this.elapsedTime;
    }


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
