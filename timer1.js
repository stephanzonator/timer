// node timer1.js 10 3 5 15 9     //syntax
// process.stdout.write('\x07');
const timer = () => {
  let processArray = process.argv.splice(2, process.argv.length);
  for (let i = 0; i < processArray.length; i++) {
    if (Number.isInteger(parseInt(processArray[i])) && parseInt(processArray[i]) > 0)

      setTimeout(() => {
        process.stdout.write("BEEP");  
      }, 1000 * parseInt(processArray[i])) // <= 1s delay to make it noticeable. Can dial it down later.  
      
  }
  console.log();
}

timer();