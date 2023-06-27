export interface IPlayer {
    id: number;
    name: string;
    pv: number;
    pvMax: number;
    points: number;
    attacks: IAttack[];

    canAttack: boolean;
}
export interface IAttack {
    name: string;
    damage: number;
}
export class Player implements IPlayer {
    id: number;
    name: string;
    pv: number;
    pvMax: number;
    mana: number;
    manaMax: number;
    points: number;
    canAttack: boolean;
    attacks: IAttack[];

    constructor(id: number, name: string, pv: number, pvMax: number, mana: number, manaMax: number, points: number, attacks: IAttack[], canAttack: boolean) {
        this.id = id;
        this.name = name;
        this.pv = pv;
        this.pvMax = pvMax;
        this.mana = mana;
        this.manaMax = manaMax;
        this.points = points;
        this.attacks = attacks;
        this.canAttack = canAttack;
    }
}

// Le state initial contiendra nos 4 joueurs
export const initialPlayers: IPlayer[] = [
    {
        id: 1,
        name: 'Player 1',
        pv: 100,
        pvMax: 100,
        points: 0,
        attacks: [
            { name: 'Attack 1', damage: 10 },
            { name: 'Attack 2', damage: 20 },
            { name: 'Attack 3', damage: 30 },
            { name: 'Attack 4', damage: 40 },
        ],
        canAttack: true,
    },
    {
        id: 2,
        name: 'Player 2',
        pv: 120,
        pvMax: 120,
        points: 0,
        attacks: [
            { name: 'Attack 1', damage: 5 },
            { name: 'Attack 2', damage: 10 },
            { name: 'Attack 3', damage: 15 },
            { name: 'Attack 4', damage: 20 },
        ],
        canAttack: true,
    },
    {
        id: 3,
        name: 'Player 3',
        pv: 80,
        pvMax: 80,
        points: 0,
        attacks: [
            { name: 'Attack 1', damage: 15 },
            { name: 'Attack 2', damage: 30 },
            { name: 'Attack 3', damage: 45 },
            { name: 'Attack 4', damage: 60 },
        ],

        canAttack: true,
    },
    {
        id: 4,
        name: 'Player 4',
        pv: 150,
        pvMax: 150,
        points: 0,
        attacks: [
            { name: 'Attack 1', damage: 8 },
            { name: 'Attack 2', damage: 16 },
            { name: 'Attack 3', damage: 24 },
            { name: 'Attack 4', damage: 32 },
        ],
        canAttack: true,
    },
];