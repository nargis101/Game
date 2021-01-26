var START = 0;
var gameState = START;
var LEVELS = 1;
var RULES = 2;

var playIcon, playImg;
var settingsIcon, settingsImg;
var music, music_on, music_off;
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
    music_on = loadImage("images/music_on.png");
    music_off = loadImage("images/music_off.png");
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

    //creating music on icon
    music = createSprite(20, 340, 40, 10);
    music.addImage("on", music_on);
    music.addImage("off", music_off);
    music.scale = 0.5;


    //creating how to play icon
    howToPlayIcon = createSprite(600, 300, 40, 10);
    howToPlayIcon.addImage(howToPlayImg);
    howToPlayIcon.scale = 0.08;

    //creating music off icon
    titleIcon = createSprite(320, 180, 40, 10);
    titleIcon.addImage(titleImg);
    titleIcon.scale = 0.6;
    
    //creating back icon
    backIcon = createSprite(20, 20, 40, 10);
    backIcon.addImage(backImg);
    backIcon.scale = 0.13;
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

    if(gameState === START){
        background(bgImg);
        playIcon.visible = true;
        titleIcon.visible = true;
        howToPlayIcon.visible = true;
        music.visible = true;
    }

    if(gameState === LEVELS){
        background(levelsBg);
        balloons_cover.visible = true;
        alphabet_cover.visible = true;
        number_cover.visible = true;
        colour_cover.visible = true;
        backIcon.visible = true;
    }

    if(gameState === RULES){
        how_to_play.visible = true;
        closeIcon.visible = true;
    }


    
   //if mouse is over play icon
    if(mouseIsOver(playIcon)){
        playIcon.scale = 0.63;
    } else{
        playIcon.scale = 0.6;
    }

    //if mouse is over rules icon
    if(mouseIsOver(howToPlayIcon)){
        howToPlayIcon.scale = 0.083;
    } else{
        howToPlayIcon.scale = 0.08;
    }

    //if mouse is over music on icon
    if(mouseIsOver(music)){
        music.scale = 0.43;
    } else{
        music.scale = 0.4;
    }

    //if mouse is over back icon
    if(mouseIsOver(backIcon)){
        backIcon.scale = 0.15;
    } else{
        backIcon.scale = 0.13;
    }

    //if mouse is over close icon
    if(mouseIsOver(closeIcon)){
        closeIcon.scale = 0.068;
    } else{
        closeIcon.scale = 0.06;
    }

    //if mouse is over balloon cover
    if(mouseIsOver(balloons_cover)){
        balloons_cover.scale = 0.125;
    } else{
        balloons_cover.scale = 0.12;
    }

    //if mouse is over alphabet cover
    if(mouseIsOver(alphabet_cover)){
        alphabet_cover.scale = 0.135;
    } else{
        alphabet_cover.scale = 0.13;
    }

    //if mouse is over number cover
    if(mouseIsOver(number_cover)){
        number_cover.scale = 0.155;
    } else{
        number_cover.scale = 0.15;
    }

    //if mouse is over colour cover
    if(mouseIsOver(colour_cover)){
        colour_cover.scale = 0.125;
    } else{
        colour_cover.scale = 0.12;
    }


    //mouse clicked play button
    if(gameState === START && mousePressedOver(playIcon)){
            clickSound.play();
            gameState = LEVELS;
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

    
    //mouse clicked music button
    if(gameState === START && mousePressedOver(music)){
            music.changeImage("off", music_off);
    } else if(gameState === START && mousePressedOver(music)){
            music.chanegImage("on", music_on);
    }
     
    drawSprites();
}