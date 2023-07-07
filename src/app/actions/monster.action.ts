import { createAction, props } from '@ngrx/store';

export const hitBack = createAction(
    '[Monster] Hit back',
    props<{ damage: number, playerId: number }>(),
);

export const monsterdead = createAction(
    '[Monster] Monster dead',

);