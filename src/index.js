module.exports = function toReadable (number) {
  let numberToString = String(number);
  function fromZeroToNineToWord(numberToString) {
    if(numberToString.length == 1)
    return (numberToString == 0? 'zero':
            numberToString == 1? 'one': 
            numberToString == 2? 'two':
            numberToString == 3? 'three':
            numberToString == 4? 'four':
            numberToString == 5? 'five':
            numberToString == 6? 'six':
            numberToString == 7? 'seven':
            numberToString == 8? 'eight':
            numberToString == 9? 'nine': fromTenToNinetyNineToWord(numberToString)); 
  }
  function fromTenToNinetyNineToWord(numberToString) {
    if(numberToString.length == 2)
    return (numberToString == 10? 'ten':
            numberToString == 11? 'eleven': 
            numberToString == 12? 'twelve':
            numberToString == 13? 'thirteen':
            numberToString == 14? 'fourteen':
            numberToString == 15? 'fifteen':
            numberToString == 16? 'sixteen':
            numberToString == 17? 'seventeen':
            numberToString == 18? 'eighteen':
            numberToString == 19? 'nineteen':
            numberToString == 20? 'twenty':     
            numberToString[0] == 2? 'twenty ' + fromZeroToNineToWord(numberToString[1]):
            numberToString == 30? 'thirty': 
            numberToString[0] == 3? 'thirty '+ fromZeroToNineToWord(numberToString[1]): 
            numberToString == 40? 'forty': 
            numberToString[0] == 4? 'forty '+ fromZeroToNineToWord(numberToString[1]):
            numberToString == 50? 'fifty': 
            numberToString[0] == 5? 'fifty '+ fromZeroToNineToWord(numberToString[1]):
            numberToString == 60? 'sixty': 
            numberToString[0] == 6? 'sixty '+ fromZeroToNineToWord(numberToString[1]):
            numberToString == 70? 'seventy': 
            numberToString[0] == 7? 'seventy '+ fromZeroToNineToWord(numberToString[1]):
            numberToString == 80? 'eighty': 
            numberToString[0] == 8? 'eighty '+ fromZeroToNineToWord(numberToString[1]):
            numberToString == 90? 'ninety': 
            numberToString[0] == 9? 'ninety '+ fromZeroToNineToWord(numberToString[1]): fromOneHundredToOneThousandToWord(numberToString)); 
  }
  function fromOneHundredToOneThousandToWord(numberToString) {
    if(numberToString.length == 3)
    return (numberToString == 100? 'one hundred':
            numberToString[0] == 1 && numberToString[1] == 0? 'one hundred ' + fromZeroToNineToWord(numberToString[2]):
            numberToString[0] == 1 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? 'one hundred ' + fromTenToNinetyNineToWord(numberToString[1] + numberToString[2]):
            numberToString == 200? 'two hundred':
            numberToString[0] == 2 && numberToString[1] == 0? 'two hundred ' + fromZeroToNineToWord(numberToString[2]):
            numberToString[0] == 2 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? 'two hundred ' + fromTenToNinetyNineToWord(numberToString[1] + numberToString[2]):
            numberToString == 300? 'three hundred':
            numberToString[0] == 3 && numberToString[1] == 0? 'three hundred ' + fromZeroToNineToWord(numberToString[2]):
            numberToString[0] == 3 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? 'three hundred ' + fromTenToNinetyNineToWord(numberToString[1] + numberToString[2]):
            numberToString == 400? 'four hundred':
            numberToString[0] == 4 && numberToString[1] == 0? 'four hundred ' + fromZeroToNineToWord(numberToString[2]):
            numberToString[0] == 4 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? 'four hundred ' + fromTenToNinetyNineToWord(numberToString[1] + numberToString[2]):
            numberToString == 500? 'five hundred':
            numberToString[0] == 5 && numberToString[1] == 0? 'five hundred ' + fromZeroToNineToWord(numberToString[2]):
            numberToString[0] == 5 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? 'five hundred ' + fromTenToNinetyNineToWord(numberToString[1] + numberToString[2]):
            numberToString == 600? 'six hundred':
            numberToString[0] == 6 && numberToString[1] == 0? 'six hundred ' + fromZeroToNineToWord(numberToString[2]):
            numberToString[0] == 6 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? 'six hundred ' + fromTenToNinetyNineToWord(numberToString[1] + numberToString[2]):
            numberToString == 700? 'seven hundred':
            numberToString[0] == 7 && numberToString[1] == 0? 'seven hundred ' + fromZeroToNineToWord(numberToString[2]):
            numberToString[0] == 7 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? 'seven hundred ' + fromTenToNinetyNineToWord(numberToString[1] + numberToString[2]):
            numberToString == 800? 'eight hundred':
            numberToString[0] == 8 && numberToString[1] == 0? 'eight hundred ' + fromZeroToNineToWord(numberToString[2]):
            numberToString[0] == 8 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? 'eight hundred ' + fromTenToNinetyNineToWord(numberToString[1] + numberToString[2]):
            numberToString == 900? 'nine hundred':
            numberToString[0] == 9 && numberToString[1] == 0? `nine hundred ${fromZeroToNineToWord(numberToString[2])}`:
            numberToString[0] == 9 && (numberToString[1] == 1 || numberToString[1] == 2 || numberToString[1] == 3 || 
              numberToString[1] == 4 || numberToString[1] == 5 || numberToString[1] == 6 || numberToString[1] == 7 || 
              numberToString[1] == 8 || numberToString[1] == 9)? `nine hundred ${fromTenToNinetyNineToWord(numberToString[1] + numberToString[2])}`: 'undefined');
  }
  if(numberToString.length == 1)
  return fromZeroToNineToWord(numberToString);
  else if(numberToString.length == 2)
  return fromTenToNinetyNineToWord(numberToString);
  else if(numberToString.length == 3) 
  return fromOneHundredToOneThousandToWord(numberToString);
}

