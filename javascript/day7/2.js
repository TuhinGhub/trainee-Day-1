//Give an example of using multiple callback functions in a single function in JavaScript


function1 = (callback1, callback2, callback3) => {
    setTimeout(() => {
      console.log("function 1 timed out!");
      callback1(callback2, callback3);
    }, 1500);
  }
  
  function2 = (callback1, callback2) => {
    setTimeout(() => {
      console.log("function 2 timed out!");
      callback1(callback2);
    }, 1500);
  }
  
  function3 = (callback1) => {
    setTimeout(() => {
      console.log("function 3 timed out!")
      callback1()
    }, 1500);
  }
  
  function4 = () => {
    setTimeout(() => {
      console.log("function 4 timed out!")
    }, 1500);
  }
  
  function1(function2, function3, function4);