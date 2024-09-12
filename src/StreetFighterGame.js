import { pollGamepads, registerGamepadEvents, registerKeyboardEvents } from "./engine/InputHandler.js";
import { getContext } from "./utils/context.js";
import { BattleScene } from "./scenes/BattleScene.js";
import { StatusBar } from "./entities/overlays/StatusBar.js";
import { gameState } from "./state/gameState.js";

export class StreetFighterGame {
  context = getContext();
  paused = false;

  frameTime = {
    previous: 0,
    secondsPassed: 0,
  };

  constructor() {
    this.scene = new BattleScene();
    this.statusBar = new StatusBar();
    this.restartButton = this.createRestartButton();
  }

  createRestartButton() {
    const button = document.createElement('button');
    button.textContent = 'Restart';
    button.style.display = 'none'; 
    button.style.position = 'fixed'; 
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, 30%)';
    button.style.padding = '15px 30px';
    button.style.fontSize = '30px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
    button.addEventListener('click', this.restart.bind(this), { once: true });
    document.body.appendChild(button);
    return button;
}

  showRestartButton() {
    this.paused = true;
    this.restartButton.style.display = 'block';
    this.restartButton.addEventListener('click', this.restart.bind(this), { once: true });
  }

  hideRestartButton() {
    this.restartButton.style.display = 'none';
    this.paused = false;
  }

  restart() {
    this.hideRestartButton();
    this.removeEventListeners(); 
    gameState.reset();
    this.scene = new BattleScene(); 
    this.statusBar = new StatusBar();
    window.requestAnimationFrame(this.frame.bind(this));
  }


removeEventListeners() {
  this.restartButton.removeEventListener('click', this.restart.bind(this));
}

frame(time) {
  const now = time;
  const delta = now - this.frameTime.previous;

  if (this.paused) {
    return;
  }

  if (delta > 1000 / 60) {
      this.frameTime = {
          secondsPassed: delta / 1000,
          previous: now,
      };

      pollGamepads();
      this.statusBar.update(this.frameTime); 
      this.scene.update(this.frameTime, this.context);
      this.scene.draw(this.context);

      if (this.statusBar.winner || this.statusBar.time < 1) {
          if (this.restartButton.style.display === 'none') {
              this.showRestartButton();
              this.statusBar.winner = null;
          }
      } else {
          this.hideRestartButton();
      }
  }

  window.requestAnimationFrame(this.frame.bind(this));
}
  start() {
    registerKeyboardEvents();
    registerGamepadEvents();

    window.requestAnimationFrame(this.frame.bind(this));
  }
}

