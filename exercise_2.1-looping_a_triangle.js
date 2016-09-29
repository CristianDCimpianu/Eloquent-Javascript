//write a loop that makes 7 calls to console.log to output a # triangle

function triangle(length){
  var result = "";
  for(var i=0; i<length;i++){
    result += "#";
  }
  console.log(result);
}

triangle(7);
