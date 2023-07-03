
import { createReducer, createSelector, on } from '@ngrx/store';
import { IMonster, initialMonster } from './../models/monster.model';
import { IPlayer, initialPlayers } from './../models/player.model';
import { applyInvincibility, healPlayer, hitMonster, initPlayers, resetTurn, healTeam } from './../actions/player.action';
import { hitBack } from '../actions/monster.action';
import { Capacity, initialCapacities } from '../models/Capacity.model';




export interface GameState {
    monster: IMonster;
    players: IPlayer[];
    turns: Array<number>;
    capacities: Capacity[];
    invinciblePlayers: Set<number>; // Array to track invincible player IDs
}

export const initialState: GameState = {
    monster: initialMonster,
    players: initialPlayers,
    turns: [],
    capacities: initialCapacities,
    invinciblePlayers: new Set<number>(), // Initialize invinciblePlayers as an empty array
};

export const gameReducer = createReducer(
    initialState,
    on(initPlayers, (state, { players }) => ({ ...state, players })),
    on(hitMonster, (state, { damage, playerId }) => {
        let newState = {
            ...state,
            monster: {
                ...state.monster,
                pv: state.monster.pv - damage
            },
            turns: state.turns.concat([playerId])
        }


        return newState

    }),
    on(resetTurn, (state) => {
        let newState = {
            ...state,
            turns: [],
            players: state.players.map(player => {
                if (player.isInvincible && player.isInvincible > 0) {
                    return {
                        ...player,
                        isInvincible: player.isInvincible - 1
                    }
                }
                return player
            })
        }

        return newState

    }),
    on(hitBack, (state, { damage, playerId }) => {
        let newState = state;

        // Check if the player is not invincible before reducing their hit points
        newState = {
            ...state,
            players: state.players.map((player, index) => {
                if (player.id === playerId) {
                    return { ...state.players[index], pv: state.players[index].pv - damage };
                } else {
                    return player;
                }
            })
        };



        // Return the new state
        return newState;
    }),
    on(healPlayer, (state, { playerId, heal }) => ({
        ...state,
        players: state.players.map(player =>
            player.id === playerId ? { ...player, pv: player.pv + heal } : player
        ),
        turns: state.turns.concat([playerId])
    })),

    on(applyInvincibility, (state, { playerId, duration }) => {
        return {
            ...state,
            players: state.players.map(player => {
                if (player.id === playerId) {
                    return {
                        ...player,
                        isInvincible: duration
                    }
                }
                return player
            }),
            turns: state.turns.concat([playerId])
        }
    }),

    on(healTeam, (state, { heal }) => {
        const updatedPlayers = state.players.map(player => ({
            ...player,
            pv: player.pv + heal
        }));

        return {
            ...state,
            players: updatedPlayers,
            turns: state.turns.filter(playerId => {
                const affectedPlayer = updatedPlayers.find(player => player.id === playerId);
                return !affectedPlayer || affectedPlayer.pv > 0;
            })
        };
    })

)