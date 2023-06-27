
import { createReducer, createSelector, on } from '@ngrx/store';
import { IMonster, initialMonster } from './../models/monster.model';
import { IPlayer, initialPlayers } from './../models/player.model';
import { hitMonster, resetTurn } from './../actions/player.action';
import { hitBack } from '../actions/monster.action';



export interface GameState {
    monster: IMonster;
    players: IPlayer[];
    turns: Array<number>;
}

export const initialState: GameState = {
    monster: initialMonster,
    players: initialPlayers,
    turns: [],
};

export const gameReducer = createReducer(
    initialState,
    on(hitMonster, (state, { damage, playerId }) => {
        let newState = {
            ...state,
            monster: {
                ...state.monster,
                pv: state.monster.pv - damage
            },
            turns: state.turns.concat([playerId])
        }
        console.log('Hit Monster Action Reducer ', newState);

        return newState

    }),
    on(resetTurn, (state) => {
        let newState = {
            ...state,
            turns: []
        }
        console.log('rest Turns Action Reducer ', newState);
        return newState

    }),
    on(hitBack, (state, { damage, playerId }) => {
        // Create a new state object with a copy of the old state
        let newState = {
            ...state,
            players: state.players.map((player) => {
                // If the player ID matches the attacking player's ID, reduce their hit points
                if (player.id === playerId) {
                    return { ...player, pv: player.pv - damage };
                } else {
                    return player;
                }
            })
        };

        // Log the new state to the console for debugging purposes
        console.log('Monster hitback Action Reducer ', newState);

        // Return the new state
        return newState;
    })


)