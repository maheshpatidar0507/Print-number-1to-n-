// Question=>
// print number 1to n
// if number is divisible by 3 print "fizz" instead of number
// if number is divisible by 5 print "Buzz"instead of number
// if number is divisible by both 3 &5 print "fizzBuzz"instead of number

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
      continue;
    }

    if (i % 3 === 0) {
      console.log("Fizz");
      continue;
    }

    if (i % 5 === 0) {
      console.log("Buzz");
      continue;
    }

    console.log(i);
  }
}
fizzBuzz(200);

//0000000000000000000000000000000 Alternate 000000000000000000000000000000000000000
// function fizzBuzzV2(n) {
//   for (let i = 1; i <= n; i++) {
//     switch (i) {
//       case i % 15 === 0:
//         console.log("FizzBuzz");
//         break;
//       case i % 3 === 0:
//         console.log("Fizz");
//         break;
//       case i % 5 === 0:
//         console.log("Buzz");
//         break;
//       default:
//         console.log(i);
//     }
//   }
// }
