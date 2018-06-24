var min_value = 1,
  max_value = 101,
  i = 0,
  sum = 0;

var square_sum = (min_value, max_value) => {
  sum = 0;
  for(i = min_value; i < max_value; i++) {
    sum = sum + (i * i);
  }
  return sum;
};
var sum_square = (min_value, max_value) => {
  sum = 0;
  for(i = min_value; i < max_value; i++) {
    sum = sum + i;
  }
  return sum * sum;
};
console.log(sum_square(min_value, max_value) - square_sum(min_value, max_value));
