var express = require('express');
var path = require('path');
const indexRouter = require('./routes/index-routes')
const app = express();


app.set('port',3000);


app.use(express.static(path.join(__dirname, 'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs')

app.use('/',indexRouter);

app.listen(app.get('port'),()=>{
    console.log("Si sirve esto xd", app.get('port'));
    
})