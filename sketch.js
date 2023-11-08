var bgMainScreen;
var iconKnife;
var iconCake;
var iconCart;

function preload() {
  bgMainScreen = loadImage("media/menuScreen_bg.png");
  loadImage("media/cut_button.png");
  loadImage("media/Decorate_button.png");
  loadImage("media/Shop_button.png");
}

function setup() {
  // windowWidth & windowHeight returns the interior width of the window in pixels (width/height of the window's viewport/screen size)
  createCanvas(windowWidth, windowHeight);

  // Call the constructor for you to enable to use the other functions/methods inside
  masterMind();
  
}

function draw() {
  background('grey');
  summonTheButton(iconKnife, "media/cut_button.png", 'knife', 100, 100, (width/2) - 200, height/2);
  summonTheButton(iconCake, "media/Decorate_button.png", 'cake', 100, 100, (width/2), height/2);
  summonTheButton(iconCart, "media/Shop_button.png", 'cart', 100, 100, (width/2) + 200, height/2);
}
