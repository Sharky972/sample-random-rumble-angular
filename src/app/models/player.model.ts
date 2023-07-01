import { Capacity } from "./Capacity.model";


export interface IPlayer {
    id: number;
    avatar: string;
    name: string;
    pv: number;
    pvMax: number;
    mana: number;
    manaMax: number;
    isInvincible: number | undefined;
    capacities: Capacity[];
    spellIcon: string;
}
export const initialPlayers: IPlayer[] = []; //init player with dispatch action in app.component.ts


export abstract class Player implements IPlayer {
    id: number;
    avatar: string;
    name: string;
    pv: number;
    pvMax: number;
    mana: number;
    isInvincible: number | undefined;
    abstract type: string;
    manaMax: number;
    capacities: Capacity[];
    spellIcon: string;

    constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[], spellIcon: string) {
        this.id = id;
        this.avatar = avatar;
        this.name = name;
        this.pv = pv;
        this.pvMax = pvMax;
        this.mana = mana;
        this.manaMax = manaMax;
        this.capacities = capacities;
        this.spellIcon = spellIcon;
    }
}

export class Warrior extends Player {
    type = "Warrior";
    constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
        super(id, avatar, name, pv, pvMax, mana, manaMax, capacities, spellIcon);
    }
}

export class Mage extends Player {
    type = "Mage";
    constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
        super(id, avatar, name, pv, pvMax, mana, manaMax, capacities, spellIcon);
    }
}

export class Healer extends Player {
    type = "Healer";
    constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
        super(id, avatar, name, pv, pvMax, mana, manaMax, capacities, spellIcon);
    }
}

export class Tank extends Player {
    type = "Tank";
    override isInvincible: number = 0
    constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
        super(id, avatar, name, pv, pvMax, mana, manaMax, capacities, spellIcon);
    }
}

export class Rogue extends Player {
    type = "Rogue";
    override isInvincible: number = 0
    constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
        super(id, avatar, name, pv, pvMax, mana, manaMax, capacities, spellIcon);
    }
}

export class Crapaud extends Player {
    type = "Crapaud";
    constructor(id: number, avatar: string, name: string, pv: number, pvMax: number, mana: number, manaMax: number, capacities: Capacity[]) {
        super(id, avatar, name, pv, pvMax, mana, manaMax, capacities, spellIcon);
    }
}
