import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IMonster } from 'src/app/models/monster.model';
import { GameState } from 'src/app/reducers/game.reducer';
import { hitBack, monsterdead } from 'src/app/actions/monster.action';
import { map } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';
import { IPlayer } from 'src/app/models/player.model';
@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(0)' })),
      transition('open => closed', [
        animate(300, keyframes([
          style({ filter: 'brightness(1000%)', transform: 'translateX(-10px)' }),
          style({ filter: 'brightness(100%)', transform: 'translateX(10px)' }),
          style({ filter: 'brightness(1000%)', transform: 'translateX(-10px)' })
        ]))
      ]),
      transition('closed => open', [
        animate(300, keyframes([
          style({ filter: 'brightness(1000%)', transform: 'translateX(10px)' }),
          style({ filter: 'brightness(100%)', transform: 'translateX(-10px)' }),
          style({ filter: 'brightness(1000%)', transform: 'translateX(10px)' })
        ]))
      ])
    ]),
  ]
})

export class MonsterComponent implements OnInit {
  monster?: IMonster;
  isOpen = true;
  deadMonster = false;
  isStunned = false;
  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) {
  }

  // Lorsque le composant est initialisé la méthode ngOnInit se lance et initialise la propriété monster de notre composant
  //Ici nous récupérons le state Monster pour initialiser la propriété Monster de notre composants ce qui nous permet de l'utiliser dans monster.component.html
  ngOnInit(): void {
    if (this.monster && this.monster.pv && this.monster.pv <= 0) {
      this.store.dispatch(monsterdead());
    }
    this.store.pipe(
      select('game'),
      map((gameState: GameState) => {
        return gameState.deadMonster;
      })
    ).subscribe((deadMonster) => {
      this.deadMonster = deadMonster;
    });

    this.store.select(state => state.game).subscribe((game: GameState) => {
      // Vérifier que le monstre affiche a des pv > game.monster > hitback
      const damage = Math.floor(Math.random() * 20) + 1;
      let playersCanAttack = game.players.filter((player: IPlayer) => {
        if (player.pv && !player.isInvincible) {
          return player
        }
      })
      console.log('PlayerCanAttack', playersCanAttack);

      console.log(game.monster);

      let player = playersCanAttack[Math.floor(Math.random() * playersCanAttack.length)]
      if (game.monster.stunnedMonsterDuration > 0 && !this.deadMonster) {
        this.isStunned = true; // Set isStunned to true only when monster is stunned and not dead
      } else {
        this.isStunned = false; // Set isStunned to false otherwise
      }
      // while (game.monster.stunnedMonsterDuration > 0) {
      //   this.isStunned = true;

      // }


      if (this.monster && player) {
        if (this.monster.pv !== game.monster.pv && game.monster.stunnedMonsterDuration <= 0 && !this.deadMonster) {
          this.isOpen = !this.isOpen;

          this.store.dispatch(hitBack({ damage, playerId: player.id }));
        }
      }

      this.monster = game.monster;
      // un petit console log pour s'assurer de ce qu'on fait 
      //console.log('MonsterComponent', game.monster); 
    });
    this.isOpen = !this.isOpen;

  }
  get monsterdead(): boolean {
    return !!this.monster && !!this.monster.pv && this.monster.pv <= 0;
  }
}

