function masterMind() { // <= Constructor
 
    /*
    Creating buttons
    > 1st param : Accepts declared variables, e.g. <var knifeIcon>
    > 2nd param : Accepts String: source path or url for image, refrain from using an initialized variables
    > 3rd param : (OPTIONAL) Accepts String: alternate text, if the image does not load the alt text will display instead. Can be left as a blank string
    > 4th param : Accepts Integer: Width  
    > 5th param : Accepts Integer: Height 
    > 6th param : Accepts Integer: X-position
    > 7th param : Accepts Integer: Y-position 
    */
    this.summonTheButton = function(myVar, src, alt, bgW, bgH, bgX, bgY) {
        myVar = createImg(src, alt);
        myVar.size(bgW, bgH);
        myVar.position(bgX, bgY);
    }
}