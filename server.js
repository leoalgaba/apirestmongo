var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Conectando a la  DB
mongoose.connect('mongodb://localhost/seriestv', function(err, res) {
  if(err) console.log('ERROR: Conectando a la BD:' + err);
  else console.log('Conectando a la  BD');
});

    // Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Ejemplo de ruteo
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);
require('./routes')(app);

// Empieza el servidor
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});