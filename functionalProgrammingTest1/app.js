
// functional programming tests and experimentation.

// core data to work with. anthony alicea mentions it's not wise to mutate this.
var myData = [1, 2, 3];

// abstraction hides noise inside a function for example for re-usability say.
function doWork(arr, fn){
    var newArr = [];
    for (var i = 0; i < myData.length; i++) {

           // callback calls functions runs it and returns the value which get's pushed.
           newArr.push(fn(arr[i]));
    }

    return newArr;
}


// function expressions return values.
var myArr1 = doWork(myData, function(item){
    return item * 2;
});

console.log(myData);
console.log(myArr1);


// think about what i could do with the DOM and the power of functional programming.
