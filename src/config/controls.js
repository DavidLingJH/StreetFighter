import { GamepadThumbstick, Control } from "../constants/control.js";

export const controls = [
    {
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE]: 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
            [GamepadThumbstick.VERTICAL_AXE_ID]: 1,

            [Control.LEFT]: 14,
            [Control.RIGHT]: 15,
            [Control.UP]: 12,
            [Control.DOWN]: 13,
            [Control.LIGHT_PUNCH]: 0,
            [Control.MEDIUM_PUNCH]: 2,
            [Control.HEAVY_PUNCH]: 5,
            [Control.LIGHT_KICK]: 1,
            [Control.MEDIUM_KICK]: 3,
            [Control.HEAVY_KICK]: 4,
            [Control.SPECIAL]: 7,
        },
        keyboard: {
            [Control.LEFT]: 'KeyA',
            [Control.RIGHT]: 'KeyD',
            [Control.UP]: 'KeyW',
            [Control.DOWN]: 'KeyS',
            [Control.LIGHT_PUNCH]: 'KeyG',
            [Control.MEDIUM_PUNCH]: 'KeyH',
            [Control.HEAVY_PUNCH]: 'KeyJ',
            [Control.LIGHT_KICK]: 'KeyT',
            [Control.MEDIUM_KICK]: 'KeyY',
            [Control.HEAVY_KICK]: 'KeyU',
            [Control.SPECIAL]: 'Space',
        },
    },
    {
        gamePad: {
            [GamepadThumbstick.DEAD_ZONE]: 0.5,
            [GamepadThumbstick.HORIZONTAL_AXE_ID]: 0,
            [GamepadThumbstick.VERTICAL_AXE_ID]: 1,
            
            [Control.LEFT]: 14,
            [Control.RIGHT]: 15,
            [Control.UP]: 12,
            [Control.DOWN]: 13,
            [Control.LIGHT_PUNCH]: 0,
            [Control.MEDIUM_PUNCH]: 2,
            [Control.HEAVY_PUNCH]: 5,
            [Control.LIGHT_KICK]: 1,
            [Control.MEDIUM_KICK]: 3,
            [Control.HEAVY_KICK]: 4,
            [Control.SPECIAL]: 7,
        },
        keyboard: {
            [Control.LEFT]: 'ArrowLeft',
            [Control.RIGHT]: 'ArrowRight',
            [Control.UP]: 'ArrowUp',
            [Control.DOWN]: 'ArrowDown',
            [Control.LIGHT_PUNCH]: 'Numpad1',
            [Control.MEDIUM_PUNCH]: 'Numpad2',
            [Control.HEAVY_PUNCH]: 'Numpad3',
            [Control.LIGHT_KICK]: 'Numpad4',
            [Control.MEDIUM_KICK]: 'Numpad5',
            [Control.HEAVY_KICK]: 'Numpad6',
            [Control.SPECIAL]: 'Numpad7',
        },
    }
];