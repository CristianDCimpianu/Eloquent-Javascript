//Exercise 2.3 Chess Board

// create an 8x8 grid that forms a graphically visual chess board made of #

function Chessboard(size){
  var result = "";

  for(var i = 0; i<size/2; i++){
    for(var j = 0; j < size/2; j++){
      result += " ";
      result += "#";
    }
    result += "\n";
    for(var j = 0; j < size/2; j++){
      result += "#";
      result += " ";
    }
    result += "\n";
  }
  console.log(result);
}

Chessboard(10);
