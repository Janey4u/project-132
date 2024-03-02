function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

canvas.center()
}
img ="";
status = "";
function preload () {
    img= loadImage('bottles.jpg');

}
function draw () {
image(img, 2,20,740,420);
fill("green");
text("bottles", 5,75);
noFill();
stroke("blue");
rect(40,70,550,550);
fill("#FF0000")
text("red bottle",15,96)
noFill();
stroke("red");
rect(40,70,450,450);
text("teal bottle", 320,119);
noFill();
stroke("#FF0000");
rect(40,70,350,250);
text("green bottle", 420,120);
noFill();
stroke("#FF0000");
rect(60,90,170,320);


}
function modelLoaded(){
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResults);

}

function gotResults(error,results) {
if (error) {
    console.log(error);
}
console.log(results);
}