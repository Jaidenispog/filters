mustacheX = 0;
mustacheY = 0;
eyeX=0;
eyeY=0;
leyeX=0;
leyeY=0;
noseX=0;
noseY=0;

function preload() {

small_mustache=loadImage('https://i.postimg.cc/6qXpcCZz/mustache-PNG38.png');
small_eye=loadImage('https://i.postimg.cc/Kc3MG5Qk/eye-PNG35680.png');
clown_nose=loadImage('https://i.postimg.cc/QMsNtDzd/Clown-Nose-PNG-High-Quality-Image.png')
}

function setup() {

    canvas = createCanvas(1000, 700);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600, 400);
    video.hide();


    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 400);
    image(small_mustache, mustacheX, mustacheY, 40, 40);
    image(small_eye, eyeX, eyeY, 15, 15);
    image(small_eye, leyeX, leyeY, 15, 15);
    image(clown_nose, noseX, noseY, 25, 25);
  
    
}


function takeSnapshot() {

    save('MyFilterImg.png');
}

function modelLoaded() {

    console.log("Model Loaded Successfully");
}

function gotPoses(results) {

    if(results.length > 0) {

        console.log(results);
        mustacheX= results[0].pose.nose.x - 15;
        mustacheY= results[0].pose.nose.y +3;
        eyeX= results[0].pose.rightEye.x; 
        eyeY= results[0].pose.rightEye.y;
        leyeX= results[0].pose.leftEye.x; 
        leyeY= results[0].pose.leftEye.y;
        noseX= results[0].pose.nose.x - 10;
        noseY= results[0].pose.nose.y - 15;
        
        

        console.log("mustacheX=" + mustacheX);
        console.log("mustacheY=" + mustacheY);
        
  
    }
}