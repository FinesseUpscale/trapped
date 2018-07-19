var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c stands for context, it's just shorthand
var c = canvas.getContext('2d');

// // Rectangle
// // coordinates are relative to the top left of the screen
// c.fillStyle = "rgba(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(500, 100, 100, 100);
// c.fillStyle = "#deaded"
// c.fillRect(150, 400, 400, 100);

// console.log(canvas);

// // Line
// c.beginPath();
// // moveTo takes an x and y coordinate for its arguments
// c.moveTo(50, 300);
// c.lineTo(150, 400);
// c.lineTo(300, 50);
// c.strokeStyle = "blue";
// c.stroke();

// Arc / Circle
// If we don't precede with beginpath
// don't know the other path ended

// for(i = 0; i < 200; i++) {

// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;

// 	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI * 2, false);
// 	c.strokeStyle = randomColor;
// 	c.stroke();




function randomNum() {
	return Math.round(Math.random()) * 2 - 1;
} 

function randomize_coordinate(coord, strength) {
	coord = coord + randomNum()*strength;
	return coord
}

var r = 2.5;

var strength = 4;

var try_x = 0;
var try_y = 0;
var coords = [window.innerWidth/2,window.innerHeight/2];
var prev_coords = new Set();

function animate() {

	try_x = randomize_coordinate(coords[0], strength);
	try_y = randomize_coordinate(coords[1], strength);

	coords[0] = try_x%window.innerWidth;
	coords[1] = try_y%window.innerHeight;
	
	while (prev_coords.has("("+coords[0]+","+coords[1]+")")) {
		try_x = randomize_coordinate(coords[0], strength);
		try_y = randomize_coordinate(coords[1], strength);

		coords[0] = try_x;
		coords[1] = try_y;
	}

	prev_coords.add("("+coords[0]+","+coords[1]+")");

	requestAnimationFrame(animate);
	c.beginPath();
	c.arc(coords[0], coords[1], r, 0, Math.PI * 2, false);
	c.strokeStyle = "rgba(255, 0, 0, 0.5)";
	c.stroke();
	
}

animate();