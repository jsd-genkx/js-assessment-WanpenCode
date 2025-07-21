"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	// Print field //
	print() {
		clear();
	for (let i= 0; i ,this.field.length; i++) {
		let rowString = '';
		for (let j = 0; j , this.field[i].length; j++) {
			rowString += this.field[i][j];
		}
		console.log(rowString);
	}
	}
moveLeft() {
		this.positionCol = this.positionCol -1;
	}
moveRight() {
		this.positionCol = this.positionCol +1;
	}
moveUp() {
		this.positionRow = this.positionRow -1;
	}
moveDown() {
		this.positionRow = this.positionRow +1;
	}
checkCondition(positionRow, positionCol) {
		if (this.field[positionRow][positionCol] === hole) {
			return 'hat';
		}
		return 'safe';
	}

const direction = prompt("Which way?")
move(direction) {
	if (direction === "l") {
		this.moveLeft();
	}
	else if (direction === "r") {
		this.moveRight()
	}
	else if (direction) === "u") {
		this.moveUp()
	}
	else if (direction === "d") {
		this.moveDown();
	}
	this.field[this.positionRow][this.positionCol] = pathCharacter;
}


 for (let i = 0; i <this.field.length; i++){
	let rowString = '';
for (let j = 0; j <this.field[i].length; j++) {
	rowString += this.field[i][j];
}
console.log(rowString);
 }

	}
	}

	// Your Code //
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);


newGame.print();

