Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});

let hexCircles = [];

Hooks.on("canvasReady", function() {
    let canvas = game.scenes.viewed;
    let grid = canvas.data.grid;

    // Determine how many hex circles we can fit on the canvas
    let hexesX = Math.floor(canvas.data.width / grid);
    let hexesY = Math.floor(canvas.data.height / grid);

    // Determine size of hexes
    let hexWidth = canvas.data.width / hexesX;
    let hexHeight = canvas.data.height / hexesY;


    for(let posX = 0; posX < canvas.data.width; posX += grid) {
        for(let posY = 0; posY < canvas.data.height; posY += grid) {
            // Get the centre of the current hex
            let centreX = posX + (grid / 2);
            let centreY = posY + (grid / 2);

            // Create a circle
            let circle = new PIXI.Graphics();
            circle.beginFill(0xFF0000, 1); // Red color
            circle.drawCircle(centreX, centreY, grid / 2);
            circle.endFill();

            // Store the circle, its position, and a unique code
            hexCircles.push({
                circle: circle,
                x: centreX,
                y: centreY,
                code: `hex-${hexCircles.length}`
            });

            // Add the circle to the canvas
            canvas.addChild(circle);
        }
    }

    // Remove the circles after 10 seconds
    setTimeout(function() {
        for(let i = 0; i < hexCircles.length; ++i) {
            canvas.removeChild(hexCircles[i].circle);
        }
        // Clean up the array
        hexCircles = [];
    }, 10000);
});