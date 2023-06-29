export interface Cost {
    name: string;
    value: number;
    faIcon: string;
}
export interface Capacity {
    id: number;
    name: string;
    color: string;
    btnBootstrapColor: string;
    cost: Cost;
    type: string;
    damage: number;
    faIcon: string;
}
export const initialCapacities: Capacity[] = [
    { id: 1, name: "Orb of Deception", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10, type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce" },
    { id: 2, name: "Fox-Fire", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -20, type: "attack", faIcon: "fa-solid fa-shoe-prints fa-bounce" },
    { id: 3, name: "Charm", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce" },
    { id: 4, name: "Spirit Rush", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce" },
    { id: 5, name: "Pulverize", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce" },
    { id: 6, name: "Head-Butt", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 20, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce" },
    { id: 7, name: "Trample", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce" },
    { id: 8, name: "Unbreakable Will", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce" },
    { id: 9, name: "Alpha Strike", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce" },
    { id: 10, name: "Meditate", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 20, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce" },
    { id: 11, name: "Wuju Style", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce" },
    { id: 12, name: "Highlander", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce" },
    { id: 13, name: "Tumble", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce" },
    { id: 14, name: "Silver Bolts", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce" },
    { id: 15, name: "Condemn", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce" },
    { id: 16, name: "Final Hour", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce" },
    { id: 17, name: "Run Away", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce" },


];


