// const snakeBite = new Audio('../../snake-bite.mp3');

const snakeBite = document.createElement("audio");
snakeBite.src = '../../snake-bite.mp3';
snakeBite.setAttribute("preload", "auto");
snakeBite.setAttribute("controls", "none");
snakeBite.style.display = "none";
document.body.appendChild(snakeBite);

const snakeBiteSound = () => {
	snakeBite.play();
}

export default snakeBiteSound;
