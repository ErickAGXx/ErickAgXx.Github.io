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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

//THIS IS THE FINISH PLATFORMS RIGHT(END) TO LEFT(START)//
    
// COMPLEX PLATFORM LEVEL 1 //
// STARTING PLATFORM (top left corner)
// CAGE PLATFORM (centered, floating)
const cageX = 650, cageY = 250, cageW = 200, cageH = 100, wallT = 20;
// Top
createPlatform(cageX, cageY, cageW, wallT, "gray");
// Bottom
createPlatform(cageX, cageY + cageH, cageW, wallT, "gray");
// Left
createPlatform(cageX, cageY, wallT, cageH + wallT, "gray");
// Right
createPlatform(cageX + cageW - wallT, cageY, wallT, cageH + wallT, "gray");

// STAIRCASE UP TO THE CAGE (from left side)
let stairX = cageX - 120, stairY = cageY + cageH + 20;
for (let i = 0; i < 6; i++) {
  createPlatform(stairX + i * 25, stairY - i * 25, 40, 15, "brown");
  createPlatform(500, 400, 100, 20, "red");
}
createPlatform









//THS IS THE START PLATFORMS LEFT(START) TO RIGHT(END)//

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms




    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
