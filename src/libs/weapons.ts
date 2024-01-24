import {Weapon, RareWeapon} from "../types/Equipment";
import {Elements} from "../types/Misc";

export function computeRareWeapon(rweapon: RareWeapon): Weapon {
    function calcCost(): number {
        let cost = rweapon.base.cost;

        // Changed type
        if (rweapon.type !== rweapon.base.type) {
            cost += 100;
        }

        // Changed attributes
        if (rweapon.base.att1 !== rweapon.att1 || rweapon.base.att2 !== rweapon.att2) {
            if (rweapon.att1 === rweapon.att2) {
                cost += 50;
            }
        }

        // Bonus damage
        if (rweapon.damageBonus > 0) {
            cost += 200;
        }

        // Bonus prec
        if (rweapon.base.prec !== 1 && rweapon.precBonus) {
            cost += 100;
        }

        // Quality
        cost += rweapon.qualityCost;

        return cost
    }

    function calcDamage() {
        let damage = rweapon.base.damage;

        // Changed type
        if (rweapon.base.hands === 1 && rweapon.hands === 2) {
            damage += 4;
        }
        if (rweapon.base.hands === 2 && rweapon.hands === 1) {
            damage -= 4;
        }

        // Bonus damage
        if (damageBonus) {
            damage += 4;
        }

        return damage;
    }

    function calcPrec() {
        let prec = base.prec;

        // Bonus prec
        if (prec !== 1 && precBonus) {
            prec = 1;
        }
        return prec;
    }

    return {
        att1: rweapon.att1,
        att2: rweapon.att2,
        category: rweapon.base.category,
        cost: calcCost(),
        // damage: 0,
        // hands: 0,
        // name: "",
        // prec: 0,
        // range: "",
        type: Elements.Wind
    }
}