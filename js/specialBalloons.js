class specialBalloons{
    constructor(){}

    static sunBalloon(){
        if(frameCount % 300 === 0){
                var sunBalloon = createSprite(600, displayHeight + 80, 10, 30);
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

    static spiralBalloon(){
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

    static pointBalloon(){
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

    static starBalloon(){
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

}