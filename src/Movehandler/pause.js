const pauseGame = () => {
	clearInterval(window.intervalId);

	window.arrowUpPressedAlready = false;
	window.arrowDownPressedAlready = false;
	window.arrowLeftPressedAlready = false;
	window.arrowRightPressedAlready = false;

}

export default pauseGame;
