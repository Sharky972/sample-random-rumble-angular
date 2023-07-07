import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { IPlayer } from 'src/app/models/player.model';
import { resetTurn, dead } from 'src/app/actions/player.action';
import { Capacity } from 'src/app/models/Capacity.model';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players?: IPlayer[];


  constructor(private store: Store<{ game: GameState }>) {
  }
  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.players = game.players;
      if (game.players.length === game.turns.length) {
        this.store.dispatch(resetTurn())
      }
    });

  }

}
