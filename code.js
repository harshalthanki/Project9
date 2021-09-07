var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e33a23a7-0e04-4efc-9995-c745d2bb4152","c0c95724-f41c-494d-af94-4d0377701b42","d915e5a5-e9d5-41ac-b33c-b134c8e8d209","a5d41714-fbe2-4f83-bef0-283d765fc617","b2451c89-1e15-4827-9f47-6b0cf750b18c","e5fcdfd4-38bf-43d2-b2c9-c7ecfeda93fb","c31f154c-2add-4591-842a-011134af0fc3","85b744ce-8649-4ee3-b244-d8f7a9c96fd9","4072127c-2782-4947-bbb2-a0dc8304ca9e","e737bc51-89ed-49b2-8131-4bcaddf58f50"],"propsByKey":{"e33a23a7-0e04-4efc-9995-c745d2bb4152":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"c0c95724-f41c-494d-af94-4d0377701b42":{"name":"playership","sourceUrl":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/o6MhvPFlxWIVVxxNBdRQQ9Cjv4HeJmYW/category_vehicles/playerShip2_blue.png"},"d915e5a5-e9d5-41ac-b33c-b134c8e8d209":{"name":"laser","sourceUrl":"assets/v3/animations/nnFmw4QkUjxJolHmGfkuoKQrmwC6TzJhUprSrc_5B2w/d915e5a5-e9d5-41ac-b33c-b134c8e8d209.png","frameSize":{"x":351,"y":1481},"frameCount":1,"looping":true,"frameDelay":4,"version":"IykaGYe44c1Khb5hV0IclKRu0j5soxw_","loadedFromSource":true,"saved":true,"sourceSize":{"x":351,"y":1481},"rootRelativePath":"assets/v3/animations/nnFmw4QkUjxJolHmGfkuoKQrmwC6TzJhUprSrc_5B2w/d915e5a5-e9d5-41ac-b33c-b134c8e8d209.png"},"a5d41714-fbe2-4f83-bef0-283d765fc617":{"name":"1","sourceUrl":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":4,"version":"8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png"},"b2451c89-1e15-4827-9f47-6b0cf750b18c":{"name":"2","sourceUrl":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png","frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":5,"version":"CVtigtRo1bAJVBogp8xBgu85MC15nutH","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png"},"e5fcdfd4-38bf-43d2-b2c9-c7ecfeda93fb":{"name":"3","sourceUrl":"assets/api/v1/animation-library/gamelab/MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_/category_fantasy/alienBeige_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":5,"version":"MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_/category_fantasy/alienBeige_walk.png"},"c31f154c-2add-4591-842a-011134af0fc3":{"name":"4","sourceUrl":"assets/api/v1/animation-library/gamelab/e7lnGKmq4Fd2rjttkokBiDZ9UxoZ4pvN/category_faces/asterisk_explode.png","frameSize":{"x":171,"y":158},"frameCount":11,"looping":true,"frameDelay":3,"version":"e7lnGKmq4Fd2rjttkokBiDZ9UxoZ4pvN","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":684,"y":474},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e7lnGKmq4Fd2rjttkokBiDZ9UxoZ4pvN/category_faces/asterisk_explode.png"},"85b744ce-8649-4ee3-b244-d8f7a9c96fd9":{"name":"5","sourceUrl":null,"frameSize":{"x":72,"y":158},"frameCount":7,"looping":true,"frameDelay":1,"version":"g3iQ7AhgL8judY6bHh6u707waseyi8wG","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":316},"rootRelativePath":"assets/85b744ce-8649-4ee3-b244-d8f7a9c96fd9.png"},"4072127c-2782-4947-bbb2-a0dc8304ca9e":{"name":"x","sourceUrl":"assets/api/v1/animation-library/gamelab/zDHZm0HfILhTVOXJ9qjuSqFaMPmK0gbY/category_video_games/water.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"zDHZm0HfILhTVOXJ9qjuSqFaMPmK0gbY","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zDHZm0HfILhTVOXJ9qjuSqFaMPmK0gbY/category_video_games/water.png"},"e737bc51-89ed-49b2-8131-4bcaddf58f50":{"name":"blast","sourceUrl":"assets/api/v1/animation-library/gamelab/NoHMXwdmldY9LZVfh3RpxscchdU5henz/category_video_games/burst06.png","frameSize":{"x":396,"y":354},"frameCount":1,"looping":true,"frameDelay":2,"version":"NoHMXwdmldY9LZVfh3RpxscchdU5henz","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":354},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NoHMXwdmldY9LZVfh3RpxscchdU5henz/category_video_games/burst06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating background and declaring vars
var bg = createSprite(200,200);
bg.setAnimation("bg");

var laser;

var score = 0;

var ammo = 20;

var blast;

var playership = createSprite(200,370);
    playership.setAnimation("playership");
    playership.scale = 0.7;
    
var abcd = createSprite(200,300,400,10);
abcd.shapeColor = "red";

var a = createSprite(30,30);
a.setAnimation("1");
a.scale = 0.3;

var a1 = createSprite(300,20);
a1.setAnimation("1");
a1.scale = 0.3;

var b = createSprite(110,65);
b.setAnimation("2");
b.scale = 0.3;

var b1 = createSprite(25,95);
b1.setAnimation("2");
b1.scale = 0.3;

var c = createSprite(190,90);
c.setAnimation("3");
c.scale = 0.3;

var c1 = createSprite(215,25);
c1.setAnimation("3");
c1.scale = 0.3;

var d = createSprite(265,75);
d.setAnimation("4");
d.scale = 0.3;

var d1 = createSprite(355,100);
d1.setAnimation("4");
d1.scale = 0.3;

var e = createSprite(370,50);
e.setAnimation("5");
e.scale = 0.3;

var e1 = createSprite(160,25);
e1.setAnimation("5");
e1.scale = 0.3;

var gameState = "start";

function draw() 
{
 //to draw sprites
 drawSprites();
 
 //to create edge sprites
 createEdgeSprites();
 
 //to make monsters bounceOff the edges
 a.bounceOff(edges);
 a1.bounceOff(edges);
 
 
 b.bounceOff(edges);
 b1.bounceOff(edges);
 
 
 c.bounceOff(edges);
 c1.bounceOff(edges);
 
 
 d.bounceOff(edges);
 d1.bounceOff(edges);
 
 
 e.bounceOff(edges);
 e1.bounceOff(edges);
 
 //implementing what happens if gameState is start
  if (gameState == "start")
 {
   playership.x=World.mouseX;
   textSize(25);
   fill("pink");
   stroke("black");
   strokeWeight(5);
   text("Press Space to Start",100,245);
   text("and Shoot",160,275);
   text("Don't let these monsters touch",10,135);
   text("the barrier or your ammo run out",10,165);
 }
 
 //implementing what happens if SPACE key is pressed
 if (keyWentDown("space") && gameState != "gameover" && gameState != "end")
   {
     gameState = "play";
     laser = createSprite(200,370);
     laser.setAnimation("laser");
     laser.scale = 0.03;
     laser.velocityY = -25;
     laser.x=World.mouseX;
     ammo = ammo - 1;
     playSound("assets/category_digital/laser_fade_3.mp3", false);
   }
 
 if (ammo == -1 || 
          a.y >= 300 || 
          a1.y >= 300 || 
          b.y >= 300 || 
          b1.y >= 300 || 
          c.y >= 300 || 
          c1.y >= 300 || 
          d.y >= 300 || 
          d1.y >= 300 || 
          e.y >= 300 || 
          e1.y >= 300 )
   {
     gameState = "gameover";
   }
 
 //implementing what happens if gameState is play
 if (gameState == "play")
 {
   playership.x=World.mouseX;
   textSize(20);
   fill("orange");
   stroke("black");
   strokeWeight(5);
   text("Score: " + score, 150, 315);
   
   textSize(20);
   fill("red");
   stroke("black");
   strokeWeight(5);
   text("Ammo: " + ammo, 300, 335);
   
   a.velocityX = 4;
   a.velocityY = 0.5;
   a1.velocityX = -1;
   a1.velocityY = 2;
   
   b.velocityX = 0.6;
   b.velocityY = 0.7;
   b1.velocityX = 2;
   b1.velocityY = 1;
   
   c.velocityX = 0.4;
   c.velocityY = 0.8;
   c1.velocityX = 0.9;
   c1.velocityY = 0.5;
   
   d.velocityX = -4;
   d.velocityY = 2;
   d1.velocityX = 0.3;
   d1.velocityY = 0.7;
   
   e.velocityX = -3;
   e.velocityY = 0.7;
   e1.velocityX = 0.7;
   e1.velocityY = 0.7;

 if (laser.isTouching(a))
 {
   a.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 if (laser.isTouching(a1))
 {
   a1.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 
 if (laser.isTouching(b))
 {
   b.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 if (laser.isTouching(b1))
 {
   b1.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 
 if (laser.isTouching(c))
 {
   c.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 if (laser.isTouching(c1))
 {
   c1.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 
 if (laser.isTouching(d))
 {
   d.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 if (laser.isTouching(d1))
 {
   d1.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 
 if (laser.isTouching(e))
 {
   e.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 if (laser.isTouching(e1))
 {
   e1.destroy();
   laser.destroy();
   score = score + 1;
   playSound("assets/category_app/perfect_app_button_2.mp3", false);
 }
 }
 
 
   
   //victory
   if(score == 10)
   {
     gameState = "end";
   }
 
   if(gameState == "end")
   {
   textSize(30);
   fill("lightgreen");
   stroke("black");
   strokeWeight(1);
   text("Yay! You saved", 115, 200);
   text("the World", 115, 230);
   abcd.destroy();
   playership.velocityY = -30;
   }
   
   //if the world is destroyed
   if(gameState == "gameover")
  {
      textSize(30);
      fill("lightgreen");
      stroke("black");
      strokeWeight(1);
      text("Uh Oh! The World", 115, 200);
      text("is destroyed", 115, 230);
      blast = createSprite();
      blast.setAnimation("blast");
      blast.scale = 0.5;
      blast.x = playership.x;
      blast.y = playership.y;
      playership.destroy();
      
      
  }
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
