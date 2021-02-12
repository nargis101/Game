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
    playImg = loadImage("Folder/images/play.png");
    settingsImg = loadImage("Folder/images/settings.png");
    music_on = loadImage("Folder/images/music_on.png");
    music_off = loadImage("Folder/images/music_off.png");
    titleImg = loadImage("Folder/images/title.png");
    backImg = loadImage("Folder/images/back.png");
    backImg1 = loadImage("Folder/images/back.png");
    backImg2 = loadImage("Folder/images/back.png");
    backImg3 = loadImage("Folder/images/back.png");
    backImg4 = loadImage("Folder/images/back.png");
    howToPlayImg = loadImage("Folder/images/how to play.png");
    closeImg = loadImage("Folder/images/close.png");

    balloons_coverImg = loadImage("Folder/balloons/balloons_cover.png");
    alphabet_coverImg = loadImage("Folder/alphabet balloons/alphabet_cover.png");
    number_coverImg = loadImage("Folder/number balloons/numbers_cover.png");
    colour_coverImg = loadImage("Folder/coloured balloons/colours_cover.png");

    bgImg = loadImage("Folder/images/background.jpg");
    levelsBg = loadImage("Folder/images/levelsBg.jpg");

    //loading sounds
    clickSound = loadSound("Folder/sounds/click.mp3");
    backgroundSound = loadSound("Folder/sounds/backgroundMusic.mp3");
    popSound = loadSound("Folder/sounds/pop.mp3");
    dingSound = loadSound("Folder/sounds/ding.mp3");

    soundA = loadSound("Folder/sounds/aSound.mp3");
    soundB = loadSound("Folder/sounds/bSound.mp3");
    soundC = loadSound("Folder/sounds/cSound.mp3");
    soundD = loadSound("Folder/sounds/dSound.mp3");
    soundE = loadSound("Folder/sounds/eSound.mp3");
    soundF = loadSound("Folder/sounds/fSound.mp3");
    soundG = loadSound("Folder/sounds/gSound.mp3");
    soundH = loadSound("Folder/sounds/hSound.mp3");
    soundI = loadSound("Folder/sounds/iSound.mp3");
    soundJ = loadSound("Folder/sounds/jSound.mp3");
    soundK = loadSound("Folder/sounds/kSound.mp3");
    soundL = loadSound("Folder/sounds/lSound.mp3");
    soundM = loadSound("Folder/sounds/mSound.mp3");
    soundN = loadSound("Folder/sounds/nSound.mp3");
    soundO = loadSound("Folder/sounds/oSound.mp3");
    soundP = loadSound("Folder/sounds/pSound.mp3");
    soundQ = loadSound("Folder/sounds/qSound.mp3");
    soundR = loadSound("Folder/sounds/rSound.mp3");
    soundS = loadSound("Folder/sounds/sSound.mp3");
    soundT = loadSound("Folder/sounds/tSound.mp3");
    soundU = loadSound("Folder/sounds/uSound.mp3");
    soundV = loadSound("Folder/sounds/vSound.mp3");
    soundW = loadSound("Folder/sounds/wSound.mp3");
    soundX = loadSound("Folder/sounds/xSound.mp3");
    soundY = loadSound("Folder/sounds/ySound.mp3");
    soundZ = loadSound("Folder/sounds/zSound.mp3");



    soundA = loadSound("Folder/sounds/aSound.mp3");

    soundA = loadSound("Folder/sounds/aSound.mp3");

    //images for how to play & settings button
    how_to_playImg = loadImage("Folder/images/how_to_playImg.png");
    settingsPg = loadImage("Folder/images/settingsPage.png");

    //clouds in PLAY1
    cloudImage = loadImage("Folder/clouds/cloud.png");
    cloudImage1 = loadImage("Folder/clouds/cloud1.png");
    cloudImage2 = loadImage("Folder/clouds/cloud2.png");
    cloudImage3 = loadImage("Folder/clouds/cloud3.png");

    //balloons in PLAY1
    blueImg = loadImage("Folder/balloons/blue.png");
    cyanImg = loadImage("Folder/balloons/cyan.png");
    dark_blueImg = loadImage("Folder/balloons/dark blue.png");
    dark_redImg = loadImage("Folder/balloons/dark red.png");
    greenImg = loadImage("Folder/balloons/green.png");
    heartImg = loadImage("Folder/balloons/heart.png");
    orangeImg = loadImage("Folder/balloons/orange.png");
    pinkImg = loadImage("Folder/balloons/pink.png");
    purpleImg = loadImage("Folder/balloons/purple.png");
    redImg = loadImage("Folder/balloons/red.png");
    sky_blueImg = loadImage("Folder/balloons/sky blue.png");
    turquoiseImg = loadImage("Folder/balloons/turquoise.png");
    violetImg = loadImage("Folder/balloons/violet.png");
    yellowImg = loadImage("Folder/balloons/yellow.png");

    //alphabet balloons in PLAY2
    A = loadImage("Folder/alphabet balloons/A.png");
    B = loadImage("Folder/alphabet balloons/B.png");
    C = loadImage("Folder/alphabet balloons/C.png");
    D = loadImage("Folder/alphabet balloons/D.png");
    E = loadImage("Folder/alphabet balloons/E.png");
    F = loadImage("Folder/alphabet balloons/F.png");
    G = loadImage("Folder/alphabet balloons/G.png");
    H = loadImage("Folder/alphabet balloons/H.png");
    I = loadImage("Folder/alphabet balloons/I.png");
    J = loadImage("Folder/alphabet balloons/J.png");
    K = loadImage("Folder/alphabet balloons/K.png");
    L = loadImage("Folder/alphabet balloons/L.png");
    M = loadImage("Folder/alphabet balloons/M.png");
    N = loadImage("Folder/alphabet balloons/N.png");
    O = loadImage("Folder/alphabet balloons/O.png");
    P = loadImage("Folder/alphabet balloons/P.png");
    Q = loadImage("Folder/alphabet balloons/Q.png");
    R = loadImage("Folder/alphabet balloons/R.png");
    S = loadImage("Folder/alphabet balloons/S.png");
    T = loadImage("Folder/alphabet balloons/T.png");
    U = loadImage("Folder/alphabet balloons/U.png");
    V = loadImage("Folder/alphabet balloons/V.png");
    W = loadImage("Folder/alphabet balloons/W.png");
    X = loadImage("Folder/alphabet balloons/X.png");
    Y = loadImage("Folder/alphabet balloons/Y.png");
    Z = loadImage("Folder/alphabet balloons/Z.png");

    //number balloons in PLAY3
    balloon1 = loadImage("Folder/number balloons/1.png");
    balloon2 = loadImage("Folder/number balloons/2.png");
    balloon3 = loadImage("Folder/number balloons/3.png");
    balloon4 = loadImage("Folder/number balloons/4.png");
    balloon5 = loadImage("Folder/number balloons/5.png");
    balloon6 = loadImage("Folder/number balloons/6.png");
    balloon7 = loadImage("Folder/number balloons/7.png");
    balloon8 = loadImage("Folder/number balloons/8.png");
    balloon9 = loadImage("Folder/number balloons/9.png");
    balloon10 = loadImage("Folder/number balloons/10.png");

    //colour balloons in PLAY4
    blue = loadImage("Folder/coloured balloons/blue.png");
    green = loadImage("Folder/coloured balloons/green.png");
    orange = loadImage("Folder/coloured balloons/orange.png");
    pink = loadImage("Folder/coloured balloons/pink.png");
    purple = loadImage("Folder/coloured balloons/purple.png");
    red = loadImage("Folder/coloured balloons/red.png");
    yellow = loadImage("Folder/coloured balloons/yellow.png");

    //special balloons
    pointB = loadImage("Folder/number balloons/point.png");
    spiralB = loadImage("Folder/number balloons/spiral.png");
    starB = loadImage("Folder/number balloons/star.png");
    sunB = loadImage("Folder/number balloons/sun.png");
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
    music.scale = 0.7;

    //creating how to play icon
    howToPlayIcon = createSprite(displayWidth - 55, displayHeight - 120, 40, 10);
    howToPlayIcon.addImage(howToPlayImg);
    howToPlayIcon.scale = 0.13;

    //creating title icon
    titleIcon = createSprite(displayWidth/2 + 10, displayHeight/2, 40, 10);
    titleIcon.addImage(titleImg);
    titleIcon.scale = 1;


    //creating the game rules
    how_to_play = createSprite(displayWidth/2, displayHeight/2, 40, 10);
    how_to_play.addImage(how_to_playImg);
    how_to_play.scale = 0.3;
    how_to_play.visible = false;

    //creating close icon
    closeIcon = createSprite(displayWidth/2 + 210, displayHeight/2 - 300, 40, 10);
    closeIcon.addImage(closeImg);
    closeIcon.scale = 1;
    closeIcon.visible = false;

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


    if(gameState === COLOURS){        
        background(74, 189, 234);    
        backIcon4.visible = true;
        Clouds.clouds();
        Clouds.clouds1();
        Clouds.clouds2();
        Clouds.clouds3();
        normalBalloons.spawnBalloons1();
        normalBalloons.spawnColourBalloons();
        specialBalloons.sunBalloon();
        specialBalloons.spiralBalloon();
        specialBalloons.pointBalloon();
        specialBalloons.starBalloon();

        for(var z = 0; z < balloonsGroup1.length; z++){
            if(mousePressedOver(balloonsGroup1[z])){
                balloonsGroup1[z].destroy();
                popSound.play();
            }
        }

        for(var a = 0; a < balloonsColourGroup.length; a++){
            if(mousePressedOver(balloonsColourGroup[a])){
                balloonsColourGroup[a].destroy();
                popSound.play();
            }
        }

        for(var b = 0; b < sunBalloonGroup.length; b++){
            if(mousePressedOver(sunBalloonGroup[b])){
                sunBalloonGroup[b].destroy();
            }
        }
        for(var c = 0; c < spiralBalloonGroup.length; c++){
            if(mousePressedOver(spiralBalloonGroup[c])){
                spiralBalloonGroup[c].destroy();
            }
        }
        for(var d = 0; d < starBalloonGroup.length; d++){
            if(mousePressedOver(starBalloonGroup[d])){
                starBalloonGroup[d].destroy();
            }
        }
        for(var e = 0; e < pointBalloonGroup.length; e++){
            if(mousePressedOver(pointBalloonGroup[e])){
                pointBalloonGroup[e].destroy();
                dingSound.play();
            }
        }
    }     

    if(gameState === NUMBERS){        
        background(74, 189, 234);    
        backIcon3.visible = true;
        Clouds.clouds();
        Clouds.clouds1();
        Clouds.clouds2();
        Clouds.clouds3();
        normalBalloons.spawnBalloons1();
        normalBalloons.spawnNumberBalloons();
        specialBalloons.sunBalloon();
        specialBalloons.spiralBalloon();
        specialBalloons.pointBalloon();
        specialBalloons.starBalloon();

        for(var t = 0; t < balloonsGroup1.length; t++){
            if(mousePressedOver(balloonsGroup1[t])){
                balloonsGroup1[t].destroy();
                popSound.play();
            }
        }

        for(var u = 0; u < balloonsNumberGroup.length; u++){
            if(mousePressedOver(balloonsNumberGroup[u])){
                balloonsNumberGroup[u].destroy();
                popSound.play();
            }
        }

        for(var v = 0; v < sunBalloonGroup.length; v++){
            if(mousePressedOver(sunBalloonGroup[v])){
                sunBalloonGroup[v].destroy();
            }
        }
        for(var w = 0; w < spiralBalloonGroup.length; w++){
            if(mousePressedOver(spiralBalloonGroup[w])){
                spiralBalloonGroup[w].destroy();
            }
        }
        for(var x = 0; x < starBalloonGroup.length; x++){
            if(mousePressedOver(starBalloonGroup[x])){
                starBalloonGroup[x].destroy();
            }
        }
        for(var y = 0; y < pointBalloonGroup.length; y++){
            if(mousePressedOver(pointBalloonGroup[y])){
                pointBalloonGroup[y].destroy();
                dingSound.play();
            }
        }
    }        

    if(gameState === ALPHABET){        
        background(74, 189, 234);    
        backIcon2.visible = true;
        Clouds.clouds();
        Clouds.clouds1();
        Clouds.clouds2();
        Clouds.clouds3();
        normalBalloons.spawnBalloons1();
        normalBalloons.spawnAlphabetBalloons();
        specialBalloons.sunBalloon();
        specialBalloons.spiralBalloon();
        specialBalloons.pointBalloon();
        specialBalloons.starBalloon();

        for(var l = 0; l < balloonsGroup1.length; l++){
            if(mousePressedOver(balloonsGroup1[l])){
                balloonsGroup1[l].destroy();
                popSound.play();
            }
        }

        for(var o = 0; o < A.length; o++){
            if(mousePressedOver(A[o])){
                A[o].destroy();
                popSound.play();
            }
        }

        for(var p = 0; p < sunBalloonGroup.length; p++){
            if(mousePressedOver(sunBalloonGroup[p])){
                sunBalloonGroup[p].destroy();
            }
        }
        for(var q = 0; q < spiralBalloonGroup.length; q++){
            if(mousePressedOver(spiralBalloonGroup[q])){
                spiralBalloonGroup[q].destroy();
            }
        }
        for(var r = 0; r < starBalloonGroup.length; r++){
            if(mousePressedOver(starBalloonGroup[r])){
                starBalloonGroup[r].destroy();
            }
        }
        for(var s = 0; s < pointBalloonGroup.length; s++){
            if(mousePressedOver(pointBalloonGroup[s])){
                pointBalloonGroup[s].destroy();
                dingSound.play();
            }
        }
    }

    if(gameState === BALLOONS){        
        background(74, 189, 234);    
        backIcon1.visible = true;
        Clouds.clouds();
        Clouds.clouds1();
        Clouds.clouds2();
        Clouds.clouds3();
        normalBalloons.spawnBalloons();
        specialBalloons.sunBalloon();
        specialBalloons.spiralBalloon();
        specialBalloons.pointBalloon();
        specialBalloons.starBalloon();
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
        howToPlayIcon.scale = 0.138;
    } else{
        howToPlayIcon.scale = 0.13;
    }

    //if mouse is over music on icon
    if(mouseIsOver(music)){
        music.scale = 0.78;
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
        closeIcon.scale = 0.128;
    } else{
        closeIcon.scale = 0.12;
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
            playIcon.scale = 1;
    }

    if(gameState === RULES && mouseIsOver(music)){
        music.scale = 0.7;
    }

    if(gameState === RULES && mouseIsOver(howToPlayIcon)){
        howToPlayIcon.scale = 0.13;
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
