var START = 0;
var gameState = START;
var LEVELS = 1;
var RULES = 2;
var BALLOONS = 3;
var ALPHABET = 4;
var NUMBERS = 5;
var COLOURS = 6;
var touch = [];

var playIcon, playImg;
var settingsIcon, settingsImg;
var music, music_on, music_off;
var musicOffIcon, musicOffImg;
var titleIcon, titleImg;
var howToPlayIcon, howToPlayImg;
var closeIcon, closeImg;
var backIcon, backIcon1, backIcon2, backIcon3, backIcon4;

var balloons_coverImg, balloons_cover;
var alphabet_coverImg, alphabet_cover;
var number_coverImg, number_cover;
var colour_coverImg, colour_cover;

var backIcon, backImg, backImg1, backImg2;
var bgImg, levelsBg;

var clickSound, backgroundSound, popSound;

var how_to_play, how_to_playImg;
var settingsPage, settingsPg;

var cloudImage, cloudImage1, cloudImage2, cloudImage3;

//groups
var cloudsGroup, balloonsGroup, balloonsGroup1, sunBalloonGroup, spiralBalloonGroup,
starBalloonGroup, pointBalloonGroup, balloonsAlphabetGroup, balloonsNumberGroup,
balloonsColourGroup;

//balloons
var blueImg, cyanImg, dark_blueImg, dark_redImg, greenImg, 
orangeImg, pinkImg, purpleImg, redImg, sky_blueImg, turquoiseImg, violetImg,
yellowImg, heartImg

//alphabet balloons
var balloonsAlphabetGroup, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P,
Q, R, S, T, U, V, W, X, Y, Z;

//number balloons
var balloonsNumberGroup, balloon1, balloon2, balloon3, balloon4, 
balloon5, balloon6, balloon7, balloon8, balloon9, balloon10;

//colour balloons
var balloonsColourGroup, blue, green, orange, pink, purple, red, yellow;


//special balloons
var pointB, sprialB, starB, sunB;


function preload(){
    playImg = loadImage("images/play.png");
    settingsImg = loadImage("images/settings.png");
    music_on = loadImage("images/music_on.png");
    music_off = loadImage("images/music_off.png");
    titleImg = loadImage("images/title.png");
    backImg = loadImage("images/back.png");
    backImg1 = loadImage("images/back.png");
    backImg2 = loadImage("images/back.png");
    backImg3 = loadImage("images/back.png");
    backImg4 = loadImage("images/back.png");
    howToPlayImg = loadImage("images/how to play.png");
    closeImg = loadImage("images/close.png");

    balloons_coverImg = loadImage("balloons/balloons_cover.png");
    alphabet_coverImg = loadImage("alphabet balloons/alphabet_cover.png");
    number_coverImg = loadImage("number balloons/numbers_cover.png");
    colour_coverImg = loadImage("coloured balloons/colours_cover.png");

    bgImg = loadImage("images/background.jpg");
    levelsBg = loadImage("images/levelsBg.jpg");

    //loading sounds
    clickSound = loadSound("sounds/click.mp3");
    backgroundSound = loadSound("sounds/backgroundMusic.mp3");
    popSound = loadSound("sounds/pop.mp3");
    dingSound = loadSound("sounds/ding.mp3");

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

    //number balloons in PLAY3
    balloon1 = loadImage("number balloons/1.png");
    balloon2 = loadImage("number balloons/2.png");
    balloon3 = loadImage("number balloons/3.png");
    balloon4 = loadImage("number balloons/4.png");
    balloon5 = loadImage("number balloons/5.png");
    balloon6 = loadImage("number balloons/6.png");
    balloon7 = loadImage("number balloons/7.png");
    balloon8 = loadImage("number balloons/8.png");
    balloon9 = loadImage("number balloons/9.png");
    balloon10 = loadImage("number balloons/10.png");

    //colour balloons in PLAY4
    blue = loadImage("coloured balloons/blue.png");
    green = loadImage("coloured balloons/green.png");
    orange = loadImage("coloured balloons/orange.png");
    pink = loadImage("coloured balloons/pink.png");
    purple = loadImage("coloured balloons/purple.png");
    red = loadImage("coloured balloons/red.png");
    yellow = loadImage("coloured balloons/yellow.png");

    //special balloons
    pointB = loadImage("number balloons/point.png");
    spiralB = loadImage("number balloons/spiral.png");
    starB = loadImage("number balloons/star.png");
    sunB = loadImage("number balloons/sun.png");
}


function setup(){
    createCanvas(displayWidth, displayHeight);
    //640, 360

    //creating play icon
    playIcon = createSprite(displayWidth/2, displayHeight/2 + 180, 30, 5);
    playIcon.addImage(playImg);
    playIcon.scale = 1;

    //creating music on icon
    music = createSprite(0 + 40, displayHeight - 40, 40, 10);
    music.addImage("on", music_on);
    music.addImage("off", music_off);
    music.scale = 0.5;

    //creating how to play icon
    howToPlayIcon = createSprite(displayWidth - 55, displayHeight - 120, 40, 10);
    howToPlayIcon.addImage(howToPlayImg);
    howToPlayIcon.scale = 0.14;

    //creating the game rules
    how_to_play = createSprite(displayWidth/2, displayHeight/2, 40, 10);
    how_to_play.addImage(how_to_playImg);
    how_to_play.scale = 0.2;
    how_to_play.visible = false;

    //creating close icon
    closeIcon = createSprite(displayWidth/2 + 112.5, displayHeight/2 - 160, 40, 10);
    closeIcon.addImage(closeImg);
    closeIcon.scale = 0.06;
    closeIcon.visible = false;

    //creating music off icon
    titleIcon = createSprite(displayWidth/2 + 10, displayHeight/2, 40, 10);
    titleIcon.addImage(titleImg);
    titleIcon.scale = 1;
    
    //creating back icon
    backIcon = createSprite(0 + 30, 0 + 30, 40, 10);
    backIcon.addImage(backImg);
    backIcon.scale = 0.2;
    backIcon.visible = false;

    //creating back icon 1
    backIcon1 = createSprite(0 + 25, 0 + 25, 40, 10);
    backIcon1.addImage(backImg1);
    backIcon1.scale = 0.08;
    backIcon1.visible = false;

    //creating back icon 2
    backIcon2 = createSprite(0 + 25, 0 + 25, 40, 10);
    backIcon2.addImage(backImg2);
    backIcon2.scale = 0.08;
    backIcon2.visible = false;

    //creating back icon 3
    backIcon3 = createSprite(0 + 25, 0 + 25, 40, 10);
    backIcon3.addImage(backImg3);
    backIcon3.scale = 0.08;
    backIcon3.visible = false;

    //creating back icon 4
    backIcon4 = createSprite(0 + 25, 0 + 25, 40, 10);
    backIcon4.addImage(backImg4);
    backIcon4.scale = 0.08;
    backIcon4.visible = false;

    //creating the normal balloon cover
    balloons_cover = createSprite(displayWidth/2 - 450, displayHeight/2 - 80, 40, 10);
    balloons_cover.addImage(balloons_coverImg);
    balloons_cover.scale = 0.2;
    balloons_cover.visible = false;
   
    //creating the alphabet balloon cover
    alphabet_cover = createSprite(displayWidth/2 - 170, displayHeight/2 + 80, 40, 10);
    alphabet_cover.addImage(alphabet_coverImg);
    alphabet_cover.scale = 0.2;
    alphabet_cover.visible = false;

    //creating the number balloon cover
    number_cover = createSprite(displayWidth/2 + 120, displayHeight/2 - 80, 40, 10);
    number_cover.addImage(number_coverImg);
    number_cover.scale = 0.2;
    number_cover.visible = false;

    //creating the colour balloon cover
    colour_cover = createSprite(displayWidth/2 + 420, displayHeight/2 + 70, 40, 10);
    colour_cover.addImage(colour_coverImg);
    colour_cover.scale = 0.2;
    colour_cover.visible = false;

    //create Obstacle and Cloud Groups
    cloudGroup = new Group();
    cloudGroup1 = new Group();
    cloudGroup2 = new Group();
    cloudGroup3 = new Group();
    balloonsGroup = new Group();
    balloonsGroup1 = new Group();
    balloonsAlphabetGroup = new Group();
    balloonsNumberGroup = new Group();
    balloonsColourGroup = new Group();


    sunBalloonGroup = new Group();
    spiralBalloonGroup = new Group();
    starBalloonGroup = new Group();
    pointBalloonGroup = new Group();

    
}


function draw(){

    if(playIcon.touchCount > 0){
        for(var s = 0; s < playIcon.touchCount; s++){
            console.log("Works")
            touch = playIcon.GetTouch(s)
        }
    }

    if(gameState === COLOURS){        
        background(74, 189, 234);    
        backIcon4.visible = true;
        clouds();
        clouds1();
        clouds2();
        clouds3();
        spawnBalloons1();
        spawnColourBalloons();
        sunBalloon();
        spiralBalloon();
        pointBalloon();
        starBalloon();
    }     

    if(gameState === NUMBERS){        
        background(74, 189, 234);    
        backIcon3.visible = true;
        clouds();
        clouds1();
        clouds2();
        clouds3();
        spawnBalloons1();
        spawnNumberBalloons();
        sunBalloon();
        spiralBalloon();
        pointBalloon();
        starBalloon();
    }        

    if(gameState === ALPHABET){        
        background(74, 189, 234);    
        backIcon2.visible = true;
        clouds();
        clouds1();
        clouds2();
        clouds3();
        spawnBalloons1();
        spawnAlphabetBalloons();
        sunBalloon();
        spiralBalloon();
        pointBalloon();
        starBalloon();
        for(var i = 0; i < balloonsGroup1.length; i++){
            if(mousePressedOver(balloonsGroup1[i])){
                balloonsGroup1[i].destroy();
                popSound.play();
            }
        }

        for(var i = 0; i < balloonsAlphabetGroup.length; i++){
            if(mousePressedOver(balloonsAlphabetGroup[i])){
                balloonsAlphabetGroup[i].destroy();
                popSound.play();
            }
        }

        for(var j = 0; j < sunBalloonGroup.length; j++){
            if(mousePressedOver(sunBalloonGroup[j])){
                sunBalloonGroup[j].destroy();
            }
        }
        for(var k = 0; k < spiralBalloonGroup.length; k++){
            if(mousePressedOver(spiralBalloonGroup[k])){
                spiralBalloonGroup[k].destroy();
            }
        }
        for(var m = 0; m < starBalloonGroup.length; m++){
            if(mousePressedOver(starBalloonGroup[m])){
                starBalloonGroup[m].destroy();
            }
        }
        for(var n = 0; n < pointBalloonGroup.length; n++){
            if(mousePressedOver(pointBalloonGroup[n])){
                pointBalloonGroup[n].destroy();
                dingSound.play();
            }
        }
    }

    if(gameState === BALLOONS){        
        background(74, 189, 234);    
        backIcon1.visible = true;
        clouds();
        clouds1();
        clouds2();
        clouds3();
        spawnBalloons();
        sunBalloon();
        spiralBalloon();
        pointBalloon();
        starBalloon();
        for(var i = 0; i < balloonsGroup.length; i++){
            if(mousePressedOver(balloonsGroup[i])){
                balloonsGroup[i].destroy();
                popSound.play();
            }
        }
        for(var j = 0; j < sunBalloonGroup.length; j++){
            if(mousePressedOver(sunBalloonGroup[j])){
                sunBalloonGroup[j].destroy();
            }
        }
        for(var k = 0; k < spiralBalloonGroup.length; k++){
            if(mousePressedOver(spiralBalloonGroup[k])){
                spiralBalloonGroup[k].destroy();
            }
        }
        for(var m = 0; m < starBalloonGroup.length; m++){
            if(mousePressedOver(starBalloonGroup[m])){
                starBalloonGroup[m].destroy();
            }
        }
        for(var n = 0; n < pointBalloonGroup.length; n++){
            if(mousePressedOver(pointBalloonGroup[n])){
                pointBalloonGroup[n].destroy();
                dingSound.play();
            }
        }
    }
 

    if(gameState === RULES){
        how_to_play.visible = true;
        closeIcon.visible = true;
    }

    if(gameState === LEVELS){
        background(levelsBg);
        balloons_cover.visible = true;
        alphabet_cover.visible = true;
        number_cover.visible = true;
        colour_cover.visible = true;
        backIcon.visible = true;
    }

    if(gameState === START){
        background(bgImg);
        playIcon.visible = true;
        titleIcon.visible = true;
        howToPlayIcon.visible = true;
        music.visible = true;
    }


   //if mouse is over play icon
    if(mouseIsOver(playIcon)){
        playIcon.scale = 1.03;
    } else{
        playIcon.scale = 1;
    }

    //if mouse is over rules icon
    if(mouseIsOver(howToPlayIcon)){
        howToPlayIcon.scale = 0.143;
    } else{
        howToPlayIcon.scale = 0.14;
    }

    //if mouse is over music on icon
    if(mouseIsOver(music)){
        music.scale = 0.73;
    } else{
        music.scale = 0.7;
    }

    //if mouse is over back icon
    if(mouseIsOver(backIcon)){
        backIcon.scale = 0.23;
    } else{
        backIcon.scale = 0.2;
    }

    //if mouse is over back icon 1
    if(mouseIsOver(backIcon1)){
        backIcon1.scale = 0.185;
    } else{
        backIcon1.scale = 0.175;
    }

    //if mouse is over back icon 2
    if(mouseIsOver(backIcon2)){
        backIcon2.scale = 0.185;
    } else{
        backIcon2.scale = 0.175;
    }

    //if mouse is over back icon 3
    if(mouseIsOver(backIcon3)){
        backIcon3.scale = 0.185;
    } else{
        backIcon3.scale = 0.175;
    }

    //if mouse is over back icon 4
    if(mouseIsOver(backIcon4)){
        backIcon4.scale = 0.185;
    } else{
        backIcon4.scale = 0.175;
    }

    //if mouse is over close icon
    if(mouseIsOver(closeIcon)){
        closeIcon.scale = 0.068;
    } else{
        closeIcon.scale = 0.06;
    }

    //if mouse is over balloon cover
    if(mouseIsOver(balloons_cover)){
        balloons_cover.scale = 0.228;
    } else{
        balloons_cover.scale = 0.22;
    }

    //if mouse is over alphabet cover
    if(mouseIsOver(alphabet_cover)){
        alphabet_cover.scale = 0.238;
    } else{
        alphabet_cover.scale = 0.23;
    }

    //if mouse is over number cover
    if(mouseIsOver(number_cover)){
        number_cover.scale = 0.258;
    } else{
        number_cover.scale = 0.25;
    }

    //if mouse is over colour cover
    if(mouseIsOver(colour_cover)){
        colour_cover.scale = 0.238;
    } else{
        colour_cover.scale = 0.23;
    }


    //mouse clicked play button
    if(gameState === START && mousePressedOver(playIcon)){
            clickSound.play();
            gameState = LEVELS;
            gameState != BALLOONS;
            gameState != ALPHABET;
            playIcon.visible = false;
            music.visible = false;
            titleIcon.visible = false;
            howToPlayIcon.visible = false;
    }

    //mouse clicked rules button
    if(gameState === START && mousePressedOver(howToPlayIcon)){
        clickSound.play();
        gameState = RULES;
    }

    //mouse clicked back button
    if(gameState === LEVELS && mousePressedOver(backIcon)){
            clickSound.play();
            gameState = START;
            balloons_cover.visible = false;
            alphabet_cover.visible = false;
            number_cover.visible = false;
            colour_cover.visible = false;
            backIcon.visible = false;
    }

    //mouse clicked close button
    if(gameState === RULES && mousePressedOver(closeIcon)){
        clickSound.play();
        how_to_play.visible = false;
        closeIcon.visible = false;
        gameState = START;
    }

    if(gameState === RULES && mouseIsOver(playIcon)){
            playIcon.scale = 0.6;
    }
    if(gameState === RULES && mouseIsOver(music)){
            music.scale = 0.4;
    }
    if(gameState === RULES && mouseIsOver(howToPlayIcon)){
        howToPlayIcon.scale = 0.08;
    }

    
    //mouse clicked music button
    if(gameState === START && mousePressedOver(music)){
            music.changeImage("off", music_off);
    } else if(gameState === START && mousePressedOver(music)){
            music.chanegImage("on", music_on);
    }

    if(gameState === LEVELS && mousePressedOver(balloons_cover)){
            gameState = BALLOONS;
            clickSound.play();
            balloons_cover.visible = false;
            alphabet_cover.visible = false;
            number_cover.visible = false;
            colour_cover.visible = false;
            backIcon.visible = false;
    }

    if(gameState === BALLOONS && mousePressedOver(backIcon1)){
        gameState = START;
        backIcon1.visible = false;
        balloonsGroup.destroyEach();
        cloudGroup.destroyEach();
        cloudGroup1.destroyEach();
        cloudGroup2.destroyEach();
        cloudGroup3.destroyEach();
        sunBalloonGroup.destroyEach();
        spiralBalloonGroup.destroyEach();
        pointBalloonGroup.destroyEach();
        starBalloonGroup.destroyEach();
    }

    if(gameState === LEVELS && mousePressedOver(alphabet_cover)){
            gameState = ALPHABET;
            clickSound.play();
            balloons_cover.visible = false;
            alphabet_cover.visible = false;
            number_cover.visible = false;
            colour_cover.visible = false;
            backIcon.visible = false;
            box.visible = true;
    }

    if(gameState === ALPHABET && mousePressedOver(backIcon2)){
        gameState = START;
        backIcon2.visible = false;
        balloonsGroup1.destroyEach();
        cloudGroup.destroyEach();
        cloudGroup1.destroyEach();
        cloudGroup2.destroyEach();
        cloudGroup3.destroyEach();
        sunBalloonGroup.destroyEach();
        spiralBalloonGroup.destroyEach();
        pointBalloonGroup.destroyEach();
        starBalloonGroup.destroyEach();
        balloonsAlphabetGroup.destroyEach();
    }

    if(gameState === LEVELS && mousePressedOver(number_cover)){
            gameState = NUMBERS;
            clickSound.play();
            balloons_cover.visible = false;
            alphabet_cover.visible = false;
            number_cover.visible = false;
            colour_cover.visible = false;
            backIcon.visible = false;
    }

    if(gameState === NUMBERS && mousePressedOver(backIcon3)){
        gameState = START;
        backIcon3.visible = false;
        balloonsGroup1.destroyEach();
        cloudGroup.destroyEach();
        cloudGroup1.destroyEach();
        cloudGroup2.destroyEach();
        cloudGroup3.destroyEach();
        sunBalloonGroup.destroyEach();
        spiralBalloonGroup.destroyEach();
        pointBalloonGroup.destroyEach();
        starBalloonGroup.destroyEach();
        balloonsNumberGroup.destroyEach();
    }

    if(gameState === LEVELS && mousePressedOver(colour_cover)){
            gameState = COLOURS;
            clickSound.play();
            balloons_cover.visible = false;
            alphabet_cover.visible = false;
            number_cover.visible = false;
            colour_cover.visible = false;
            backIcon.visible = false;
   }

   if(gameState === COLOURS && mousePressedOver(backIcon4)){
        gameState = START;
        backIcon4. visible = false;
        balloonsGroup1.destroyEach();
        cloudGroup.destroyEach();
        cloudGroup1.destroyEach();
        cloudGroup2.destroyEach();
        cloudGroup3.destroyEach();;
        sunBalloonGroup.destroyEach();
        spiralBalloonGroup.destroyEach();
        pointBalloonGroup.destroyEach();
        starBalloonGroup.destroyEach();
        balloonsColourGroup.destroyEach();
    }


    drawSprites();
}


function clouds(){
    if(frameCount % 250 === 0){
        var cloud = createSprite(displayWidth + 70, 50, 40, 10);
        cloud.addImage(cloudImage);
        cloud.y = Math.round(random(0 + 30, displayHeight/2 + 30));
        cloud.velocityX = -1.4;

        //assigning scale & lifetime to clouds
        cloud.scale = 0.95;
        cloud.lifetime = 1000;

        //add clouds to group
        cloudGroup.add(cloud);
}
}

function clouds1(){
    if(frameCount % 250 === 0){
        var cloud1 = createSprite(displayWidth + 220, 50, 40, 10);
        cloud1.addImage(cloudImage1);
        cloud1.y = Math.round(random(0 + 30, displayHeight/2 + 30));
        cloud1.velocityX = -1.4;

        //assigning scale & lifetime to clouds
        cloud1.scale = 1.1;
        cloud1.lifetime = 1000;

        //add clouds to group
        cloudGroup1.add(cloud1);
}
}

function clouds2(){
    if(frameCount % 250 === 0){
        var cloud2 = createSprite(displayWidth + 380, 50, 40, 10);
        cloud2.addImage(cloudImage2);
        cloud2.y = Math.round(random(0 + 30, displayHeight/2 + 30));
        cloud2.velocityX = -1.4;

        //assigning scale & lifetime to clouds
        cloud2.scale = 1.25;
        cloud2.lifetime = 1000;

        //add clouds to group
        cloudGroup2.add(cloud2);
}
}

function clouds3(){
    if(frameCount % 250 === 0){
        var cloud3 = createSprite(displayWidth + 530, 50, 40, 10);
        cloud3.addImage(cloudImage3);
        cloud3.y = Math.round(random(0 + 30, displayHeight/2 + 30));
        cloud3.velocityX = -1.4;

        //assigning scale & lifetime to clouds
        cloud3.scale = 1.2;
        cloud3.lifetime = 1000;

        //add clouds to group
        cloudGroup3.add(cloud3);
}
}

function spawnBalloons(){
        if(frameCount % 75 === 0){
                var balloon = createSprite(600, displayHeight + 70, 10, 30);
                balloon.x = Math.round(random(0 + 60, displayWidth - 30));
                balloon.velocityY = Math.round(random(-2, -2.2));

                var rand = Math.round(random(1, 13));
                switch(rand){
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
                    case 8: balloon.addImage(purpleImg);
                        break;
                    case 9: balloon.addImage(redImg);
                        break;
                    case 10: balloon.addImage(sky_blueImg);
                        break;
                    case 11: balloon.addImage(turquoiseImg);
                        break;
                    case 12: balloon.addImage(violetImg);
                        break;
                    case 13: balloon.addImage(yellowImg);
                        break;  
                    default: break;
                }

                //assigning scale & lifetime
                balloon.scale = 1.2;
                balloon.lifetime = 450;

                //add balloons to group
                balloonsGroup.add(balloon);
        }
}

function spawnBalloons1(){
        if(frameCount % 150 === 0){
                var balloon1 = createSprite(600, displayHeight + 50, 10, 30);
                balloon1.x = Math.round(random(0 + 60, displayWidth - 30));
                balloon1.velocityY = Math.round(random(-1.5, -1.8));

                var rand = Math.round(random(1, 13));
                switch(rand){
                    case 1: balloon1.addImage(blueImg);
                        break;
                    case 2: balloon1.addImage(cyanImg);
                        break;
                    case 3: balloon1.addImage(dark_blueImg);
                        break;
                    case 4: balloon1.addImage(dark_redImg);
                        break;
                    case 5: balloon1.addImage(greenImg);
                        break;
                    case 6: balloon1.addImage(orangeImg);
                        break;
                    case 7: balloon1.addImage(pinkImg);
                        break;
                    case 8: balloon1.addImage(purpleImg);
                        break;
                    case 9: balloon1.addImage(redImg);
                        break;
                    case 10: balloon1.addImage(sky_blueImg);
                        break;
                    case 11: balloon1.addImage(turquoiseImg);
                        break;
                    case 12: balloon1.addImage(violetImg);
                        break;
                    case 13: balloon1.addImage(yellowImg);
                        break;  
                    default: break;
                }

                //assigning scale & lifetime
                balloon1.scale = 1.2;
                balloon1.lifetime = 450;

                //add balloons to group
                balloonsGroup1.add(balloon1);
        }
}

function spawnAlphabetBalloons(){
        if(frameCount % 120 === 0){
                var balloonA = createSprite(600, displayHeight + 70, 10, 30);
                balloonA.x = Math.round(random(0 + 60, displayWidth - 60));
                balloonA.velocityY = Math.round(random(-1.8, -2));

                var rand = Math.round(random(1, 26));
                switch(rand){
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

                //assigning scale & lifetime
                balloonA.scale = 1.35;
                balloonA.lifetime = 450;

                //add balloons to group
                balloonsAlphabetGroup.add(balloonA);
        }
}

function spawnNumberBalloons(){
        if(frameCount % 100 === 0){
                var balloonN = createSprite(600, displayHeight + 50, 10, 30);
                balloonN.x = Math.round(random(0 + 60, displayWidth - 30));
                balloonN.velocityY = Math.round(random(-1.5, -1.8));

                var rand = Math.round(random(1, 10));
                switch(rand){
                    case 1: balloonN.addImage(balloon1);
                        break;
                    case 2: balloonN.addImage(balloon2);
                        break;
                    case 3: balloonN.addImage(balloon3);
                        break;
                    case 4: balloonN.addImage(balloon4);
                        break;
                    case 5: balloonN.addImage(balloon5);
                        break;
                    case 6: balloonN.addImage(balloon6);
                        break;
                    case 7: balloonN.addImage(balloon7);
                        break;
                    case 8: balloonN.addImage(balloon8);
                        break;
                    case 9: balloonN.addImage(balloon9);
                        break;
                    case 10: balloonN.addImage(balloon10);
                        break;
                    default: break;
                }

                //assigning scale & lifetime
                balloonN.scale = 0.65;
                balloonN.lifetime = 450;

                //add balloons to group
                balloonsNumberGroup.add(balloonN);
        }
}

function spawnColourBalloons(){
        if(frameCount % 100 === 0){
                var balloonC = createSprite(600, displayHeight + 50, 10, 30);
                balloonC.x = Math.round(random(0 + 60, displayWidth - 30));
                balloonC.velocityY = Math.round(random(-1.5, -1.8));

                var rand = Math.round(random(1, 7));
                switch(rand){
                    case 1: balloonC.addImage(blue);
                        break;
                    case 2: balloonC.addImage(green);
                        break;
                    case 3: balloonC.addImage(orange);
                        break;
                    case 4: balloonC.addImage(yellow);
                        break;
                    case 5: balloonC.addImage(pink);
                        break;
                    case 6: balloonC.addImage(purple);
                        break;
                    case 7: balloonC.addImage(red);
                        break;
                    default: break;
                }

                //assigning scale & lifetime
                balloonC.scale = 0.65;
                balloonC.lifetime = 450;

                //add balloons to group
                balloonsColourGroup.add(balloonC);
        }
}

function sunBalloon(){
        if(frameCount % 250 === 0){
                var sunBalloon = createSprite(600, displayHeight + 70, 10, 30);
                sunBalloon.velocityY = -1.4;
                sunBalloon.x = Math.round(random(0 + 60, displayWidth - 30));
                sunBalloon.addImage(sunB);
                sunBalloon.scale = 2.5;

                //assigning lifetime
                sunBalloon.lifetime = 450;

                //add sun balloon to group
                sunBalloonGroup.add(sunBalloon);
        }
}

function spiralBalloon(){
        if(frameCount % 250 === 0){
                var spiralBalloon = createSprite(600, displayHeight + 270, 10, 30);
                spiralBalloon.velocityY = -1.4;
                spiralBalloon.x = Math.round(random(0 + 60, displayWidth - 30));
                spiralBalloon.addImage(spiralB);
                spiralBalloon.scale = 2.5;

                //assigning lifetime
                spiralBalloon.lifetime = 520;

                //add sun balloon to group
                spiralBalloonGroup.add(spiralBalloon);
        }
}

function pointBalloon(){
        if(frameCount % 250 === 0){
                var pointBalloon = createSprite(600, displayHeight + 470, 10, 30);
                pointBalloon.velocityY = -1.4;
                pointBalloon.x = Math.round(random(0 + 60, displayWidth - 30));
                pointBalloon.addImage(pointB);
                pointBalloon.scale = 2.5;

                //assigning lifetime
                pointBalloon.lifetime = 600;

                //add sun balloon to group
                pointBalloonGroup.add(pointBalloon);
        }
}

function starBalloon(){
        if(frameCount % 250 === 0){
                var starBalloon = createSprite(600, displayHeight + 560, 10, 30);
                starBalloon.velocityY = -1.4;
                starBalloon.x = Math.round(random(0 + 60, displayWidth - 30));
                starBalloon.addImage(starB);
                starBalloon.scale = 2.5;

                //assigning lifetime
                starBalloon.lifetime = 820;

                //add sun balloon to group
                starBalloonGroup.add(starBalloon);
        }
}
