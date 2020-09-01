export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.
  const str = number.toFixed(2);

  try {
    if (option.currency === true) {
      // return '$ '.concat(str);
      return `$ ${str}`;
    }
  } catch (error) {
    return str;
  }
}
