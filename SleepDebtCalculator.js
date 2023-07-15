function getSleepHours(day) { //You can enter how many hours did you slept
  if (day === 'Monday') {
    return 6; // For the Monday night
  } else if (day === 'Tuesday') {
    return 9; // For the Tuesday night
  } else if (day === 'Wednesday') {
    return 8.5; // Wednesday
  } else if (day === 'Thursday') {
    return 5; // etc.
  } else if (day === 'Friday') {
    return 10;
  } else if (day === 'Saturday') {
    return 7;
  } else if (day === 'Sunday') {
    return 10;
  } else {
    return 'error getSleepHours()' // If error will complete
  }
}

function getActualSleepHours () { // Count total sum of sleep hours
  return getSleepHours('Monday')
  + getSleepHours('Tuesday')
  + getSleepHours('Wednesday')
  + getSleepHours('Thursday')
  + getSleepHours('Friday')
  + getSleepHours('Saturday')
  + getSleepHours('Sunday'); 
}

function getIdealSleepHours () { // Perfect amount of sleep hours per every night at the week
  let idealHours = 8.5
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (idealSleepHours === actualSleepHours) {
    return 'Wow! Good job! You have perfect balance! (' + idealSleepHours() + ' hours)';
  } else if (idealSleepHours > actualSleepHours) {
    return idealSleepHours - actualSleepHours + ' hours you need to sleep more. Don\'t forget to take care of yourself.';
  } else if (idealSleepHours < actualSleepHours) {
    return actualSleepHours - idealSleepHours + '  hours of sleep are superfluous. Don\'t forget to exercise!';
  } else {
    return 'Error calculateSleepDebt()';
  };
}

console.log(calculateSleepDebt()); //Run all helper funtions;
