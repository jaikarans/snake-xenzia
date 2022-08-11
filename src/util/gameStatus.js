const gameNotPaused = () => {
	if (
		window.arrowUpPressedAlready == false &&
		window.arrowDownPressedAlready == false &&
		window.arrowLeftPressedAlready == false &&
		window.arrowRightPressedAlready == false 
	) {
		return false;
	}
	return true;
}

export default gameNotPaused;
