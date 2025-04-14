const express = require('express')
const port = 5000
const app = express()
const cors = require('cors')
//multer file
const multer = require('multer')

app.use(express.json())
//cors issue solve this line
app.use(express.urlencoded({extended : true}))
app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     return cb(null, './upload')
    },
    filename: function (req, file, cb) {
      
     return cb(null, `${Date.now()}_${file.originalname}`)
    }
  })

  const upload = multer({storage})



app.post('/api/upload',upload.single('avatar'),(req,res)=>{
   res.status(200).json(req.file);
//    console.log(req.body);
//    console.log(req.file);
} )


app.listen(port, ()=>{
    console.log(`server running on ${port}`);   
})


