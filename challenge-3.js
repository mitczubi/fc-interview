function findCommonDigit(array) {

  common_digits = [];

  digits = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  };

  const nums = Object.keys(digits);

  nums.forEach(num => {

    var num_count_per_item = [];
    var common_count;

    array.forEach(item => {
      var item_array = item.toString().split("");

      num_count_per_item.push(item_array.filter(x => x === num).length);

      if (item_array.includes(num)) {
        digits[num].push(true);
      }
      else {
        digits[num].push(false);
      }
    });

    if ( num_count_per_item.every(value => value > 0) ) {
      common_count = Math.min.apply(null, num_count_per_item);
    }

    if ( digits[num].every(value => value === true) ) {
      for ( let i = 0; i < common_count; i++) {
        common_digits.push(num);
      }
    }
  });

  return common_digits;
}

const test_array = [11232, 1712, 2311]

console.log(findCommonDigit(test_array));
