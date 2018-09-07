import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../common/user/user';


@Component({
    selector: 'app-inital-view',
    templateUrl: './initial-view.component.html',
    styleUrls: ['./initial-view.component.scss']
})
export class InitialViewComponent implements OnInit {

    @Input() user: User;

    constructor() { }

    ngOnInit() {
        this.user = { name: "" };
    }

}
