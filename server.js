express = require('express');
bodyParser = require('body-parser');
mongoose = require('mongoose');
PORT = process.env.PORT || 3000;
app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true });


require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });