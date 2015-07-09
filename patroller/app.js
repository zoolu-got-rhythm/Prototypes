
// a cube that patrol's the circumfrunce of whatever it's relative too.

// returns the height dimension value of the window
var y = this.innerHeight;
// returns the width dimension value of the window
var x = this.innerWidth;

// create div node element.
var box1 = document.createElement("div");
var box2 = document.createElement("div");
// add a class list, so the node element can be styled.
box1.classList.add("box1");

var cube = {
  height: y / 10,
  width: x / 10,
  calcArea: function(){
    var area = this.height + this.width;
    return area;
  }
}






// update dimensions on window scaling. function expression?
window.onresize = function(){
    y = this.innerHeight;
    x = this.innerWidth;

// iife refering too the cube object.
(function(){
  this.height = y / 10;
  this.width = x / 10;
}).call(cube);

    console.log(y + " " + x);
    console.log("updated dimensions");


    patrol();

}






var i = 0;
var p = 0;

// bind this function to re-use? get some parameters in and write in functional programming.
function patrol(parent, child){

i++;
p++;



parent.appendChild(child);
child.style.height = cube.calcArea();
child.style.width = cube.calcArea();
child.style.background = "#aaa";
child.style.position = "absolute";
child.innerHTML = "box1";



if( i <= x - cube.calcArea()){ // left to rigth across x axis

  child.style.left = p + "px";


}else if(i <= 1000 ){ // top-right to bottom-right corner
  if (i === x + 1 - cube.calcArea()) p = 0;
//  p = 0;
console.log(x + x - cube.calcArea());

  child.style.top = p +  "px";

}else if(i <= 2000){

  child.style.right = i + "px";
}else{

  child.style.bottom = i + "px";
}



}





// calls
// setInterval built in function call back, passes 1st class func as arguments

var move = setInterval(
  function (){
    patrol(document.body, box1 )
  }, 2);


  var move2 = setInterval(
    function (){
      patrol(box1, box2 )
    }, 2);

/*
    var move3 = setInterval(
      function (){
        patrol()
      }, 2);

      */
