nosex = 0;
nosey = 0;
function preload(){
    clown_nose = loadImage('https://impou.com/cdn/shop/files/pou_870e1840-a5cd-4b11-bc9a-f81bd615500d.png?v=1703339467')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet esta inicializado");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x-50;
        nosey = results[0].pose.nose.y-90;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,120,150);
}

