import Ember from 'ember';

// http://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
var stringToColour = function(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

export function colorTag([value, ...rest]) {
  const colour = stringToColour(value);
  return Ember.String.htmlSafe('color: #fff; margin-top: 3px; padding: 2px; border: 1px solid ' + colour + ';border-radius: 2px;background: ' + colour);
}

export default Ember.Helper.helper(colorTag);