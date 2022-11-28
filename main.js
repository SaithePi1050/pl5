function setup() 
{
canvas = createCanvas(600,500);
canvas.position(110,270);
video = createCapture(VIDEO);
video.hide();
tint_color = "";
}

function draw() 
{
image(video,0,0,600,500);
fill("red");
stroke("black");
circle(20,20,50);

fill("red");
stroke("black");
circle(580,20,50);

fill("red");
stroke("black");
circle(20,480,50);

fill("red");
stroke("black");
circle(580,480,50);
tint(tint_color);

fill("green");
stroke("black");
rect(45, 15, 510, 10);

fill("green");
stroke("black");
rect(45, 475, 510, 10);

fill("green");
stroke("black");
rect(15, 45, 10, 410);

fill("green");
stroke("black");
rect(575, 45, 10, 410);
}

function take_snapshot() 
{
    save('img.png');
}

function fliter_tint() 
{
    tint_color = document.getElementById("color_name").value;
}