import { FighterId } from "../constants/fighter.js";
import { createDefaultFighterState } from "./fighterState.js";

export const gameState = {
    fighters: [
        createDefaultFighterState(FighterId.RYU),
        createDefaultFighterState(FighterId.KEN),
    ],

    reset() {
        this.fighters = [
            createDefaultFighterState(FighterId.RYU),
            createDefaultFighterState(FighterId.KEN),
        ];
    }
};