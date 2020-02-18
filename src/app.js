const express = require('express');
const ejs = require('ejs');
const path = require('path');
const multer = require('multer');



//inifxtializations
const app = express();

//settings
app.set('port',3000);
app.set('views', path.join (__dirname, 'views'))
app.set('view engine', 'ejs');

//midedlewares

const storage = multer.diskStorage({
  destination:path.join(__dirname, 'public/upload'),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
app.use(multer({
  storage,
  dest: path.join(__dirname, 'public/upload')
}).single('image'));


//routes
app.use(require('./routes/index.routes'));


//start the server
app.listen(app.get('port'),() => {
  console.log(`server on port ${app.get('port')}`);
});
