

function test1(x, y, z){

   //oddly refers to global object, even know a function is an object.
   console.log(this);
   x  =  x || "has no argument yet";
   console.log(x + y + z);

   // appends to the window object in global scope.
   this.appendGlobal = "chris";
   console.log(appendGlobal);

   }




var person1 = {
  name: "chris",
  surname: "morris",
  details: function(){
    return this.name + this.surname;
  }

}



// call the code of the function object.
test1(
  {name: "christopher"},
   function(){ } // first class function
);


console.log(appendGlobal);
