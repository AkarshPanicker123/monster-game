var gameState="serve"
var monster , fireball , hero , bg;
var monsterIMG , fireballIMG , heroIMG , bgIMG
var monsterscore=0;
var fireballGroup;
function preload() {
  monsterIMG = loadImage("sprites/monster.jpg");
  fireballIMG = loadImage("sprites/fireball.webp");
  heroIMG = loadImage("sprites/hero.png");
  bgIMG = loadImage("sprites/bg.jpg");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
  

  monster = createSprite(windowWidth-600,90);
  monster.addImage(monsterIMG);
  monster.velocityX = Math.round(random(-6,6));
  monster.scale = 0.4;
  hero = createSprite(windowWidth/2,windowHeight-100);
  hero.scale = 0.4
  hero.addImage(heroIMG);
  console.log(hero.height)
  fireballGroup = createGroup();
  hero.setCollider("rectangle",0,100,300,800);
  hero.debug=true;
}

function draw(){
    background(bgIMG);
    fill("red");
    text("MONSTER SCORE: "+monsterscore,windowWidth-300,70);
    if(gameState === "serve"){
      spawnFireballs();
    // monster.x=windowHeight-600;
    // hero.x=windowWidth/2;
    
   edges=createEdgeSprites();
   monster.bounceOff(edges);
   if(keyDown("left")){
     hero.x=hero.x-1
   }
   if(keyDown("right")){
    hero.x=hero.x+1
  }
  if(hero.isTouching(fireballGroup)){
    fireballGroup.setVelocityYEach(0);
    hero.velocityX=0;
     monsterscore=monsterscore+1;}
    //  fireballGroup.setlifeTimeEach(-1);
  }
// if(monsterscore<5){
//   gameState="serve";
// }
// else{gameState==="end"}
 drawSprites();
// }
function spawnFireballs() {
  //write code here to spawn the clouds
  if (frameCount % 125 === 0) {
    fireball = createSprite(monster.x-10,130);
    fireball.velocityY= 3 ;
    fireball.x=monster.x;
    fireball.addImage(fireballIMG);
    fireball.scale = 0.1;
    
     //assign lifetime to the variable
    fireball.lifetime = 134;
    
   fireballGroup.add(fireball);
    
    //adding cloud to the group
 
  }}}