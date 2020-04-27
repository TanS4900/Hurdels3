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
      gameState:state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('userCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    Hurdel1 = createSprite(100,200);
    Hurdel1.addImage("Hurdel1",);
    Hurdel2 = createSprite(300,200);
    Hurdel2.addImage("Hurdel2",);
    Hurdel3 = createSprite(500,200);
    Hurdel3.addImage("Hurdel3",);
    Hurdel4 = createSprite(700,200);
    Hurdel4.addImage("Hurdel4",);
    Hurdels = [Hurdel1, Hurdel2, Hurdel3, Hurdel4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    player.getHurdelsAtEND();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allUsers[plr].distance;
        Hurdels[index-1].x = x;
        Hurdels[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === user.index){
          stroke(10);
          fill("yellow");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "yellow";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 4500){
      gameState = 2;
      player.rank = player.rank + 1;
      Player.updateHurdelsATEND(player.rank)
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(user.rank);
  }
}





