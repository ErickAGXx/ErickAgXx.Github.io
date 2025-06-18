

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
  


    // TODO 2 - Create Platforms
    // Bottom floor (start)
    createPlatform(20, 540, 120, 20, "white");

    // 2nd floor (right side)
    createPlatform(600, 440, 180, 20, "white");
    createPlatform(700, 360, 20, 80, "white"); // short "ladder" up

    // 3rd floor (left side)
    createPlatform(20, 340, 180, 20, "white");
    createPlatform(120, 260, 20, 80, "white"); // short "ladder" up
createPlatform(160, 500, 40, 20, "white"); 
createPlatform(210, 460, 40, 20, "white"); 
createPlatform(260, 420, 40, 20, "white"); 
    // 4th floor (right side)
    createPlatform(600, 240, 180, 20, "white");
    createPlatform(700, 160, 20, 80, "red"); // short "ladder" up

    // 5th floor (top left, goal)
    createPlatform(20, 80, 120, 20, "white");

    createPlatform(350, 300, 60, 20, "white");
createPlatform(700, 520, 80, 20, "white");
createPlatform(780, 1000, 60, 20, "white");
createPlatform(700, 1260, 60, 20, "white");
createPlatform(500, 1000, 60, 20, "white");
createPlatform(500, 800, 60, 20, "white");
createPlatform(10,1000, 60, 20, "white");


    // TODO 3 - Create Collectables
createCollectable("steve", 370, 270, 6, 0.7); 
createCollectable("max", 50, 500, 6, 0.7);
createCollectable("diamond", 700, 500, 6, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("top", 500, 700);
createCannon("bottom", 700, 800);
createCannon("right", 800,20)
createCannon("left" , 20, 20);
function resetGame() {
  setup(); 
}
    
   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
