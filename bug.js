function foo(a,b){return a+b;}console.log(foo(10, '20')); // Output: 1020
This is unexpected because we expect the output to be 30. The issue is that JavaScript does not throw an error when you try to add a number and a string. Instead, it performs string concatenation.