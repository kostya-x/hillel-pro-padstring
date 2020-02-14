// eslint-disable-next-line no-unused-vars
function padString(string, number, symbol, flag = true) {
  let newString = '';
  let symbols = '';

  function addSymbols() {
    if (string.length < number) {
      for (let i = 0; i < number - string.length; i++) {
        symbols += symbol;
      }
    }
  }

  addSymbols();

  flag ? (newString = string + symbols) : (newString = symbols + string);

  return newString;
}
