let image = document.getElementById("img");

		let x = 0;
		let y = 0;
		image.style.left = x + "px";
		image.style.top = y + "px";

		document.addEventListener("keydown", function(event) {
			let keyCode = event.keyCode;

			switch(keyCode) {
				case 37: // left arrow
					x -= 10;
					break;
				case 38: // up arrow
					y -= 10;
					break;
				case 39: // right arrow
					x += 10;
					break;
				case 40: // down arrow
					y += 10;
					break;
			}

			image.style.left = x + "px";
			image.style.top = y + "px";
		});