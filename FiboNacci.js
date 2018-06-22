var sum = 0,
<<<<<<< HEAD
  first_num = 0,
  second_num = 1,
  even_num_sum = 0,
  max_sum = 4000000;

while((even_num_sum + first_num) <= max_sum) {
  sum = first_num + second_num;
  first_num = second_num;
  second_num = sum;
  if(first_num % 2 == 0) {
    even_num_sum += first_num;
  }
}
console.log(even_num_sum);
=======
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
>>>>>>> 7da2ef2194e9efa9a32a926d5e8d1e62efd12de7
