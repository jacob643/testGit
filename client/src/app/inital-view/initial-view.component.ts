import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../common/user/user';
import { UserService } from '../services/user-service/user.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-inital-view',
    templateUrl: './initial-view.component.html',
    styleUrls: ['./initial-view.component.scss'],
    host: { 'class': 'center' }
})
export class InitialViewComponent implements OnInit {

    @Input() name: string;

    constructor(private userService: UserService, private router: Router) { }

    postUser() {
        this.userService.postUser(this.name).subscribe((user: User) => {
            if (user) {
                this.userService.user = user;
                this.router.navigateByUrl('gamelist')
            }

        });
    }

    ngOnInit() {
    }
}
