const score = document.getElementById('score');

const increaseScore = () => {
	score.innerHTML = Number(score.innerHTML)+1;
};

export default increaseScore;
