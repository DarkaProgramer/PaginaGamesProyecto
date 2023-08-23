import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  games: any = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gamesService.getGames().subscribe(
      resp => {
        this.games = resp;
      },
      err => console.error(err)
    );
  }

  // Agregamos el método deleteGame según las instrucciones
  deleteGame(id: string) {
    this.gamesService.deleteGame(id).subscribe(
      resp => {
        console.log(resp);
        this.getGames(); // Llama al método para refrescar la lista después de eliminar
      },
      err => console.error(err)
    );
  }

  // Agregamos un método para obtener los juegos (si deseas reutilizarlo)
  getGames() {
    this.gamesService.getGames().subscribe(
      resp => {
        this.games = resp;
      },
      err => console.error(err)
    );
  }
}

