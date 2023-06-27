import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/reducers/game.reducer';
import { hitMonster } from 'src/app/actions/player.action';
import { hitBack } from 'src/app/actions/monster.action';

import { IPlayer, Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-button-capacity',
  templateUrl: './button-capacity.component.html',
  styleUrls: ['./button-capacity.component.scss']
})
export class ButtonCapacityComponent {
  @Input() player?: IPlayer;
  turns?: Array<number>;
  isDisabled: boolean = false;

  constructor(private store: Store<{ game: GameState }>) {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.turns = game.turns;
      if (this.player) {
        this.turns.includes(this.player.id) ? this.isDisabled = true : this.isDisabled = false;
      }
    });
  }

  onClick() {
    if (this.player && !this.isDisabled) {
      const damage = 10;
      this.store.dispatch(hitMonster({ damage, playerId: this.player?.id }));
      console.log('aie !');
    }
  }
}