
// experimenting with functional programming.

var
  x = window.innerWidth,
  y = window.innerHeight;

// div nodes (boxes)
var
  box1 = document.createElement("div"),
  box2 = document.createElement("div"),
  box3 = document.createElement("div");

function getBoxArea(minus){
  var area = 80 - minus;
  var roundOff = Math.round(area);
  console.log( "the rounded area of " + name + "is " + roundOff );
  return roundOff;

}


// currying
var
  getBox1Size = getBoxArea.bind(this, 10),
  getBox2Size = getBoxArea.bind(this, 20),
  getBox3Size = getBoxArea.bind(this, 26);



// note: all boxes are currently sharing the same incrementor..
var i = 0;

// this is kinda like my map? mapping and passing data.
function doWork( parentArea, childArea, parent, child ){

i++;

  // conditional logic/algorithm
  if( i <= parentArea - childArea ){
      domStyles( parentArea, childArea, parent, child, i, "right" );
  }  else if(i <= parentArea * 2 - childArea * 2){
       domStyles( parentArea, childArea, parent, child, i, "down" );
  }  else if(i <= parentArea * 3 - childArea * 3){
        domStyles( parentArea, childArea, parent, child, i, "left" );
  } else{
         domStyles( parentArea, childArea, parent, child, i );
         if( i === parentArea * 4 - childArea * 4) i = 0; console.log("reset");
  }


}



// callbacks
  var move1 = setInterval(
    function(){
      doWork(getBox1Size(), getBox2Size(),box1, box2 )
    }, i);

   var move2 = setInterval(
      function(){
        doWork(getBox2Size(), getBox3Size(), box2, box3 )
      }, i);
























































  // abstraced away dom manipulation.

  function domStyles( parentArea, childArea, parent, child, incro, direction ){

    // parent styles
    parent.style.height = parentArea;
    parent.style.width = parentArea;
    parent.style.border = "1px solid black";

    // child styles
    child.style.height = childArea;
    child.style.width = childArea;
    child.style.border = "1px solid black";

    parent.style.position = "relative";
    child.style.position = "absolute";



  // loop this to gradually remove all nodes in the document.
  //  document.removeChild(document.firstChild);

    document.getElementById("container").appendChild(parent);
    parent.appendChild(child);



    // positional direction of child
    if( direction === "right" ){
         child.style.left = incro + "px";
    }  else if( direction === "down" ){
         child.style.top = incro - parentArea + childArea + "px";
    }  else if( direction === "left" ){
         child.style.left = (- incro) + parentArea * 3 - childArea * 3 + "px";
         console.log("executed");
    } else{
        child.style.top = (- incro) + parentArea * 4 - childArea * 4 + "px";
    }



    console.log(arguments);
    console.log("doWork finished");



  }
