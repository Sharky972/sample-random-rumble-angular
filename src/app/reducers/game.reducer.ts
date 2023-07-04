
import { createReducer, createSelector, on } from '@ngrx/store';
import { IMonster, initialMonster } from './../models/monster.model';
import { IPlayer, initialPlayers } from './../models/player.model';
import { applyInvincibility, healPlayer, hitMonster, initPlayers, resetTurn, healTeam, reducePlayerMana, StunMonster } from './../actions/player.action';
import { hitBack } from '../actions/monster.action';
import { Capacity, initialCapacities } from '../models/Capacity.model';




export interface GameState {
    monster: IMonster;
    players: IPlayer[];
    turns: Array<number>;
    capacities: Capacity[];
    invinciblePlayers: Set<number>; // Array to track invincible player IDs
    stunnedMonsterDuration: number;
}

export const initialState: GameState = {
    monster: initialMonster,
    players: initialPlayers,
    turns: [],
    capacities: initialCapacities,
    invinciblePlayers: new Set<number>(), // Initialize invinciblePlayers as an empty array
    stunnedMonsterDuration: 0,
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
        // Check if the monster is stunned before allowing the hit back
        if (state.stunnedMonsterDuration > 0) {
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
                pv: state.monster.pv - damage
            },
            players: state.players.map(player => {
                if (player.id === playerId) {
                    return {
                        ...player,
                        stunnedMonsterDuration: duration,
                    }
                }
                return player
            }),
            turns: state.turns.concat([playerId])
        };


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


)
export const isMonsterStunned: (state: GameState) => boolean = createSelector(
    (state: GameState) => state.stunnedMonsterDuration,
    stunnedMonsterDuration => stunnedMonsterDuration > 0
);