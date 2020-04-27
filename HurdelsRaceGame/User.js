class User {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = null;
  
    }
  
    getCount(){
      var userCountRef = database.ref('UserCount');
      userCountRef.on("value",(data)=>{
        userCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        userCount: count
      });
    }
  
    update(){
      var userIndex = "users/user" + this.index;
      database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
      });
    }
  
    static getUserInfo(){
      var userInfoRef = database.ref('users');
      userInfoRef.on("value",(data)=>{
        allUsers = data.val();
        
      })
    }
  
  static updateHurdelsATEND(rank) {
  database.ref('/').update({
  
    HurdelsAtEND:rank
  
  })
  
  
  }
  
    getHurdelsAtEND() {
    database.ref('HurdelsAtEND').on("value",(data)=>{
      this.rank = data.val()
  
  
    })
  
  
    }
  
  }
  