const express=require('express')
const bodyParser=require('body-parser',);

const {dbConnect} = require('./utils/database');
const professorRoutes=require('./routes/professor')
const authRoutes=require('./routes/auth')

const db=require('./utils/database')
const PORT=4000;

const app=express()


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({extended:false}))

app.get('/',(req,res,next)=>{
    res.send('<h1>Hello server</h1>')
})

dbConnect()
.then(() => {
    app.listen(PORT, () => {
      console.log(`Server is started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
  
