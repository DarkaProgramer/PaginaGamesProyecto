import { Component, OnInit, HostBinding } from '@angular/core';
import { Games } from 'src/app/models/Games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  game: Games = {
    title: '', // Eliminamos 'id' como se indica en las instrucciones
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor(private gameService: GamesService) {}

  ngOnInit() {
    // Realizamos cualquier inicialización necesaria en ngOnInit
  }

  saveNewGame() {
    // Eliminamos el campo 'id' antes de guardar el juego
    delete this.game.id;

    this.gameService.saveGames(this.game).subscribe(
      resp => {
        console.log(resp);
      },
      err => {
        console.log(err);
      }
    );
  }
}
