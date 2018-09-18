import { Component, OnInit, Input } from '@angular/core';
import { User, createUser } from '../../../../common/user/user';
import { UserService } from '../services/user-service/user.service';

@Component({
    selector: 'app-inital-view',
    templateUrl: './initial-view.component.html',
    styleUrls: ['./initial-view.component.scss'],
    host: { 'class': 'center' }
})
export class InitialViewComponent implements OnInit {

    @Input() name: string;

    public user = createUser();

    constructor(private userService: UserService) { }

    postUser() {
        this.userService.postUser(this.name).subscribe( (user: User) => {
            this.user = user;
        } );
    }

    ngOnInit() {
    }
}
