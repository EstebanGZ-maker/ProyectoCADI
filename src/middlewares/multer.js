import multer from "multer";
import app from "../app.js";

const upload = multer({ dest: 'files/' })

app.post('/pdfPage', upload.none("pdfPlanos"), (req, res, next) => {
    console.log(req.file)
    res.send("sale"); 
  })