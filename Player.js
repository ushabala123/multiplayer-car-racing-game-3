class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
 
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  update(){
    var playerIndex="player/players"+this.index;
    database.ref(playerIndex).update({
      name:this.name,
      distance:this.distance
    });
  }
  getPlayerInfo(){
    var playerInfoRef=database.ref('player');
    playerInfoRef.on("value",(data)=>{
      allPlayers=data.val();  
      console.log(allPlayers);    
    })
  
  }
}