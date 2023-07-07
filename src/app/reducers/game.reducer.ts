
import { createReducer, createSelector, on } from '@ngrx/store';
import { IMonster, initialMonster } from './../models/monster.model';
import { IPlayer, initialPlayers } from './../models/player.model';
import { applyInvincibility, healPlayer, hitMonster, initPlayers, resetTurn, healTeam, reducePlayerMana, StunMonster, dead } from './../actions/player.action';
import { hitBack, monsterdead } from '../actions/monster.action';
import { Capacity, initialCapacities } from '../models/Capacity.model';




export interface GameState {
    monster: IMonster;
    players: IPlayer[];
    turns: Array<number>;
    capacities: Capacity[];
    invinciblePlayers: Set<number>; // Array to track invincible player IDs
    deadPlayers: Array<number>; // Array to
    deadMonster: boolean; // Whether monster dead or not
}

export const initialState: GameState = {
    monster: initialMonster,
    players: initialPlayers,
    turns: [],
    capacities: initialCapacities,
    invinciblePlayers: new Set<number>(), // Initialize invinciblePlayers as an empty array
    deadPlayers: [],
    deadMonster: false,
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
            monster: {
                ...state.monster,
                stunnedMonsterDuration: state.monster.stunnedMonsterDuration > 0 ? state.monster.stunnedMonsterDuration - 1 : 0
            },
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
        console.log('restore player turn ', newState);

        return newState

    }),
    on(hitBack, (state, { damage, playerId }) => {
        // Check if the monster is stunned before allowing the hit back
        if (state.monster.stunnedMonsterDuration > 0) {
            return state; // Monster is stunned, so it cannot hit back
        }

        const updatedPlayers = state.players.map(player => {
            if (player.id === playerId) {
                return {
                    ...player,
                    pv: player.pv - damage
                };
            }
            return player;
        });

        return {
            ...state,
            players: updatedPlayers
        };
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
    on(StunMonster, (state, { duration, damage, playerId }) => {
        // Update the stunnedMonsterDuration with the provided duration
        return {
            ...state,

            monster: {
                ...state.monster,
                pv: state.monster.pv - damage,
                stunnedMonsterDuration: duration,
            },
            turns: state.turns.concat([playerId])
        };


    }),


    on(healTeam, (state, { heal, playerId }) => {
        const updatedPlayers = state.players.map(player => ({
            ...player,
            pv: player.pv + heal
        }));

        return {
            ...state,
            players: updatedPlayers,
            turns: state.turns.concat([playerId])
        };
    }),
    on(reducePlayerMana, (state, { playerId, cost }) => {
        const updatedPlayers = state.players.map(player => {
            if (player.id === playerId) {
                return {
                    ...player,
                    mana: player.mana - cost.value,
                };
            }
            return player;
        });
        return {
            ...state,
            players: updatedPlayers,
        };
    }),

    on(dead, (state, { playerId }) => {
        return {
            ...state,
            deadPlayers: state.deadPlayers.concat([playerId])
        }
    }),

    on(monsterdead, (state, { }) => {
        return {
            ...state,
            deadMonster: true,
        }
    })


)