// hoisting.
init()();

function init(name){
   var introduce = "hello my name is ";

   return function(){
      console.log(introduce + name);
   }


}

// call the return'd function in a number of ways ---------------------------

init()();

var closure = init("chris");
closure();
// closure still calls even we pass an argument without a parameter.
closure("x");

// 1 argument? use the length property of the function object.
console.log(init.length);

//--------------------------------------------------------------------------



//format'd closure/callback code.

function greet( x ){
   var introduce = "hello my name is ";

   // returns and assigns a value that is true, undefined is false.
   x = x || "no function object argument passed";
   console.log( x );

   if( typeof x === "function" ) x("callback");

}

greet(
  function(name){
    console.log(name);
  }
    );
