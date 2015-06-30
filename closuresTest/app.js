function deeper(name){
 console.log("hello " + name);
}

function greet(name){ // the name var stay's in the memory as a closure even
// when the function is return'd and is popped off the execution stack.




     return function(name2){
          (function(){
             function deeper(){
                console.log("hello " + name); //climbs up to outer environments untill it finds a var called name.
            }
            deeper();
          }(name2));

    };



}

//greet("chris"); // returns the function, then we can invoke straight after if we want.

var king = greet("chris"); // expression returns a value.

king(); //invoke the return'd function.
deeper({name: "bob"}); //this global deeper() is different to the one in the iife, it's deep within another execution context.
