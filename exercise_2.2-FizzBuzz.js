//Fizzbuzz print all numbers from 1 to 100, but for numbers divisible by 3
//print Fizz, numbers divisible by 5 print Buzz and for numbers divisible by both
//Print FizzBuzz

function FizzBuzz(limit){
  var result = "";
  for(var i = 1; i < limit; i++){
    if(i % 5 == 0 && i % 3 == 0){
      result += "FizzBuzz ";
    }else if(i % 3 == 0){
      result += "Fizz ";
    }else if(i % 5 == 0){
      result += "Buzz ";
    }else{
      result +=i + " ";
    }

  }
  console.log(result);
}

FizzBuzz(100);
