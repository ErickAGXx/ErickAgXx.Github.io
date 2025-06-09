$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
        createPlatform(0, 0, canvas.width, 20, "black"); // top
    createPlatform(0, canvas.height - 20, canvas.width, 20, "black"); // bottom
    createPlatform(0, 0, 20, canvas.height, "black"); // left
    createPlatform(canvas.width - 20, 0, 20, canvas.height, "black"); // right
    
//THIS IS THE FINISH PLATFORMS RIGHT(END) TO LEFT(START)//
    
// COMPLEX PLATFORM LEVEL 1 //
// STARTING PLATFORM (top left corner)













    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,560,800,20, "black");
createPlatform(400,440,400,20, "black");
createPlatform(0,320,180,20, "black");
createPlatform(190,210,350,20, "black");
createPlatform(600,320,180,30, "black");
createPlatform(540,150,20,80, "black");
createPlatform(600, 180, 60,20, "black");
createPlatform(750, 120, 60, 20,"black");
createPlatform(930, 50, 60, 20, "black");
createPlatform(1200,220,800,20, "black");
createPlatform(870,300,150,20, "black");








    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    //Audio effects//

//when the player jumps, the jump sound plays
//----> this sound is played
let jumpSound = new Audio("sounds/jump.wav");
function onPlayerJump() {
  jumpSound.volume=1.0;
  jumpSound.currentTime = 20;
jumpSound.play();
}
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
