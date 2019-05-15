const express = require('Express');
const path = require('path');
const app = express();
const port = 8080;

app.set('views',[path.join(__dirname,'src/assets/app'),path.join(__dirname,'src/assets/app/home'),path.join(__dirname,'dist')]);
app.use('/app',express.static(path.join(__dirname,'src/assets/app')));
app.use('/dist',express.static(path.join(__dirname,'src/assets/dist')));

app.get('/',(request,response)=>{
    response.status(200).sendFile(path.join(__dirname,'src/assets/app/app.html'))
});

app.listen(port,()=>{
    console.log(`Server starts on port: ${port}!`);
})