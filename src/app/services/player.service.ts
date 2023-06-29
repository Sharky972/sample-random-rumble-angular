
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
        return new Warrior(1, "/assets/images/Yigif.gif", "Master Yi", 0, 100, 30, 30, [
          { id: 9, name: "Alpha Strike", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 30, type: "attack", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-fist-raised" },
          { id: 10, name: "Meditate", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt" }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical " },
          { id: 11, name: "Wuju Style", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 20, type: "attack", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-fist-raised" },
          { id: 12, name: "Highlander", color: "green", cost: { name: "mana", value: 40, faIcon: "fa-solid fa-fire-alt" }, damage: 100, type: "attack", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-shield " },
        ]);
      case "Mage":
        return new Mage(2, "/assets/images/ahrigif.gif", "Ahri", 0, 100, 30, 30, [
          { id: 1, name: "Orb of Deception", color: "blue", btnBootstrapColor: "btn-info", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 20, type: "attack", faIcon: "fa-solid fa-wand-sparkles " },
          { id: 2, name: "Fox-Fire", color: "blue", btnBootstrapColor: "btn-info", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt" }, damage: 15, type: "attack", faIcon: "fa-solid fa-wand-sparkles " },
          { id: 3, name: "Charm", color: "pink", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 10, type: "attack", btnBootstrapColor: "btn-danger", faIcon: "fa-solid fa-wand-sparkles " },
          { id: 4, name: "Spirit Rush", color: "blue", cost: { name: "mana", value: 40, faIcon: "fa-solid fa-fire-alt" }, damage: 40, type: "attack", btnBootstrapColor: "btn-info", faIcon: "fa-solid fa-wand-sparkles " },

        ]);
      case "Healer":
        return new Healer(3, "", "", 100, 100, 30, 30, [
          { id: 1, name: "Coup de poing", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: -10, type: "attack", faIcon: "fa-solid fa-fist-raised " },
          { id: 4, name: "Soin", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 10, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical " },
          { id: 5, name: "Soin de groupe", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt " }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical " },
        ]);
      case "Tank":
        return new Tank(4, "/assets/images/panthgif.gif", "Pantheon", 100, 100, 30, 30, [
          { id: 5, name: "Comet Spear", color: "orange", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 15, type: "attack", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fist-raised" },
          { id: 6, name: "Shield Vault", color: "orange", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-fire-alt" }, damage: 15, type: "attack", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fist-raised" },
          { id: 7, name: "Aegis Assault", color: "orange", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 3, type: "invincibility", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-fist-raised" },
          { id: 8, name: "Grand Starfall", color: "orange", cost: { name: "mana", value: 40, faIcon: "fa-solid fa-fire-alt" }, damage: 50, type: "shield", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-fist-raised " },

        ]);
      case "Rogue":
        return new Rogue(5, "/assets/images/kindredgif.gif", "Kindred", 0, 100, 30, 30, [
          { id: 13, name: "Dance of Arrows", color: "purple", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 20, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-angles-right " },
          { id: 14, name: "Wolf's Frenzy", color: "purple", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 30, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-brands fa-wolf-pack-battalion " },
          { id: 15, name: "Mounting Dread", color: "purple", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt" }, damage: 10, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-angles-right " },
          { id: 16, name: "Lamb's Respite", color: "purple", cost: { name: "mana", value: 40, faIcon: "fa-solid fa-fire-alt" }, damage: 50, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield " },

        ]);
      default:
        return new Crapaud(6, "/assets/images/crabygif.gif", "Jeam-Michel Crapaud", 1, 1, 0, 0, [
          { id: 17, name: "Run Away", color: "yellow", cost: { name: "mana", value: 0, faIcon: "fa-solid fa-fire-alt " }, damage: -1, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shoe-prints " },

        ]);
    }
  }
}