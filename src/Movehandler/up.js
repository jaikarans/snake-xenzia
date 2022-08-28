import generateFruit from "../fruit/generateFruit.js";
import snakeBiteSound from "../util/biteSound.js";
import {gameOver, gameOverSound,updateScore} from "../util/gameOver.js";
import gameNotPaused from "../util/gameStatus.js";
import increaseScore from '../util/increaseScore.js';

const up_handler = () => {
	let arr = window.arr;
	let snakeQueue = window.snakeQueue;

	let frontX = snakeQueue[0][0];
	let frontY = snakeQueue[0][1];
	let backX = snakeQueue[snakeQueue.length-1][0];
	let backY = snakeQueue[snakeQueue.length-1][1];

	// when snake hits the wall and should come out of opposite wall and finds the fruit
	// then it should not remove its tell
	if (frontY-1 < 0 && arr[frontX][arr[0].length-1] == 3) {
		arr[frontX][frontY] = 1;
		frontY = arr[0].length - 1;
		arr[frontX][frontY] = 2;
		snakeQueue.unshift([frontX, frontY]);
		generateFruit();
		snakeBiteSound();
		increaseScore();

	}
	// when snake hits the wall and comes to other side of wall and hits itself
	else if (frontY-1 < 0 && arr[frontX][arr[0].length-1] == 1 && gameNotPaused()) {
		if (window.intervalId != null) {
			(async () => {
				await window.clearIntervalAsync(window.intervalId);
				
			})();
		}
	
		gameOver();

	}
	// when snake just hits the wall and comes out of other wall
	else if (frontY-1 < 0){
		arr[frontX][frontY] = 1;
		arr[frontX][arr[0].length-1] = 2;
		snakeQueue.unshift([frontX, arr[0].length-1]);
		// removes its tell to move forward
		arr[backX][backY] = 0;
		snakeQueue.pop();
		arr[frontX][frontY] = 1;
	}
	// when the next cell has fruit
	else if (arr[frontX][frontY-1] == 3) {
		arr[frontX][frontY] = 1;
		frontY -= 1;
		arr[frontX][frontY] = 2;
		snakeQueue.unshift([frontX, frontY]);
		generateFruit();
		snakeBiteSound();
		increaseScore();

	}
	// when next cell is body of snake itself
	else if (arr[frontX][frontY-1] == 1) {
		if (window.intervalId != null) {
			(async () => {
				await window.clearIntervalAsync(window.intervalId);
				
			})();
		}
	
		gameOver();

	}
	// when it does not have any food and moving forward;
	else {
		arr[frontX][frontY] = 1;
		arr[frontX][frontY-1] = 2;
		snakeQueue.unshift([frontX, frontY-1]);
		// removing tail
		arr[backX][backY] = 0;
		snakeQueue.pop();
	}
	
	// console.log(frontX+" "+frontY+"   "+backX+" "+backY);

}


export default up_handler;
