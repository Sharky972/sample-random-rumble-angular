import { createAction } from "@ngrx/store";
import { props } from "@ngrx/store";
import { IPlayer } from "../models/player.model";
import { Cost } from "../models/Capacity.model";





export const hitMonster = createAction('[Player] Attack Monster', props<{ damage: number, playerId: number, cost: Cost }>());

export const resetTurn = createAction('[Player] Reset Turn')

export const healPlayer = createAction('[Player] Heal', props<{ playerId: number, heal: number, cost: Cost }>());

export const healTeam = createAction(
    '[Player] Heal All Players',
    props<{ heal: number; cost: Cost; playerId: number }>()
);
export const initPlayers = createAction('[Player] Init Players', props<{ players: IPlayer[] }>());

export const applyInvincibility = createAction(
    '[Player] Apply Invincibility',
    props<{ playerId: number, duration: number, cost: Cost }>()
);

export const reducePlayerMana = createAction('[Player] Reduce Player Mana', props<{ playerId: number, cost: Cost }>());

export const StunMonster = createAction('[Player] Stun Monster', props<{ damage: number, duration: number, playerId: number, cost: Cost }>());

export const dead = createAction(
    '[Player] Player dead',
    props<{ playerId: number }>()
);