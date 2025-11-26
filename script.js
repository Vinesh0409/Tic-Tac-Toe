var play = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

async function delay(time) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

async function clickwait(e) {
	return new Promise((resolve, reject) => {
		e.addEventListener("click", () => {
			resolve();
		});
	});
}
function check() {
	for (let i = 0; i < play.length; i++) {
		const element = play[i];
		if (
			element[0] === element[1] &&
			element[1] === element[2] &&
			element[0] !== ""
		) {
			result = element[0] + " won";
			return result;
		}
	}

	for (let i = 0; i < 3; i++) {
		if (
			play[0][i] === play[1][i] &&
			play[1][i] == play[2][i] &&
			play[0][i] !== ""
		) {
			result = play[0][i] + " won";
			return result;
		}
	}

	if (
		play[0][0] === play[1][1] &&
		play[1][1] === play[2][2] &&
		play[0][0] !== ""
	) {
		result = play[0][0] + " won";
		return result;
	}
	if (
		play[0][2] === play[1][1] &&
		play[1][1] === play[2][0] &&
		play[0][2] !== ""
	) {
		result = play[0][2] + " won";
		return result;
	}
}
const value = document.querySelector(".check").dataset.value;
set = Array.from(value);
console.log(typeof set);

setInterval(() => {
	document
		.querySelector(".info-bar")
		.querySelector("span")
		.classList.toggle("opaque");
}, 1050);
// setInterval(() => {
//         document
//             .querySelector(".info-bar")
//             .querySelector("span")
//             .classList.remove("opaque");
//     }, 600);

async function main() {
	var n = 0;
	document.querySelector(".replay").addEventListener("click", () => {
		document.querySelector(".result").classList.remove("show");
		 n=0
		 play = [
			["", "", ""],
			["", "", ""],
			["", "", ""],
		];
		document.querySelector(".info-bar").querySelector("span").innerHTML = "X";
		document.querySelectorAll('.check').forEach((e)=>{
			e.innerHTML=""
		})
	});

	document.querySelectorAll(".check").forEach((e) => {
		e.addEventListener("click", async () => {
			if (e.innerHTML !== "") {
				return;
			}
			if (n % 2 == 0) {
				e.innerHTML = "X";
				document.querySelector(".info-bar").querySelector("span").innerHTML =
					"O";
				let coordinate = Array.from(e.dataset.value);
				// console.log(coordinate);
				play[coordinate[1]][coordinate[3]] = "X";
				const winner = check();
				if (winner) {
					console.log("true");
					document.querySelector(".text").innerHTML = "Player with " + winner;
					document.querySelector(".result").classList.add("show");
				}
				n++;
			} else {
				e.innerHTML = "O";
				document.querySelector(".info-bar").querySelector("span").innerHTML =
					"X";
				let coordinate = Array.from(e.dataset.value);
				// console.log(coordinate);
				play[coordinate[1]][coordinate[3]] = "O";
				// console.log(play);
				const winner = check();
				if (winner) {
					console.log("true");
					document.querySelector(".text").innerHTML = "Player with " + winner;
					document.querySelector(".result").classList.add("show");
				}
				n++;
			}

			if (n == 9) {
				console.log("work");

				document.querySelector(".text").innerHTML = "This Game is a Tie ";
				document.querySelector(".result").classList.add("show");
			}
		});
	});

	
	// const winner = check()
}
main();
