import {computeRareWeapon} from './weapons';
import {RareWeapon, Weapon} from "../types/Equipment";
import {Elements} from "../types/Misc";

it('compute rare weapon', () => {
    const rareWeapon: RareWeapon = {
        base: {
            cost: 250,
            type: Elements.Physical
        },
        // att1: undefined,
        // att2: undefined,
        type: Elements.Wind
    }
    const expectedWeapon: Weapon = {
        // att1: undefined,
        // att2: undefined,
        // category: "",
        cost: 350,
        // damage: 0,
        // hands: 0,
        // name: "",
        // prec: 0,
        // range: "",
        type: Elements.Wind
    }
    expect(computeRareWeapon(rareWeapon)).toEqual(expectedWeapon);
});