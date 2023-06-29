import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { hitBack } from 'src/app/actions/monster.action';
import { applyInvincibility, healPlayer, hitMonster } from 'src/app/actions/player.action';
import { Capacity } from 'src/app/models/Capacity.model';

import { IPlayer } from 'src/app/models/player.model';
import { GameState } from 'src/app/reducers/game.reducer';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {
  @Input() player?: IPlayer;
  capacities: Capacity[] = [];

  constructor(private store: Store<{ game: GameState }>) {
    this.store.select(state => state.game.capacities).subscribe((capacities) => {
      this.capacities = capacities;
    });
  }

  capacityClickHandler($event: Capacity): void {
    console.log($event);
    if (this.player) {

      switch ($event.type) {
        case 'attack':
          if (this.player.mana < $event.cost.value) {
            return;
          }
          this.store.dispatch(
            hitMonster({ playerId: this.player?.id, damage: $event.damage, cost: $event.cost })
          )
          break;
        case 'heal':
          this.store.dispatch(
            healPlayer({ playerId: this.player?.id, heal: $event.damage, cost: $event.cost })
          )
          break;
        case 'invincibility':
          this.store.dispatch(
            applyInvincibility({ playerId: this.player?.id, duration: $event.damage, cost: $event.cost })
          )
          break;
      }
    }
  }
}