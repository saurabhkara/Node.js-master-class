function greetings(hours) {
  let command = "";
  if (hours < 4 || hours > 19) {
    command = "Night";
  } else if (hours < 12) {
    command = "Morning";
  } else if (hours > 12 && hours <= 16) {
    command = "Afternoon";
  } else {
    command = "Evening";
  }
  return `Good ${command}!`;
}

//Common JS
// module.exports = greetings;

//ES6
export default greetings;
// export {greetings}
