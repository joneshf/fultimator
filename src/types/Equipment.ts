import {Attributes, Elements} from "./Misc";

// TODO: Add weapon categories as enum

export enum WeaponCategories {
    Arcane = 'arcane',
    Bow = 'bow',
    Flail = 'flail',
    Firearm = 'firearm',
    Spear = 'spear',
    Thrown = 'thrown',
    Heavy = 'heavy',
    Dagger = 'dagger',
    Brawling = 'brawling',
    Sword = 'sword',
}

export interface Weapon {
    cost: number,
    category: WeaponCategories,
    prec: number,
    att1: Attributes,
    att2: Attributes,
    name: string,
    range: string,
    hands: number,
    damage: number,
    type: Elements,
}

export interface RareWeapon {
    base: Weapon
    att1: Attributes,
    att2: Attributes,
    damageBonus: number,
    precBonus: number,
    type: Elements,
    qualityCost: number,
}
