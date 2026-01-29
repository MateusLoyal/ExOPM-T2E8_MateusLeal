let song;
let amp;
let img_x, img_y;

function preload() {
    // Load the sound file
    song = loadSound('dreadnought.mp3');
    flag = loadImage("UF logo (1).jpg")
}

function setup() {
    createCanvas(800, 800);

    img_x = width / 2
    img_y = height / 2
    amp = new p5.Amplitude()
}

function draw() {
    background(0);
    let level = amp.getLevel(); // recxebo um valor entre 0. e 1. -- amplitude do meu som


    // mapeio o valor do level
    level = map(level, 0, 1, 100, 200)
    image(flag, img_x, img_y, level, level)



    // noFill();
    // beginShape();
    // stroke(255);
    // for (let i = 0; i < waveform.length; i++) {
    //     // Map waveform data to canvas coordinates
    //     let x = map(i, 0, waveform.length, 0, width);
    //     let y = map(waveform[i], -1, 1, 0, height);
    //     vertex(x, y);
    // }
    // endShape();
}

function mousePressed() {
    song.play();
}