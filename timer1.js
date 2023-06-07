process.stdout.write('\x07');
const args = process.argv.slice(2);
// console.log(args);
// let delay = [3, 5 , 9 , 10 ,15]
for (const time of args){
  if(time > 0 ){
    setTimeout(() =>{
      process.stdout.write('\x07');
    }, time*1000)
  }
};

// setTimeout(()=> {
//   console.log("")
// }, 50)
