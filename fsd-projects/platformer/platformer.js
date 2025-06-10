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
     createPlatform(0, 560, 120, 20, "black");      // Start platform (bottom left)
    createPlatform(130, 510, 80, 20, "black");     // First jump, closer and a bit higher

    createPlatform(40, 440, 80, 20, "black");      // Second jump, spaced left and up
    createPlatform(200, 370, 80, 20, "black");     // Third jump, spaced right and up
    createPlatform(70, 300, 80, 20, "black");      // Fourth jump, spaced left and up
    createPlatform(220, 220, 80, 20, "black");  //Fifth jump,







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
