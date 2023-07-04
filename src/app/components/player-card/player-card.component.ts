import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { hitBack } from 'src/app/actions/monster.action';
import { applyInvincibility, healPlayer, hitMonster, healTeam, reducePlayerMana, StunMonster } from 'src/app/actions/player.action';
import { Capacity } from 'src/app/models/Capacity.model';

import { IPlayer } from 'src/app/models/player.model';
import { GameState } from 'src/app/reducers/game.reducer';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  animations: [
    trigger('attack', [
      state('open', style({ transform: 'scale(1) translateY(0)' })),
      state('closed', style({ transform: 'scale(1) translateY(0)' })),
      transition('open => closed', [
        animate(300, keyframes([
          style({ transform: 'scale(1.8) translateY(-50px)' }),
          style({ transform: 'scale(1.5) translateY(-80px)' }),
          style({ transform: 'scale(1) translateY(-100px)' })
        ]))
      ]),
      transition('closed => open', [
        animate(300, keyframes([
          style({ transform: 'scale(1.8) translateY(-100px)' }),
          style({ transform: 'scale(1.5) translateY(-80px)' }),
          style({ transform: 'scale(1) translateY(-50px)' })
        ]))
      ])
    ])
  ]
})
export class PlayerCardComponent {
  @Input() player?: IPlayer;
  capacities: Capacity[] = [];
  attack = true;

  constructor(private store: Store<{ game: GameState }>) {
    this.store.select(state => state.game.capacities).subscribe((capacities) => {
      this.capacities = capacities;
    });
  }

  capacityClickHandler($event: Capacity): void {
    this.attack = !this.attack;
    if (this.player) {


      switch ($event.type) {
        case 'attack':
          if (this.player.mana < $event.cost.value) {
            return;
          }
          this.store.dispatch(
            hitMonster({ playerId: this.player?.id, damage: $event.damage, cost: $event.cost })
          )
          this.store.dispatch(
            reducePlayerMana({ playerId: this.player?.id, cost: $event.cost })
          )
          break;
        case 'heal':
          this.store.dispatch(
            healPlayer({ playerId: this.player?.id, heal: $event.damage, cost: $event.cost })
          )
          this.store.dispatch(
            reducePlayerMana({ playerId: this.player?.id, cost: $event.cost })
          )
          break;
        case 'invincibility':
          this.store.dispatch(
            applyInvincibility({ playerId: this.player?.id, duration: $event.damage, cost: $event.cost })
          )
          this.store.dispatch(
            reducePlayerMana({ playerId: this.player?.id, cost: $event.cost })
          )
          break;
        case 'healTeam':
          this.store.dispatch(
            healTeam({ heal: $event.damage, cost: $event.cost, playerId: this.player?.id })
          )
          this.store.dispatch(
            reducePlayerMana({ playerId: this.player?.id, cost: $event.cost })
          );
          break;
        case 'stun':
          this.store.dispatch(
            StunMonster({ duration: $event.damage, damage: $event.damage, cost: $event.cost, playerId: this.player?.id })
          )

          this.store.dispatch(
            reducePlayerMana({ playerId: this.player?.id, cost: $event.cost })
          );
          break;
      }
    }
  }
}