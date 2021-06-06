
const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/views/index.html');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
