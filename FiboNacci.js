var sum = 0,
  first = 0,
  second = 1,
  evenSum = 0;
while((evenSum+first) <= 4000000) {
  sum = first + second;
  first = second;
  second = sum;
  if(first % 2 == 0) {
    evenSum = evenSum + first;
  }
}
console.log(evenSum);
