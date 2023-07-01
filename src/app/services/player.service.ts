
import { Injectable } from '@angular/core';
import { Crapaud, Healer, IPlayer, Mage, Rogue, Tank, Warrior } from 'src/app/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  createPlayer(type: string): IPlayer {
    switch (type) {
      case "Warrior":
        return new Warrior(1, "/assets/images/Yigif.gif", "Master Yi", 100, 100, 30, 30, [
          { id: 9, name: "Alpha Strike", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Double_Strike_HD.png" },
          { id: 10, name: "Meditate", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 20, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Meditate_HD.png" },
          { id: 11, name: "Wuju Style", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Wuju_Style_HD.png" },
          { id: 12, name: "Highlander", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Highlander_HD.png" },
        ]);
      case "Mage":
        return new Mage(2, "/assets/images/ahrigif.gif", "Ahri", 100, 100, 30, 30, [
          { id: 1, name: "Orb of Deception", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10, type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Orb_of_Deception.png" },
          { id: 2, name: "Fox-Fire", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -20, type: "attack", faIcon: "fa-solid fa-shoe-prints fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Fox-Fire.png" },
          { id: 3, name: "Charm", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_charm.png" },
          { id: 4, name: "Spirit Rush", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Spirit_Rush.png" },
        ]);
      case "Healer":
        return new Healer(3, "", "", 100, 100, 30, 30, [
          { id: 1, name: "Orb of Deception", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -10, type: "attack", faIcon: "fa-solid fa-fist-raised fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Orb_of_Deception.png" },
          { id: 2, name: "Fox-Fire", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: -20, type: "attack", faIcon: "fa-solid fa-shoe-prints fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Fox-Fire.png" },
          { id: 3, name: "Charm", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_charm.png" },
          { id: 4, name: "Spirit Rush", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce", spellIcon: "/assets/images/ahriicon/Ahri_Spirit_Rush.png" },
        ]);
      case "Tank":
        return new Tank(4, "/assets/images/panthgif.gif", "Pantheon", 100, 100, 30, 30, [
          { id: 5, name: "Comet Spear", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 10, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce", spellIcon: "/assets/images/panthicon/Pantheon_Comet_Spear_HD.png" },
          { id: 6, name: "Shield Vault", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart fa-bounce" }, damage: 20, type: "mana", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt fa-bounce", spellIcon: "/assets/images/panthicon/Shield_Vault_HD.png" },
          { id: 7, name: "Aegis Assault", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/panthicon/Pantheon_Aegis_Assault_HD.png" },
          { id: 8, name: "Grand Starfall", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical fa-bounce", spellIcon: "/assets/images/panthicon/Pantheon_Grand_Starfall_HD.png" },
        ]);
      case "Rogue":
        return new Rogue(5, "/assets/images/kindredgif.gif", "Kindred", 100, 100, 30, 30, [
          { id: 13, name: "Dance of Arrows", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/kindredicon/Dance_of_Arrows_HD.png" },
          { id: 14, name: "Wolf's Frenzy", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/kindredicon/Wolf's_Frenzy_HD.png" },
          { id: 15, name: "Mounting Dread", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/kindredicon/Mounting_Dread_HD.png" },
          { id: 16, name: "Lamb's Respite", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/kindredicon/Lamb's_Respite_HD.png" },
        ]);
      default:
        return new Crapaud(6, "/assets/images/crabygif.gif", "Jeam-Michel Crapaud", 1, 1, 0, 0, [
          { id: 17, name: "Run Away", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt fa-bounce" }, damage: 10, type: "shield", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield fa-bounce", spellIcon: "/assets/images/crapaud/Rift_Scuttler_profileicon.webp" },

        ]);
    }
  }
}