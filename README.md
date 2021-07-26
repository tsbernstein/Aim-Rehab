# Aim-Rehab

## Background

Aim-Rehab is a point and click style game in which the user must use their mouse to either click on or follow objects on their screen. Their score will be calculated based on the number of either targets clicks or percentage of time they are able to keep their mouse over the target. Each round will last 60 seconds and the user will be able to choose from different difficulties to challenge themselves appropriately. 

The idea behind the rehab in the name is that it is also intended to help patients in hand therapy with their skills in fine motor control and hand eye coordiantion. The 60 second rounds are an appropriate duration per exercise set, and keeping score will allow them to quantitatively track their progress. It will provide a fun and interactive way to approach therapy to keep patients engaged and seeking personal improvement.

## Functionalities and MVPs

### In Aim-Rehab, users will be able to:
* Interact with objects (targets) on their screen by clicking on them.
* Choose a difficulty to match their current level of proficiency.
* Score will be shown at the end of each round so that users can try to improve.
* User will be able to choose from different types of games to practice different skills.

In addition, this project will include:
* instructions on how to play the game.
* A README to highlight key features of the game with code snippets and pictures.

## Technologies
* This project uses canvas to render the game screen.
* Webpack and Babel to bundle and transpile the source JavaScript code.
* npm to manage project dependencies.

## Wireframes
![Aim-Rehab](https://user-images.githubusercontent.com/79271412/127004849-301e6299-cb3d-4c82-b5bd-0ccec8cb6a17.png)

## Implementation Timeline
* Monday: Implement canvas game board and underlying game logic to make clickable targets.
* Tuesday: Render cells in canvas for different areas targets could pop up.
* Wednesday: If not done already, make multiple targets pop up randomly around the board.
* Thursday: Implement scoring for each round. Scores will not persist in a database.
* Friday: Deploy to github pages.
