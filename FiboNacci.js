var sum = 0,
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