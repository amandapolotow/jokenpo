<h1>Jokenpo</h1>
<h2>A Node.js console app for playing Jokenpo<h2/>
<img src="https://meiobit.com/uploads_legacy/jokenpo.gif" alt="Jokenpo" />

<h3>Description</h3>
<p>The goal of this project is to build a simple aplication to solve the problem: 
given two players, create a judge that could decide who won based on their choices among 'rock', 'paper' and 'scissors', considering that:</p>
<ul>
  <li>Rock beats scissors</li>
  <li>Scissors beats paper</li>
  <li>Paper beats rock</li>
  <li>Equal choices are a tie</li>
</ul>
<p>Source: http://dojopuzzles.com/problemas/exibe/jokenpo/ </p>
<p>The problem was solved by dynamically creating an object based on the player's choice and calling a property on this object based on the computers choice. 
Depending on the combination, this would return 'true' or 'false', saying if the player won or lost the match. 
Example: if the player chooses 'rock', it will instatiate an object of the 'Rock' class. This object will have two properties: 'scissors = true' and 'paper=false'.
If the computer chooses 'scissors', it will return 'true', according to the properties of the object, which means the player won.

<h3>Instructions</h3>
<p>To run this game, you'll need to have Node installed on your machine</p>
<ul>
  <li>Download or clone this repository</li>
  <li>Open a command line tool and acess the project's folder (where you can see 'src' folder and 'package.json' file)</li>
  <li>Run 'node src/index.js'</li>
  <li>You can also run using 'npm run start' or 'yarn start' (if you have yarn installed)</li>
  <li>You will see the game start on your command line tool</li>
  <li>Have fun!</li>
</ul>



