export interface IMonster {
    id: number;
    name: string;
    pvMax: number,
    pv: number,
    stunnedMonsterDuration: number;
}

export const initialMonster: IMonster = {
    id: 1,
    name: 'Baron Nashor',
    pvMax: 800,
    pv: 800,
    stunnedMonsterDuration: 0,
};