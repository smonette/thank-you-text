const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get(['/','/:text'], (request, response) => {  
  const text = request.params.text || 'Thank you'
  return response.render('index', { text: text})
})

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
