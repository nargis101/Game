class Alphabet{
    constructor(){}

    static spawnA(){
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

}