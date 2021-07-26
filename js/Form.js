class Form {

  constructor() {
    
  }
  

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(()=>{
      input.hide();
     button.hide();
      var name = input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
     greeting.html("Hello " + name)
     greeting.position(130, 100);
    });

  }
}
