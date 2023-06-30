import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMonster } from 'src/app/models/monster.model';
import { GameState } from 'src/app/reducers/game.reducer';
import { hitBack } from 'src/app/actions/monster.action';
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
    ])
  ]
})

export class MonsterComponent implements OnInit {
  monster?: IMonster;
  isOpen = true;
  // Récupérons le store grace a l'injection de dépendance
  constructor(private store: Store<{ game: GameState }>) {
  }

  // Lorsque le composant est initialisé la méthode ngOnInit se lance et initialise la propriété monster de notre composant
  //Ici nous récupérons le state Monster pour initialiser la propriété Monster de notre composants ce qui nous permet de l'utiliser dans monster.component.html
  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      // Vérifier que le monstre affiche a des pv > game.monster > hitback
      const damage = Math.floor(Math.random() * 10) + 1;
      let player = game.players[Math.floor(Math.random() * game.players.length)]

      while ((player.isInvincible == undefined || player.isInvincible > 0) && player.pv > 0) {
        // console.log(game.players[Math.floor(Math.random() * game.players.length)]);
        player = game.players[Math.floor(Math.random() * game.players.length)]
      }
      if (this.monster) {
        if (this.monster.pv !== game.monster.pv) {
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
}