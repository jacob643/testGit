import { Component, OnInit, Input } from '@angular/core';
import { Game, createGame } from './../../../../common/game/game';
import { Router } from '@angular/router'
import { GameService } from '../services/game.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit {

  @Input() game :Game;
  @Input() admin: Boolean;
  imageData: SafeUrl;
  constructor( private router: Router, private gameService: GameService, private sanitizer: DomSanitizer) {
      this.game = createGame();
  }

  ngOnInit() {

        if(this.gameService.listPicture[this.game.original]!=null){
            this.imageData = this.sanitizer.bypassSecurityTrustUrl(
                 window.URL.createObjectURL(this.gameService.listPicture[this.game.original])
            );
        }
     console.log(this.imageData);


  }

  playGame() {
    this.router.navigate(['/game']);
    this.gameService.changeSelectedGameID(<number>this.game.id);
  }
}
