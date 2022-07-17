const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const app = express();
//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


//middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/promo.js'));
app.use(require('./routes/cliente.js'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get("port")}`);
});