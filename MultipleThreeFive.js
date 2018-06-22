<<<<<<< HEAD
var i = 1,
  sum = 0,
  max = 1000;

for(i = 1; i < max; i++) {
  if(i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);
=======
var i,sum = 0;
for(i=1;i<1000;i++){
  if(i%3 == 0 || i%5 == 0){
    sum = sum + i;
  }
}
console.log(sum);
>>>>>>> 7da2ef2194e9efa9a32a926d5e8d1e62efd12de7
