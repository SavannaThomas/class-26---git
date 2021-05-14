class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height); //super is a keyword and used to go to parent class
    this.image = loadImage("sprites/wood1.png");
  }

};
