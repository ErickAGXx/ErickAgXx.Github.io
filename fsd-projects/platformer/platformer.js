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
 // ...existing code...

    // TODO 2 - Create Platforms
// ...existing code...

    // Bottom floor (start)
    createPlatform(20, 540, 120, 20, "black");

    // 2nd floor (right side)
    createPlatform(600, 440, 180, 20, "black");
    createPlatform(700, 360, 20, 80, "black"); // short "ladder" up

    // 3rd floor (left side)
    createPlatform(20, 340, 180, 20, "black");
    createPlatform(120, 260, 20, 80, "black"); // short "ladder" up
createPlatform(160, 500, 40, 20, "black"); // Step 1
createPlatform(210, 460, 40, 20, "black"); // Step 2
createPlatform(260, 420, 40, 20, "black"); //  step 3
    // 4th floor (right side)
    createPlatform(600, 240, 180, 20, "black");
    createPlatform(700, 160, 20, 80, "black"); // short "ladder" up

    // 5th floor (top left, goal)
    createPlatform(20, 80, 120, 20, "black");

    // Optional: Add a small platform in the middle for a collectable or a breather
    createPlatform(350, 300, 60, 20, "black");

// ...existing code...
    

    

    

    

    




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
