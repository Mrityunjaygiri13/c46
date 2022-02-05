class Game {
  constructor(){
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
  }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
     
     
  

    }
  
    play(){
        form.hide();
        Player.getPlayerInfo(); 
        
      
        //creating caram board
        board=createSprite(700,355)
        board.addImage(boardImg);
        board.scale=.3
        
        //creating boundaries
        b1= createSprite(400, 360, 10, 600);
        b2= createSprite(1000, 360, 10, 600);
        b3= createSprite(700, 62, 600, 10);
        b4= createSprite(700, 662, 600, 10);

        //creating striker  
        striker=createSprite(700,545)
        striker.addImage(strikerImg);
        striker.scale=.1  

        //giving velocity to striker
        striker.velocityX = 7;
        striker.velocityY = 8;

        //bouncing off the striker with boundaries
        striker.bounceOff(b1);
        striker.bounceOff(b2);
        striker.bounceOff(b3);
        striker.bounceOff(b4);
        

        //creating queen 
         redCoin = createSprite(675,350);
         redCoin.addImage(redCoinImg); 
         redCoin.scale = 0.25; 
       
        //creating black coins
        blackCoin1 = createSprite(722,350);
        blackCoin1.addImage(blackCoinImg); 
        blackCoin1.scale = 0.1; 
        blackCoin2 = createSprite(707,380);
        blackCoin2.addImage(blackCoinImg); 
        blackCoin2.scale = 0.1;
        blackCoin3 = createSprite(680,377);
        blackCoin3.addImage(blackCoinImg); 
        blackCoin3.scale = 0.1;
        blackCoin4 = createSprite(670,350);
        blackCoin4.addImage(blackCoinImg); 
        blackCoin4.scale = 0.1;
        blackCoin5 = createSprite(697,328);
        blackCoin5.addImage(blackCoinImg); 
        blackCoin5.scale = 0.1;

        //creating white coins
        whiteCoin1 = createSprite(732,370);
        whiteCoin1.addImage(whiteCoinImg); 
        whiteCoin1.scale = 0.1; 
        whiteCoin2 = createSprite(690,397);
        whiteCoin2.addImage(whiteCoinImg); 
        whiteCoin2.scale = 0.1;
        whiteCoin3 = createSprite(655,370);
        whiteCoin3.addImage(whiteCoinImg); 
        whiteCoin3.scale = 0.1;
        whiteCoin4 = createSprite(670,320);
        whiteCoin4.addImage(whiteCoinImg); 
        whiteCoin4.scale = 0.1;
        whiteCoin5 = createSprite(725,320);
        whiteCoin5.addImage(whiteCoinImg); 
        whiteCoin5.scale = 0.1;
      

        if(allPlayers !== undefined){
          
         


         // background(rgb(198,135,103));
         // image(boardImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
        }    
    
  }
}

  