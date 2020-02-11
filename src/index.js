// eslint-disable-next-line no-unused-vars
function padString(string, number, symbol, flag = true) {
  let newString = '';

  function addSymbols() {
    if (string.length < number) {
      for (let i = 0; i < number - string.length; i++) {
        newString += symbol;
      }
    }
  }

  if (flag) {
    newString = string;
    addSymbols();
  } else {
    addSymbols();
    newString += string;
  }

  return newString;
}
