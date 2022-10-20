

module.exports.getDate =  function() {
const today = new Date;                                 // to access the methods of Date.prototype
const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
}
const day = today.toLocaleDateString('en-US', options);  // choosing language (hi-IN ja-JP) and passing in the format options

return day;
}

module.exports.getDay = function() {
  const today = new Date;
  const options = {
    weekday: 'long'
  }
  const day = today.toLocaleDateString('en-US', options);
  return day;
}
