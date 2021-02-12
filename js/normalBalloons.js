class normalBalloons{
    constructor(){}

    static spawnBalloons(){
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

    static spawnBalloons1(){
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

    static spawnNumberBalloons(){
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
                balloonN.scale = 1.4;
                balloonN.lifetime = 450;

                //add balloons to group
                balloonsNumberGroup.add(balloonN);
        }
    }

    static spawnColourBalloons(){
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
                balloonC.scale = 1.45;
                balloonC.lifetime = 450;

                //add balloons to group
                balloonsColourGroup.add(balloonC);
        }
    }

}