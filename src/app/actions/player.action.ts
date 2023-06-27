import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";




export const hitMonster = createAction('[Player] Attack Monster', props<{ damage: number, playerId: number }>());

export const resetTurn = createAction('[Player] Reset Turn')