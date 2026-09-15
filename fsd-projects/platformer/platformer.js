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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    
    //toggleGrid();


    // TODO 2 - Create Platforms

      createPlatform(400,620,250,180,"black");
      createPlatform(250,500,120,25,"black");
      createPlatform(520,380,80,25,"black");
      createPlatform(700,300,10,100,"black");
      createPlatform(700,300,150,10,"black");
      createPlatform(850,200,10,110,"black");
      createPlatform(850,200,150,10,"black");
      createPlatform(1200,200,40,30,"black");
      createPlatform(800,500,40,30,"black");

    // TODO 3 - Create Collectables

      createCollectable("diamond", 800, 450);
      createCollectable("diamond", 1200, 150);
      createCollectable("diamond", 850, 150);
    
    // TODO 4 - Create Cannons

      createCannon("bottom", 700, 1000);
      createCannon("top", 700, 1250);
      createCannon("right", 150, 1500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
