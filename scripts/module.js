Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});

Hooks.on("canvasReady", function() {

    // Foundry VTT API - I want to output to console the number of hexes in the current scene.
    console.log(canvas.scene.data.grid);
    console.log(canvas.scene.data.gridDistance);
    console.log(canvas.scene.data.gridType);
    console.log(canvas.scene.data.gridUnits);
    console.log(canvas.scene.data.gridSize);
    console.log(canvas.scene.data.gridOffset);
    console.log(canvas.scene.data.gridColor);
    console.log(canvas.scene.data.gridAlpha);

});