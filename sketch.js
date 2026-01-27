let song;

function preload() {
    // Load the sound file
    song = loadSound('dreadnought.mp3');
}

function setup() {
    createCanvas(600, 400);


}

function draw() {
    background(0);

    noFill();
    beginShape();
    stroke(255);
    for (let i = 0; i < waveform.length; i++) {
        // Map waveform data to canvas coordinates
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        vertex(x, y);
    }
    endShape();
}

function mousePressed() {
    song.play();
}