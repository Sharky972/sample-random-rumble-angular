import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { hitMonster } from 'src/app/actions/player.action';
import { Capacity } from 'src/app/models/Capacity.model';

import { IPlayer, Player } from 'src/app/models/player.model';
import { GameState } from 'src/app/reducers/game.reducer';

@Component({
  selector: 'app-button-capacity',
  templateUrl: './button-capacity.component.html',
  styleUrls: ['./button-capacity.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonCapacityComponent {
  @Input() capacity?: Capacity;
  @Input() player?: IPlayer;
  @Output() capacityClicked: EventEmitter<Capacity> = new EventEmitter<Capacity>();
  enabledCapacity: boolean = true;
  turns?: Array<number>;
  isDisabled: boolean = false;

  constructor(private store: Store<{ game: GameState }>) {
  }

  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game) => {
      game.players.forEach((player) => {
        if (player.id === this.player?.id && this.capacity?.cost?.name) {
          if ((player as any)[this.capacity?.cost?.name] < this.capacity?.cost?.value) {
            this.enabledCapacity = false;
          }
        }
      })
    })
    this.store.select(state => state.game).subscribe((game: GameState) => {
      this.turns = game.turns;
      if (this.player) {
        game.turns.includes(this.player.id) ? this.isDisabled = true : this.isDisabled = false;
      }
    });
  }

  onClick(): void {
    if (this.capacity) {
      this.capacityClicked.emit(
        this.capacity
      );
    }
  }

}