# 🥊 Street Fighter JS: Local Multiplayer Game

<img src="images/Demo.png" alt="Game Screenshot" width="600">

## 🛠️ Technical Highlights

- <b>Engine & Rendering:</b> Programmed in vanilla Javascript using HTML Canvas. The core engine utilises a custom game loop to synchronize sprite animations with a Finite State Machine (FSM) for seamless character state transitions
- <b>Hardware Integration:</b> Integrated PS4 controller support, mapped alongside traditional keyboard inputs
- <b>Collision System:</b> Implemented AABB (Axis-Aligned Bounding Box) collision detection to manage hitboxes and hurtboxes, ensuring combat interactions and health bar updates are calculated on each frame.

## 🎮 Controls & Mechanics

Note: To begin, click or press any key on the black screen at the start of the game to initialize the audio and input context.

<b>P1</b><br>
Movement: WASD <br>
Light/Medium/Heavy Punch: G, H, J <br>
Light/Medium/Heavy Kick: T, Y, U <br>
Hadouken (Special Move): Spacebar <br>

<b>P2</b><br>
Movement: Arrow keys<br>
Light/Medium/Heavy Punch: Numkey 1, 2, 3<br>
Light/Medium/Heavy Kick: Numkey 4, 5, 6<br>
Hadouken (Special Move): Numkey 7<br>

<img src="images/controllerLayout.jpg" alt="Game Screenshot" width="600">
