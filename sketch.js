var START = 1;
var gameState = START;
var RULES = 3;
var LEVELS = 2;
var SETTINGS = 4;
var PLAY1 = 5;
var ALPHABET = 6
var END = 0;


var value = 0;

var playIcon, playImg;
var settingsIcon, settingsImg;
var musicOnIcon, musicOnImg; 
var musicOffIcon, musicOffImg;
var titleIcon, titleImg;
var howToPlayIcon, howToPlayImg;
var closeIcon, closeImg;
var backIcon, backIcon1;

var normal_coverImg, normal_cover;
var alphabet_coverImg, alphabet_cover;
var number_coverImg, number_cover;
var colour_coverImg, colour_cover;

var backIcon, backImg, backImg1, backImg2;
var bgImg, levelsBg;

var clickSound, backgroundSound;

var how_to_play, how_to_playImg;
var settingsPage, settingsPg;

var cloudsGroup, cloudImage, cloudImage1, cloudImage2, cloudImage3;

//balloons
var balloonsGroup, balloonsGroup1, balloonsGroup2, blueImg, cyanImg, dark_blueImg, dark_redImg, greenImg, 
orangeImg, pinkImg, purpleImg, redImg, sky_blueImg, turquoiseImg, violetImg,
yellowImg, heartImg

//alphabet balloons
var alphabetBalloonsGroup, PLAY2BalloonsGroup, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P,
Q, R, S, T, U, V, W, X, Y, Z;


//special balloons
var pointB, sprialB, starB, sunB;


function preload(){
    playImg = loadImage("images/play.png");
    settingsImg = loadImage("images/settings.png");
    musicOnImg = loadImage("images/music_on.png");
    musicOffImg = loadImage("images/music_off.png");
    titleImg = loadImage("images/title.png");
    backImg = loadImage("images/back.png");
    backImg1 = loadImage("images/back.png");
    backImg2 = loadImage("images/back.png");
    howToPlayImg = loadImage("images/how to play.png");
    closeImg = loadImage("images/close.png");

    normal_coverImg = loadImage("balloons/balloons_cover.png");
    alphabet_coverImg = loadImage("alphabet balloons/alphabet_cover.png");
    number_coverImg = loadImage("number balloons/numbers_cover.png");
    colour_coverImg = loadImage("coloured balloons/colours_cover.png");

    bgImg = loadImage("images/background.jpg");
    levelsBg = loadImage("images/levelsBg.jpg");

    clickSound = loadSound("sounds/click.mp3");
    backgroundSound = loadSound("sounds/backgroundMusic.mp3");

    //images for how to play & settings button
    how_to_playImg = loadImage("images/how_to_playImg.png");
    settingsPg = loadImage("images/settingsPage.png");

    //clouds in PLAY1
    cloudImage = loadImage("PLAY1/cloud.png");
    cloudImage1 = loadImage("PLAY1/cloud1.png");
    cloudImage2 = loadImage("PLAY1/cloud2.png");
    cloudImage3 = loadImage("PLAY1/cloud3.png");

    //balloons in PLAY1
    blueImg = loadImage("balloons/blue.png");
    cyanImg = loadImage("balloons/cyan.png");
    dark_blueImg = loadImage("balloons/dark blue.png");
    dark_redImg = loadImage("balloons/dark red.png");
    greenImg = loadImage("balloons/green.png");
    heartImg = loadImage("balloons/heart.png");
    orangeImg = loadImage("balloons/orange.png");
    pinkImg = loadImage("balloons/pink.png");
    purpleImg = loadImage("balloons/purple.png");
    redImg = loadImage("balloons/red.png");
    sky_blueImg = loadImage("balloons/sky blue.png");
    turquoiseImg = loadImage("balloons/turquoise.png");
    violetImg = loadImage("balloons/violet.png");
    yellowImg = loadImage("balloons/yellow.png");

    //alphabet balloons in PLAY2
    A = loadImage("alphabet balloons/A.png");
    B = loadImage("alphabet balloons/B.png");
    C = loadImage("alphabet balloons/C.png");
    D = loadImage("alphabet balloons/D.png");
    E = loadImage("alphabet balloons/E.png");
    F = loadImage("alphabet balloons/F.png");
    G = loadImage("alphabet balloons/G.png");
    H = loadImage("alphabet balloons/H.png");
    I = loadImage("alphabet balloons/I.png");
    J = loadImage("alphabet balloons/J.png");
    K = loadImage("alphabet balloons/K.png");
    L = loadImage("alphabet balloons/L.png");
    M = loadImage("alphabet balloons/M.png");
    N = loadImage("alphabet balloons/N.png");
    O = loadImage("alphabet balloons/O.png");
    P = loadImage("alphabet balloons/P.png");
    Q = loadImage("alphabet balloons/Q.png");
    R = loadImage("alphabet balloons/R.png");
    S = loadImage("alphabet balloons/S.png");
    T = loadImage("alphabet balloons/T.png");
    U = loadImage("alphabet balloons/U.png");
    V = loadImage("alphabet balloons/V.png");
    W = loadImage("alphabet balloons/W.png");
    X = loadImage("alphabet balloons/X.png");
    Y = loadImage("alphabet balloons/Y.png");
    Z = loadImage("alphabet balloons/Z.png");

    //special balloons
    pointB = loadImage("number balloons/point.png");
    spiralB = loadImage("number balloons/spiral.png");
    starB = loadImage("number balloons/star.png");
    sunB = loadImage("number balloons/sun.png");
}


function setup(){
    createCanvas(640, 360);

    //creating play icon
    playIcon = createSprite(320, 280, 30, 5);
    playIcon.addImage(playImg);
    playIcon.scale = 0.6;

    //creating settings icon
    settingsIcon = createSprite(20, 340, 40, 10);
    settingsIcon.addImage(settingsImg);
    settingsIcon.scale = 0.27;

    //creating music off icon
    musicOffIcon = createSprite(70, 330, 40, 10);
    musicOffIcon.addImage(musicOffImg);
    musicOffIcon.scale = 0.40;
    musicOffIcon.visible = false;

    //creating how to play icon
    howToPlayIcon = createSprite(600, 300, 40, 10);
    howToPlayIcon.addImage(howToPlayImg);
    howToPlayIcon.scale = 0.08;

    //creating music off icon
    titleIcon = createSprite(320, 180, 40, 10);
    titleIcon.addImage(titleImg);
    titleIcon.scale = 0.6;
    
    //creating back icon
    backIcon = createSprite(30, 30, 40, 10);
    backIcon.addImage(backImg);
    backIcon.scale = 0.15;
    backIcon.visible = false;

    //creating back icon 1
    backIcon1 = createSprite(10, 10, 40, 10);
    backIcon1.addImage(backImg1);
    backIcon1.scale = 0.08;
    backIcon1.visible = false;

    //creating back icon 2
    backIcon2 = createSprite(10, 10, 40, 10);
    backIcon2.addImage(backImg2);
    backIcon2.scale = 0.08;
    backIcon2.visible = false;

    //creating the normal balloon cover
    balloons_cover = createSprite(90, 130, 40, 10);
    balloons_cover.addImage(normal_coverImg);
    balloons_cover.scale = 0.12;
    balloons_cover.visible = false;
   
    //creating the alphabet balloon cover
    alphabet_cover = createSprite(240, 230, 40, 10);
    alphabet_cover.addImage(alphabet_coverImg);
    alphabet_cover.scale = 0.13;
    alphabet_cover.visible = false;

    //creating the number balloon cover
    number_cover = createSprite(390, 140, 40, 10);
    number_cover.addImage(number_coverImg);
    number_cover.scale = 0.15;
    number_cover.visible = false;

    //creating the colour balloon cover
    colour_cover = createSprite(550, 230, 40, 10);
    colour_cover.addImage(colour_coverImg);
    colour_cover.scale = 0.12;
    colour_cover.visible = false;

    //creating the game rules
    how_to_play = createSprite(315, 185, 40, 10);
    how_to_play.addImage(how_to_playImg);
    how_to_play.scale = 0.16;
    how_to_play.visible = false;

    //creating the settings page
    settingsPage = createSprite(315, 185, 40, 10);
    settingsPage.addImage(settingsPg);
    settingsPage.scale = 0.14;
    settingsPage.visible = false;

    //creating music on icon
    musicOnIcon = createSprite(360, 190, 40, 10);
    musicOnIcon.addImage(musicOnImg);
    musicOnIcon.scale = 0.5;
    musicOnIcon.visible = false;

    //creating close icon
    closeIcon = createSprite(428, 25, 40, 10);
    closeIcon.addImage(closeImg);
    closeIcon.scale = 0.06;
    closeIcon.visible = false;

    //creating close icon 1
    closeIcon1 = createSprite(407, 133, 40, 10);
    closeIcon1.addImage(closeImg);
    closeIcon1.scale = 0.06;
    closeIcon1.visible = false;

    //create Obstacle and Cloud Groups
    cloudsGroup = new Group();
    balloonsGroup = new Group();
    balloonsGroup1 = new Group();
    balloonsGroup2 = new Group();

    alphabetBalloonsGroup = new Group();
}


function draw(){
    
    
   
    //game state is equals to start
    if(gameState === START){
        background(bgImg);
        playIcon.visible = true;
        settingsIcon.visible = true;
        titleIcon.visible = true;
        howToPlayIcon.visible = true;
    }

    //mouse is pressed over play button and screen goes to game options page
    if(gameState === START && mousePressedOver(playIcon)){
        clickSound.play();
        gameState = LEVELS;
        playIcon.visible = false;
        settingsIcon.visible = false;
        titleIcon.visible = false;
        howToPlayIcon.visible = false;
    }

    if(gameState === START && mousePressedOver(settingsIcon)){
        clickSound.play();
        gameState = SETTINGS;
    }

    if(gameState === START && mousePressedOver(howToPlayIcon)){
        gameState = RULES;
        clickSound.play();
    }

    if(gameState === RULES){
        how_to_play.visible = true;
        closeIcon.visible = true;
    }

    if(gameState === SETTINGS){
        settingsPage.visible = true;
        closeIcon1.visible = true;
        musicOnIcon.visible = true;
    }

    if(gameState === SETTINGS && mousePressedOver(closeIcon1)){
        clickSound.play();
        settingsPage.visible = false;
        closeIcon1.visible = false;
        musicOnIcon.visible = false;
        gameState = START;
    }

    if(gameState === RULES && mousePressedOver(closeIcon)){
        clickSound.play();
        how_to_play.visible = false;
        closeIcon.visible = false;
        gameState = START;
    }


    //game state is equals to levels, where all the game options are displayed
    if(gameState === LEVELS){
        background(levelsBg);
        balloons_cover.visible = true;
        alphabet_cover.visible = true;
        number_cover.visible = true;
        colour_cover.visible = true;
        backIcon.visible = true;
    }

    //mouse is over play button
    if (mouseIsOver(playIcon)){
        playIcon.scale = 0.63;
    } else{
        playIcon.scale = 0.6;
    }

    //mouse is over balloons cover
    if (mouseIsOver(balloons_cover)){
        balloons_cover.scale = 0.125;
    } else{
        balloons_cover.scale = 0.12;
    }

    //mouse is over alphabet cover
    if (mouseIsOver(alphabet_cover)){
        alphabet_cover.scale = 0.135;
    } else{
        alphabet_cover.scale = 0.13;
    }

    //mouse is over numbers cover
    if (mouseIsOver(number_cover)){
        number_cover.scale = 0.135;
    } else{
        number_cover.scale = 0.13;
    }

    //mouse is over colour cover
    if (mouseIsOver(colour_cover)){
        colour_cover.scale = 0.125;
    } else{
        colour_cover.scale = 0.12;
    }


    //mouse is over close button
    if (mouseIsOver(closeIcon)){
        closeIcon.scale = 0.068;
    } else{
        closeIcon.scale = 0.06;
    }

    //mouse is over close button 1
    if (mouseIsOver(closeIcon1)){
        closeIcon1.scale = 0.068;
    } else{
        closeIcon1.scale = 0.06;
    }

    //mouse is over settings button
    if (mouseIsOver(settingsIcon)){
        settingsIcon.scale = 0.3;
    } else{
        settingsIcon.scale = 0.27;
    }

    //mouse is over music button
    if (mouseIsOver(musicOnIcon)){
        musicOnIcon.scale = 0.43;
    } else{
        musicOnIcon.scale = 0.4;
    }

    //mouse is over how to play button
    if (mouseIsOver(howToPlayIcon)){
        howToPlayIcon.scale = 0.085;
    } else{
        howToPlayIcon.scale = 0.08;
    }

    //mouse is over back button
    if (mouseIsOver(backIcon)){
        backIcon.scale = 0.18;
    } else{
        backIcon.scale = 0.15;
    }

    //mouse is over back button 1
    if (mouseIsOver(backIcon1)){
        backIcon1.scale = 0.085;
    } else{
        backIcon1.scale = 0.08;
    }

    //mouse is over back button 2
     if (mouseIsOver(backIcon2)){
        backIcon2.scale = 0.085;
    } else{
        backIcon2.scale = 0.08;
    }


    //mouse is pressed on back button and screen goes back to start page
    if(gameState === LEVELS && mousePressedOver(backIcon)){
        clickSound.play();
        gameState = START;
        balloons_cover.visible = false;
        alphabet_cover.visible = false;
        number_cover.visible = false;
        colour_cover.visible = false;
        backIcon.visible = false;
    }
    
    
    if(gameState === LEVELS && mousePressedOver(balloons_cover) && gameState !== START && gameState !== ALPHABET){
        clickSound.play();
        gameState = PLAY1;
        balloons_cover.visible = false;
        alphabet_cover.visible = false;
        number_cover.visible = false;
        colour_cover.visible = false;
        backIcon.visible = false;
    }
    

    if(gameState === PLAY1){
        background(74, 189, 234);
        spawnClouds();
        spawnBalloons();
        spawnBalloons1();
        specialBalloons();
        backIcon1.visible = true;
    }

    var display = touches.length + ' touches';
    text(display, 5, 10);

    drawSprites();
}



function spawnClouds() {
    if (frameCount % 110 === 0) {
        var cloud = createSprite(700,50,40,10);
        cloud.y = Math.round(random(30,180));
        cloud.velocityX = -1;

        var rand = Math.round(random(1,4));
        switch(rand) {
            case 1: cloud.addImage(cloudImage);
                    break;
            case 2: cloud.addImage(cloudImage1);
                    break;
            case 3: cloud.addImage(cloudImage2);
                    break;
            case 4: cloud.addImage(cloudImage3);
                    break;
            default: break;
          }
      
       //assign lifetime to the variable
      cloud.scale = 0.6;
      cloud.lifetime = 760;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
}


function spawnBalloons(){
    if (frameCount % 80 === 0){
      var balloon = createSprite(600,400,10,40);
      balloon.velocityY = Math.round(random(-1, -2));
      balloon.x = Math.round(random(50,610));
      
       //generate random obstacles
       var rand = Math.round(random(1,7));
       switch(rand) {
         case 1: balloon.addImage(blueImg);
                 break;
         case 2: balloon.addImage(cyanImg);
                 break;
         case 3: balloon.addImage(dark_blueImg);
                 break;
         case 4: balloon.addImage(dark_redImg);
                 break;
         case 5: balloon.addImage(greenImg);
                 break;
         case 6: balloon.addImage(orangeImg);
                 break;
         case 7: balloon.addImage(pinkImg);
                 break;
         default: break;
       }

       //assign scale and lifetime to the balloon
       balloon.scale = 0.55;
       balloon.lifetime = 450;
      
      //add each balloon to the group
      balloonsGroup.add(balloon);
    }
   }


   function spawnBalloons1(){
    if (frameCount % Math.round(random(60, 65)) === 0){
      var balloon1 = createSprite(600,450,10,40);
      balloon1.velocityY = Math.round(random(-1, -2));
      balloon1.x = Math.round(random(50,610));
      
       //generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: balloon1.addImage(purpleImg);
                 break;
         case 2: balloon1.addImage(redImg);
                 break;
         case 3: balloon1.addImage(sky_blueImg);
                 break;
         case 4: balloon1.addImage(turquoiseImg);
                 break;
         case 5: balloon1.addImage(violetImg);
                 break;
         case 6: balloon1.addImage(yellowImg);
                 break;
         default: break;
       }

       //assign scale and lifetime to the balloon
       balloon1.scale = 0.55;
       balloon1.lifetime = 450;
      
      //add each balloon to the group
      balloonsGroup1.add(balloon1);
    }
   }



   function specialBalloons(){
    if (frameCount % 130 === 0){
      var specialBalloon = createSprite(600,450,10,40);
      specialBalloon.velocityY = -1.75;
      specialBalloon.x = Math.round(random(50,610));
      
       //generate random obstacles
       var rand = Math.round(random(1,4));
       switch(rand) {
         case 1: specialBalloon.addImage(pointB);
                 break;
         case 2: specialBalloon.addImage(spiralB);
                 break;
         case 3: specialBalloon.addImage(starB);
                 break;
         case 4: specialBalloon.addImage(sunB);
                 break;
         default: break;
       }

       //assign scale and lifetime to the balloon
       specialBalloon.scale = 1.15;
       specialBalloon.lifetime = 450;
      
      //add each balloon to the group
      balloonsGroup2.add(specialBalloon);
    }
   }



   function spawnAlphabetBalloons(){
    if (frameCount % 80 === 0){
        var balloonA = createSprite(600,400,10,40);
        balloonA.velocityY = Math.round(random(-1, -2));
        balloonA.x = Math.round(random(50,610));
        
         //generate random obstacles
         var rand = Math.round(random(1,26));
         switch(rand) {
           case 1: balloonA.addImage(A);
                   break;
           case 2: balloonA.addImage(B);
                   break;
           case 3: balloonA.addImage(C);
                   break;
           case 4: balloonA.addImage(D);
                   break;
           case 5: balloonA.addImage(E);
                   break;
           case 6: balloonA.addImage(F);
                   break;
           case 7: balloonA.addImage(G);
                   break;
           case 8: balloonA.addImage(H);
                   break;
           case 9: balloonA.addImage(I);
                   break;
           case 10: balloonA.addImage(J);
                   break;
           case 11: balloonA.addImage(K);
                   break;
           case 12: balloonA.addImage(L);
                   break;
           case 13: balloonA.addImage(M);
                   break;
           case 14: balloonA.addImage(N);
                   break;
           case 15: balloonA.addImage(O);
                   break;
           case 16: balloonA.addImage(P);
                   break;
           case 17: balloonA.addImage(Q);
                   break;
           case 18: balloonA.addImage(R);
                   break;
           case 19: balloonA.addImage(S);
                   break;
           case 20: balloonA.addImage(T);
                   break;
           case 21: balloonA.addImage(U);
                   break;
           case 22: balloonA.addImage(V);
                   break;
           case 23: balloonA.addImage(W);
                   break;
           case 24: balloonA.addImage(X);
                   break;
           case 25: balloonA.addImage(Y);
                   break;
           case 26: balloonA.addImage(Z);
                   break;
           default: break;
         }
  
         //assign scale and lifetime to the balloon
         balloonA.scale = 0.55;
         balloonA.lifetime = 450;
        
        //add each balloon to the group
        alphabetBalloonsGroup.add(balloonA);
      }
   }