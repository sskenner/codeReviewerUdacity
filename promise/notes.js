//// Syntax
// wrapping
// try catch wrapper around code that will finish at an unpredictable time

// promise is a constructor
new Promise(function(resolve[, reject]) {
// var promise = new Promise(function(resolve[, reject]) {
  var value = doSomething();
  if(thingWorked) {
    resolve(value);
  } else if (somethingWentWrong) {
    reject();
  }
}).then(function(value) {
  // success!
  return nextThing(value);
}).catch(rejectFuntion);


// wrapping an image tag loader in a promise, bc want to do some work after the image loads on the page
new Promise(function(resolve, reject) {
  var img = document.createElement('img');
  img.src = 'image.jpg';
  img.onload = resolve;
  img.onerror = reject;
  document.body.appendChild(img);
})
.then(finishLoading)
.catch(showAlternateImage);

// example
new Promise(function(resolve) {
  console.log('first');
  resolve();
  console.log('second');
}).then(function() {
  console.log('third');
});

//// Async Scenarios Quiz
// when should consider using promises
// [x]
var data = get('data.json');
data.onload = function() {
  analyze(this.responseText);
};

// []
hugeArrayOfImages.forEach(funcion(i) {
  makeSepia(i);
});

// []
data.forEach(function(d) {
  var div = createDiv(d);
  body.appendChild(div)
});

// [x]
var woker = new Worker('worker.js');
worker.postMessage(data);
worker.onmessage = doSomething;

// //Promise Timeline
new Promise(function(resolve, reject) {   // promise constructor
  resolve('hi');  // works
  resolve('bye'); // can't happen a second time
});

// Promise created - On main thread and potentially blocking - Promise settled

// //course map
// Wrapping- [Promise]
// Thening- [Promise] value -> Action
// Catching- [Promise] value -> Recovery
// Chaining- [Promise] value -> [Promise] value ->

// http://www.html5rocks.com/en/tutorials/es6/promises/
// Fulfilled(Resolved): It woked :)
// Rejected: It didn't work :(
// Pending: Still waiting...
// Settled: Something happend!


//// callbacks v thens
function loadImage(src, parent, callback) {
  var img = document.createElement('img');
  img.src = src;
  img.onload = callback;
  parent.appendChild(img);
};

// how to handle errors?
// node makes errorfirst callbacks mandatory.. but still hv to define and implement an error handling strategy
// how to create a sequence of work?

// pyramid of doom
loadImage('above-the-fold.jpg', imgContainer, function() {
  loadImage('just-below-the-fold.jpg', imgContainer2, function() {
    loadImage('farther-down.jpg', imgContainer3, function() {
      loadImage('this-is-getting-ridiculous.jpg', imgContainer4, function() {
        loadImage('abstract-art.jpg', imgContainer5, function() {
          loadImage('egyptian-pyramids.jpg', imgContainer6, function() {
            loadImage('last-one.jpg', imgContainer7);
          })
        })
      })
    })
  })
})

// same as above .. 
var sequence = get('example.json')
.then(doSomething)
.then(doSomethingElse);


//// callbacks vs promises
// synchronous code
var planetName = 'Kepler22b';
console.log(planetName); // Kepler22b

// asynchronous code
var file1 = get('file1.json');
var file2 = get('file2.json');
console.log(file1); // undefined
console.log(file2); // undefined


////// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-async
// whats all the fuss about
var img1 = document.querySelector('.img-1');

img1.addEventListener('load', function() {
  // woo yey image loaded
});

img1.addEventListener('error', function() {
  // argh everything's broken
});

// workaround using the "complete" property of images
var img1 = document.querySelector('.img-1');

function loaded() {
  // woo yey image loaded
}

if (imgl.complete) {
  loaded();
}
else {
  imgl.addEventListener('load', loaded);
}

img1.addEventListener('error', function)


