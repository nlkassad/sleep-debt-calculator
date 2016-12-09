function checkValidTime(input) {
   if (input <= 24 && input >= 0) {
        return Number(input);
      } else {
        prompt('You\'re not making any sense, get some sleep');
    }
}

function getSleepHours(day) {
  var hours = prompt('How many hours of sleep did you get on ' + day + '?');
  return checkValidTime(Number(hours));
}

function getActualSleepHours() {
  var totalActualSleepHours = null;
  totalActualSleepHours += getSleepHours('monday');
  totalActualSleepHours += getSleepHours('tuesday');
  totalActualSleepHours += getSleepHours('wednesday');
  totalActualSleepHours += getSleepHours('thursday');
  totalActualSleepHours += getSleepHours('friday');
  totalActualSleepHours += getSleepHours('saturday');
  totalActualSleepHours += getSleepHours('sunday');
  return totalActualSleepHours;
}

function getIdealSleepHours() {
  var idealDayOfSleep = prompt('How many hours of sleep would you like to get each day?');
  return checkValidTime(idealDayOfSleep) * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  var timeDifference = null;
  if (actualSleepHours === idealSleepHours) {
    return 'You\'re getting your ideal sleep amount!';
  }
  if(actualSleepHours > idealSleepHours) {
     timeDifference = actualSleepHours - idealSleepHours;
    return 'Going for the bonus sleep are you? Looks like you got ' + timeDifference + ' hours more sleep than your ideal amount.';
     } else if (actualSleepHours < idealSleepHours) {
        timeDifference = idealSleepHours - actualSleepHours;
    return 'You\'re not getting enough sleep! You slept ' + timeDifference + ' hours less than your ideal amount.';

     } else {
       return 'Something went wrong, have you been manipulating time?';
     }

}

console.log(calculateSleepDebt());
