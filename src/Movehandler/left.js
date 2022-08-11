import generateFruit from "../fruit/generateFruit.js";
import snakeBiteSound from "../util/biteSound.js";
import gameOverSound from "../util/gameOver.js";
import increaseScore from '../util/increaseScore.js';

const left_handler = () => {
	let arr = window.arr;
	let snakeQueue = window.snakeQueue;

	let frontX = snakeQueue[0][0];
	let frontY = snakeQueue[0][1];
	let backX = snakeQueue[snakeQueue.length-1][0];
	let backY = snakeQueue[snakeQueue.length-1][1];

	// when snake hits the wall and should come out of opposite wall and finds the fruit
	// then it should not remove its tell
	if (frontX-1 < 0 && arr[arr[0].length-1][frontY] == 3) {
		arr[frontX][frontY] = 1;
		frontX = arr[0].length - 1;
		arr[frontX][frontY] = 2;
		snakeQueue.unshift([frontX, frontY]);
		generateFruit();
		snakeBiteSound();
		increaseScore();

	}
	// when snake hits the wall and comes to other side of wall and hits itself
	else if (frontX-1 < 0 && arr[arr[0].length-1][frontY] == 1) {
		clearInterval(window.intervalId);
		gameOverSound();

	}
	// when snake just hits the wall and comes out of other wall
	else if (frontX-1 < 0){
		arr[frontX][frontY] = 1;
		arr[arr[0].length-1][frontY] = 2;
		snakeQueue.unshift([arr[0].length-1, frontY]);
		// removes its tell to move forward
		arr[backX][backY] = 0;
		snakeQueue.pop();
		arr[frontX][frontY] = 1;
	}
	// when the next cell has fruit
	else if (arr[frontX-1][frontY] == 3) {
		arr[frontX][frontY] = 1;
		frontX -= 1;
		arr[frontX][frontY] = 2;
		snakeQueue.unshift([frontX, frontY]);
		generateFruit();
		snakeBiteSound();
		increaseScore();
	}
	// when next cell is body of snake itself
	else if (arr[frontX-1][frontY] == 1) {
		clearInterval(window.intervalId);
		gameOverSound();

	}
	// when it does not have any food and moving forward;
	else {
		arr[frontX][frontY] = 1;
		arr[frontX-1][frontY] = 2;
		snakeQueue.unshift([frontX-1, frontY]);
		// removing tail
		arr[backX][backY] = 0;
		snakeQueue.pop();
	}
	
	// console.log(frontX+" "+frontY+"   "+backX+" "+backY);

}


export default left_handler;
