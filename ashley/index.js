function returnNums(i=0){
  if(i > 10){
    return
  } else {
    console.log(i);
    return returnNums(i+1)
  }
};
console.log('hey!');
