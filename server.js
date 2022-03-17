const express = require('express')
    , app = express()
    , multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage });

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'),
    (req, res) => res.send('<h2>Upload success</h2>'))

app.listen(3000, () => console.log('App in port 3000'))