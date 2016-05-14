var express = require('express');
var app = express();
// port is not one of the application settings properties
// nonetheless, setting port to one of the values in the
// disjunction allows us to refer to that value using
// app.get('port') from here on
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  // this callback function gets executed when listen is succesful
  console.log('Node app is running on port', app.get('port'));
});
app.get('/', function(request, response) {
  // this callback function gets executed when users browse
  // to the root url
  response.send('this is the website for miamifruit');
});


