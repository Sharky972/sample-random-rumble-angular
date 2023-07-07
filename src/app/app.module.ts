import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { gameReducer } from './reducers/game.reducer';

import { MonsterComponent } from './components/monster/monster.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ButtonCapacityComponent } from './components/button-capacity/button-capacity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlayerModalComponent } from './components/player-modal/player-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    PlayerListComponent,
    PlayerCardComponent,
    ProgressBarComponent,
    ButtonCapacityComponent,
    PlayerModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ game: gameReducer }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
