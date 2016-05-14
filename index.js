var express = require('express');
var app = express();
// port is not one of the application settings properties
// nonetheless, setting port to one of the values in the
// disjunction allows us to refer to that value using
// app.get('port') from here on
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
// app.use(express.static(__dirname + '/public'));
// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.get('/', function(request, response) {
  response.send('this is the website for miamifruit');
});


