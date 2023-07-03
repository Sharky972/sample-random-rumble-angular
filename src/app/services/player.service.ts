
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
          { id: 9, name: "Alpha Strike", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart " }, damage: 30, type: "attack", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt ", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Double_Strike_HD.png", description: "Master Yi becomes untargetable and dashes to strike up to four enemies, dealing damage to each. Alpha Strike can critically strike and applies on-hit effects." },
          { id: 10, name: "Meditate", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart " }, damage: 20, type: "heal", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt ", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Meditate_HD.png", description: "Master Yi channels for a few seconds, restoring health over the duration and gaining damage reduction. During this time, Master Yi becomes briefly untargetable." },
          { id: 11, name: "Wuju Style", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 10, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield ", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Wuju_Style_HD.png", description: "Master Yi's basic attacks deal bonus true damage for a few seconds. This bonus damage is applied on-hit and can critically strike." },
          { id: 12, name: "Highlander", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 50, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield ", spellIcon: "/assets/images/MasterYiicon/Master_Yi_Highlander_HD.png", description: "Master Yi gains movement speed and multiplies his passive attack speed bonus for a few seconds. Successful basic attacks extend the duration of Highlander." },
        ]);
      case "Mage":
        return new Mage(2, "/assets/images/ahrigif.gif", "Ahri", 100, 100, 30, 30, [
          { id: 1, name: "Orb of Deception", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 20, type: "attack", faIcon: "fa-solid fa-fist-raised ", spellIcon: "/assets/images/ahriicon/Ahri_Orb_of_Deception.png", description: "Ahri sends out and pulls back her orb, damaging enemies it hits going out and charming enemies it hits on the way back." },
          { id: 2, name: "Fox-Fire", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt " }, damage: 30, type: "attack", faIcon: "fa-solid fa-shoe-prints ", spellIcon: "/assets/images/ahriicon/Ahri_Fox-Fire.png", description: "Ahri releases three fox-fires that target nearby enemies, prioritizing champions, and damaging them upon successfully hitting." },
          { id: 3, name: "Charm", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 10, type: "attack", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical ", spellIcon: "/assets/images/ahriicon/Ahri_charm.png", description: "Ahri blows a kiss in a direction, damaging and charming the first enemy it hits. The charmed target is forced to move toward Ahri." },
          { id: 4, name: "Spirit Rush", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt " }, damage: 60, type: "attack", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical ", spellIcon: "/assets/images/ahriicon/Ahri_Spirit_Rush.png", description: " Ahri dashes forward and gains charges of Spirit Rush, which can be used to dash again within a short duration. Each dash damages nearby enemies." },
        ]);
      case "Healer":
        return new Healer(3, "", "", 100, 100, 30, 30, [
          { id: 1, name: "Orb of Deception", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: -10, type: "attack", faIcon: "fa-solid fa-fist-raised ", spellIcon: "/assets/images/ahriicon/Ahri_Orb_of_Deception.png", description: "Kindred fires an arrow at a target, damaging and marking them. Activating the ability again allows Kindred to dash a short distance." },
          { id: 2, name: "Fox-Fire", color: "red", btnBootstrapColor: "btn-danger", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt " }, damage: -20, type: "attack", faIcon: "fa-solid fa-shoe-prints ", spellIcon: "/assets/images/ahriicon/Ahri_Fox-Fire.png", description: "Kindred commands their spirit wolf to attack nearby enemies, while gaining bonus attack speed." },
          { id: 3, name: "Charm", color: "green", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 10, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical ", spellIcon: "/assets/images/ahriicon/Ahri_charm.png", description: "Kindred deals damage in an area around them and slows enemies hit. Targets below a certain health threshold are instead marked and take bonus damage." },
          { id: 4, name: "Spirit Rush", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt " }, damage: 20, type: "heal", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical ", spellIcon: "/assets/images/ahriicon/Ahri_Spirit_Rush.png", description: "Kindred creates a large, impassable zone on the ground that prevents allies from dying within it. When the effect ends, all champions within the zone are healed" },
        ]);
      case "Tank":
        return new Tank(4, "/assets/images/panthgif.gif", "Pantheon", 100, 100, 30, 30, [
          { id: 5, name: "Comet Spear", color: "blue", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-heart " }, damage: 20, type: "attack", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt ", spellIcon: "/assets/images/panthicon/Pantheon_Comet_Spear_HD.png", description: "Pantheon hurls his spear, damaging all enemies in its path. If the spear hits an enemy champion, Pantheon can reactivate the ability to perform a dash and strike again." },
          { id: 6, name: "Shield Vault", color: "blue", cost: { name: "pv", value: 20, faIcon: "fa-solid fa-heart " }, damage: 5, type: "attack", btnBootstrapColor: "btn-primary", faIcon: "fa-solid fa-fire-alt ", spellIcon: "/assets/images/panthicon/Pantheon_Shield_Vault_HD.png", description: "Pantheon leaps at an enemy, stunning them and dealing damage. This ability also empowers Pantheon's next basic attack." },
          { id: 7, name: "Aegis Assault", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 3, type: "invincibility", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield ", spellIcon: "/assets/images/panthicon/Pantheon_Aegis_Assault_HD.png", description: "Pantheon braces himself and blocks incoming attacks from a particular direction, gaining damage reduction. After a short duration, Pantheon leaps into the air and slams his shield, damaging and stunning nearby enemies." },
          { id: 8, name: "Grand Starfall", color: "green", cost: { name: "mana", value: 20, faIcon: "fa-solid fa-fire-alt " }, damage: 50, type: "attack", btnBootstrapColor: "btn-success", faIcon: "fa-solid fa-briefcase-medical ", spellIcon: "/assets/images/panthicon/Pantheon_Grand_Starfall_HD.png", description: "Pantheon channels briefly before leaping into the air, then crashes down to the target location, damaging and slowing all enemies in the area. Enemies in the center of the impact take additional damage." },
        ]);
      case "Rogue":
        return new Rogue(5, "/assets/images/kindredgif.gif", "Kindred", 100, 100, 30, 30, [
          { id: 13, name: "Dance of Arrows", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 30, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield ", spellIcon: "/assets/images/kindredicon/Dance_of_Arrows_HD.png", description: "Kindred fires an arrow at a target, damaging and marking them. Activating the ability again allows Kindred to dash a short distance." },
          { id: 14, name: "Wolf's Frenzy", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 10, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield ", spellIcon: "/assets/images/kindredicon/Wolf's_Frenzy_HD.png", description: "Kindred commands their spirit wolf to attack nearby enemies, while gaining bonus attack speed." },
          { id: 15, name: "Mounting Dread", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 15, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield ", spellIcon: "/assets/images/kindredicon/Mounting_Dread_HD.png", description: "Kindred deals damage in an area around them and slows enemies hit. Targets below a certain health threshold are instead marked and take bonus damage." },
          { id: 16, name: "Lamb's Respite", color: "yellow", cost: { name: "mana", value: 10, faIcon: "fa-solid fa-fire-alt " }, damage: 50, type: "healTeam", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield ", spellIcon: "/assets/images/kindredicon/Lamb's_Respite_HD.png", description: "Kindred creates a large, impassable zone on the ground that prevents allies from dying within it. When the effect ends, all champions within the zone are healed." },
        ]);
      default:
        return new Crapaud(6, "/assets/images/crabygif.gif", "Jeam-Michel Crapaud", 1, 1, 0, 0, [
          { id: 17, name: "Run Away", color: "yellow", cost: { name: "mana", value: 0, faIcon: "fa-solid fa-fire-alt " }, damage: -1, type: "attack", btnBootstrapColor: "btn-warning", faIcon: "fa-solid fa-shield ", spellIcon: "/assets/images/crapaud/Rift_Scuttler_profileicon.webp", description: "" },

        ]);
    }
  }
}