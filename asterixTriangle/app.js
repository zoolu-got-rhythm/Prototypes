
// log a triangle into the console.


// note how i'm not atall polluting global namespace.
// once the function has ran it'll be popped off the execution stack,
// and all of it's var's will be thrown in garbage collecion,
// free'ing up memory space.

function spotLight(howLong){

  var emptyString = "";
  var asterix = "*";
  var spaces = "";

  for (var i = 0; i <= howLong; i++) {
    // use "let" in ecma6 when declaring var's inside blocked scope.
    var addspace = " ";
    spaces += addspace;
    emptyString += asterix;
    result = spaces + emptyString
    console.log(result);
  }
}

spotLight(20);
