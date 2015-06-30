
// coils object constructor

 // an object to store all the measurements for the elecrticity crackle.

function Coils(width, height){
  this.width = width;
  this.height = height;
  var that = this;
  this.q1 = function(){
    // a quarter
    return this.width / 4 ;
  };
  this.q2 = function(){
    // a half
    return this.width / 2 ;
  };
  this.q3 = function(){
    // three quaters
    return this.width / 4 * 3 ;
  };
  this.q4 = function(){
    // whole width
    return this.width ;
  };

  this.heightHalf = this.height / 2;
//  console.log(this);
}


var lineP = new Coils(window.innerWidth, window.innerHeight);



// re-sets the electricity when the window is resized.
window.onresize = function(){

  lineP = new Coils(window.innerWidth, window.innerHeight);
  console.log(lineP);
  //lightning();
};




// to do's: make responsive.

// lightning/static co-ordinates.

var sequence = setInterval(
  function(){
     lightning()
     },
   3);

function lightning(){

  var co1 = [];
  var co2 = [];
  var co3 = [];
  var co4 = [];

  for(var i=0; i<=5; i++){
  var r = Math.floor(Math.random()*35+30);

  co1.push(r);
  //each time through the loop throws/pushes 6 random numbers to array 'co'.
  }

  for(var i=0; i<=5; i++){
  var r = Math.floor(Math.random()*35+30);

  co2.push(r);
  //each time through the loop throws/pushes 6 random numbers to array 'co'.
  }

  for(var i=0; i<=5; i++){
  var r = Math.floor(Math.random()*35+30);

  co3.push(r);
  //each time through the loop throws/pushes 6 random numbers to array 'co'.
  }

  for(var i=0; i<=5; i++){
  var r = Math.floor(Math.random()*35+30);

  co4.push(r);
  //each time through the loop throws/pushes 6 random numbers to array 'co'.
  }

     var canvas = document.getElementById('brainWave');
        var context = canvas.getContext('2d');
        canvas.height = lineP.height;
        canvas.width = lineP.width;
        context.beginPath();
        context.moveTo(0 + 90, lineP.heightHalf);
  	    context.bezierCurveTo(lineP.q1() / 3    , lineP.heightHalf + co1[1], lineP.q1() / 3 * 2 , lineP.heightHalf + co1[3], lineP.q1() / 3 * 3, lineP.heightHalf + co1[5]);
  	  //  context.lineTo(lineP.width / 4 ,lineP.heightHalf); //this creates a line from the moveTo method.

  	  //  context.moveTo(lineP.width / 4 ,lineP.heightHalf);
  	    context.bezierCurveTo(lineP.q2() / 3 , lineP.heightHalf + co2[1], lineP.q2() / 3 * 2  , lineP.heightHalf + co2[3], lineP.q2() / 3 * 3 , lineP.heightHalf + co2[5]);
  	  //  context.lineTo(lineP.width / 3 ,lineP.heightHalf); //this creates a line from the moveTo method.

  	  //  context.moveTo(lineP.width / 3 ,lineP.heightHalf);
  	    context.bezierCurveTo(lineP.q3()  , lineP.heightHalf + co3[1], lineP.q3() , lineP.heightHalf + co3[3], lineP.q3()  , lineP.heightHalf + co3[5]);
  	  //  context.lineTo(lineP.width / 2 ,lineP.heightHalf); //this creates a line from the moveTo method.

  	  //  context.moveTo(lineP.width / 2 ,lineP.heightHalf);
  	    context.bezierCurveTo(lineP.q4()  , lineP.heightHalf + co4[1], lineP.q4()  , lineP.heightHalf +  co4[3], lineP.q4()  , lineP.heightHalf + co4[5]);

        // this creates a line from the moveTo method.
        context.lineTo(lineP.width - 90 , lineP.heightHalf );



        context.lineWidth = 2;

        // line color
        context.strokeStyle = '#D65CFF';

        //exicute the stroke based on the instructions we've provided.
  	  context.stroke();












}



















//remember to visualize functions as objects.


function drawCoils(){
  //canvas

}









function update(x, y, z){

console.log(this);
}





//call all the stuff I put into memory.

lightning();
drawCoils();
update();

// tests

//console.log(canvas);
console.log(lineP.q1());
