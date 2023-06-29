import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
import { IPlayer } from "../models/player.model";
import { Cost } from "../models/Capacity.model";





export const hitMonster = createAction('[Player] Attack Monster', props<{ damage: number, playerId: number, cost: Cost }>());

export const resetTurn = createAction('[Player] Reset Turn')

export const healPlayer = createAction('[Player] Heal', props<{ playerId: number, heal: number, cost: Cost }>());

export const initPlayers = createAction('[Player] Init Players', props<{ players: IPlayer[] }>());

export const applyInvincibility = createAction(
    '[Player] Apply Invincibility',
    props<{ playerId: number, duration: number, cost: Cost }>()
);