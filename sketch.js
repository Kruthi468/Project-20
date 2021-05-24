var bgImg;
var catImg1,catImg2,catImg3,cat;
var mouseImg1,mouseImg2,mouseImg3,mouse;
function preload() {
bgImg=loadImage("garden.png");
catImg1=loadAnimation("cat1.png");
catImg2=loadAnimation("cat3.png","cat2.png");
catImg3=loadAnimation("cat4.png");
mouseImg1=loadAnimation("mouse1.png");
mouseImg2=loadAnimation("mouse2.png","mouse3.png");
mouseImg3=loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
cat=createSprite(800,600,10,10);
cat.addAnimation("cat",catImg1);
cat.addAnimation("cat_walking",catImg2);
cat.addAnimation("cat_happy",catImg3);
cat.scale=0.2;
mouse=createSprite(200,600,10,10);
mouse.addAnimation("mouse",mouseImg1);
mouse.addAnimation("mouse_teasing",mouseImg2);
mouse.addAnimation("mouse_happy",mouseImg3);
mouse.scale=0.2;

}

function draw() {

    background(bgImg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.changeAnimation("mouse_happy");
        cat.changeAnimation("cat_happy");
        cat.x=350;
        cat.velocityX=0;
      }

    drawSprites();
}


function keyPressed(){

 if(keyDown("LEFT_ARROW")){
     mouse.changeAnimation("mouse_teasing");
     mouse.frameDelay=25;
     cat.changeAnimation("cat_walking");
     cat.scale=0.3;
 cat.velocityX=-2;
 
 }


}
