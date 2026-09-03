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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(233, 0, 214)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable grid 
    // toggleGrid()//

// createPlatform (x, y, width, height, "color")
    // TODO 2 - Create Platforms
createPlatform (270, 650, 100, 20, "pink")
createPlatform (550, 550, 100, 20, "pink")
createPlatform (270, 450, 100, 20, "pink")
createPlatform (550, 350, 100, 20, "pink")
createPlatform (700, 250, 10, 700, "pink") //middle wall 
createPlatform (750, 250, 100, 20, "pink")
createPlatform (950, 400, 100, 20, "pink")
createPlatform (750, 550, 100, 20, "pink")
createPlatform (950, 650, 100, 20, "pink")
createPlatform (250, 260, 100, 20, "pink")// collectable plat
createPlatform (1100, 35, 10, 400, "pink")
createPlatform (950, 130, 100, 20, "pink")// collect plat 
createPlatform (1200, 550, 200, 20, "pink")
createPlatform (1100, 430, 200, 20, "pink")
createPlatform (1200, 320, 200, 20, "pink")
createPlatform (1100, 210, 200, 20, "pink")

    // TODO 3 - Create Collectables
createCollectable ("steve", 275, 230, 0.5, 0.7)
createCollectable ("steve", 975, 100, 0.5, 0.7)
createCollectable ("steve", 1200, 170, 0.5, 0.7)

    
    // TODO 4 - Create Cannons
    createCannon ("top", 500, 900)
createCannon ("bottom", 850, 900)
createCannon ("top", 1400, 1500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
