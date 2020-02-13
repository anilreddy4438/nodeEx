var express = require("express");
var app = express();

require("./routes")(app)

app.listen(3000, () => {
    console.log('listiening on port 3000')
})