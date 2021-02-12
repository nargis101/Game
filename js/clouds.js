class Clouds{
    constructor(){}


    static clouds(){
        if(frameCount % 250 === 0){
            var cloud = createSprite(displayWidth + 80, 50, 40, 10);
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

    static clouds1(){
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
    
    static clouds2(){
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
    
    static clouds3(){
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

}