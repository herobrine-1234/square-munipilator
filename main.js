noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;
function setup()
{video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(550,550);
canvas.position(700,100);
video.position(100,100);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw()
{background('#969A97');
stroke('#FF0000');
fill('#FF0000');
square(noseX,noseY,difference);
document.getElementById("size").innerHTML="square size is "+difference+"px";
}
function modelLoaded()
{
console.log("model has loaded!");
}
function gotPoses(results)
{
if(results.length>0);
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("noseX= "+noseX+"noseY= "+noseY);
console.log("leftWristX= "+leftWristX+"rightWristX= "+rightWristX+"difference= "+difference);
}
}




