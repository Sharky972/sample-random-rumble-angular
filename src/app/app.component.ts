import { Component } from '@angular/core';

import { GameState } from './reducers/game.reducer';
import { Store } from '@ngrx/store';
import { initPlayers } from './actions/player.action';
import { PlayerService } from './services/player.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'royal-rumble';
  constructor(private playerService: PlayerService, private store: Store<{ game: GameState }>) {
    this.initPlayers();
  }

  private initPlayers() {
    const players = [
      this.playerService.createPlayer("Warrior"),
      this.playerService.createPlayer("Mage"),
      this.playerService.createPlayer("Rogue"),
      this.playerService.createPlayer("Tank")
    ]

    this.store.dispatch(initPlayers({ players: players }));

  }
}