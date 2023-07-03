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
    spellIcon: string;
    description: string;
}
export const initialCapacities: Capacity[] = [
    { id: 1, name: "Orb of Deception", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10, type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Orb_of_Deception.png", description: "" },
    { id: 2, name: "Fox-Fire", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -20, type: "attack", faIcon: "fa-solid fa-shoe-prints fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Fox-Fire.png", description: "" },
    { id: 3, name: "Charm", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Charm.png", description: "" },
    { id: 4, name: "Spirit Rush", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Spirit_Rush.png", description: "" },
    { id: 5, name: "Comet Spear", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce", spellIcon: "/assets/images/panthicon/Pantheon_Comet_Spear_HD.png", description: "" },
    { id: 6, name: "Shield Vault", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 20, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce", spellIcon: "/assets/images/panthicon/Pantheon_Shield_Vault_HD.png", description: "" },
    { id: 7, name: "Aegis Assault", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/panthicon/Pantheon_Aegis_Assault_HD.png", description: "" },
    { id: 8, name: "Grand Starfall", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce", spellIcon: "/assets/images/panthicon/Pantheon_Grand_Starfall_HD.png", description: "" },
    { id: 9, name: "Alpha Strike", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Double_Strike_HD.png", description: "" },
    { id: 10, name: "Meditate", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 20, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Meditate_HD.png", description: "" },
    { id: 11, name: "Wuju Style", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Wuju_Style_HD.png", description: "" },
    { id: 12, name: "Highlander", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Highlander_HD.png", description: "" },
    { id: 13, name: "Dance of Arrows", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/kindredicon/Dance_of_Arrows_HD.png", description: "" },
    { id: 14, name: "Wolf's Frenzy", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/kindredicon/Wolf's_Frenzy_HD.png", description: "" },
    { id: 15, name: "Mounting Dread", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/kindredicon/Mounting_Dread_HD.png", description: "" },
    { id: 16, name: "Lamb's Respite", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/kindredicon/Lamb's_Respite_HD.png", description: "" },
    { id: 17, name: "Run Away", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/crapaud/Rift_Scuttler_profileicon.webp", description: "" },


];


