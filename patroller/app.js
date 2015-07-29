
// a cube that patrol's the circumfrunce of whatever it's relative too.

// returns the height dimension value of the window
var y = this.innerHeight;
// returns the width dimension value of the window
var x = this.innerWidth;



// add a class list, so the node element can be styled.
// box1.classList.add("box1");

var cube = {
  height: y / 10,
  width: x / 10
}



function boxArea(divide){
  var area = this.height / divide + this.width / divide;
  return area;
}


// currying
// anything multiply'd by 1 is the same, a way around undefined stopping the execution phase.
var
    getBox1Size = boxArea.bind(cube, 1),
    getBox2Size = boxArea.bind(cube, 2),
    getBox3Size = boxArea.bind(cube, 3),
    getBox4Size = boxArea.bind(cube, 4);


// create div node elements.
var
    box1 = document.createElement("div"),
    box2 = document.createElement("div"),
    box3 = document.createElement("div"),
    box4 = document.createElement("div");



// update dimensions on window scaling event. function expression?
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


    // patrol();

}


// namespaces for incrementors.
var incro = {
  one: 0,
  two: 0,
  three: 0,
  four: 0
}

// position
var p = {
  one: 0,
  two: 0,
  three: 0,
  four: 0
}

//console.log(incro.one);

// write namespaces under a object for this aswell.


// bind this function to re-use? get some parameters in and write in functional programming.
function patrol(i, parent, child, area, parentArea){



incro[i] ++; // increment
p[i]++; // position


parent.appendChild(child);

child.style.height = area;
child.style.width = area;
// child.style.background = "#aaa";
child.style.border = "1px solid black";
child.style.position = "absolute";

// child.innerHTML = parentArea - area || x + y;
// child.innerHTML = parent.innerWidth;

// run if respective argument is lower than x  axis width
if( incro[i] > parentArea * 3 - area * 3 ){ // note the assosciativity. left-right or right to left.
    if ( incro[i] < parentArea * 3 - area * 3 + 2 ) p[i] = 0; incro[i] = 0;
 console.log("function " + i + "has made it to the end");
    child.style.top = - p[i] + "px";

}else if( incro[i] > parentArea * 2 - area * 2 ){
 if ( incro[i] < parentArea * 2 - area * 2 + 2) p[i] = 0; console.log("hittttttttttttttt");

    child.style.left = - p[i] + area + "px";

}else if( incro[i] > parentArea * 1 - area  ){ // top-right to bottom-right corner
    if ( incro[i] < parentArea * 1 - area + 2   ) p[i] = 0;

     child.style.top = p[i] + "px";

}else{
  //  if ( incro[i] <= parentArea * 3 + area + 1 ) p[i] = 0; incro[i] = 0;

    child.style.left = p[i] + "px";

}


// console.log(p);
} // end of function statement





// calls
// setInterval built in function call back, passes 1st class func as arguments

// move returns a value as it as a function expression? value is 1 for some reason.

var move = setInterval(
  function (){
    patrol( "one", document.body, box1, getBox1Size(), x )
  }, 1);


  var move2 = setInterval(
    function (){
      patrol( "two", box1, box2, getBox2Size(), getBox1Size() )
    }, 20);


   var move3 = setInterval(
      function (){
        patrol( "three", box2, box3, getBox3Size(), getBox2Size() )
      }, 50);


      var move4 = setInterval(
         function (){
           patrol("four", box3, box4, getBox4Size(), getBox3Size() )
         }, 50);
