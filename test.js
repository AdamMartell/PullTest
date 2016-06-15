var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
  rl.question('Command: ', function (answer) {
    if (answer == 'exit'){ 
      return rl.close();
	}	  
    console.log('Got it! Your answer was: "', answer, '"');
    recursiveAsyncReadLine(); 
  });
};

recursiveAsyncReadLine();