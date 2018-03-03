// const functions = require('firebase-functions');
// const gcs = require('@google-cloud/storage')();
// const os = require('os');
// const cors = require('cors')({origin:true});
// const path = require('path');
// const Busboy = require('busboy');
// const fs = require('fs');

// exports.onFileChange = functions.storage.object().onChange(event => {
//   const object = event.data;
//   const bucket = object.bucket;
//   const contentType = object.contentType;
//   const filePath = object.name;
//   console.log('File change detected, starting function');
// })

// exports.uploadFile = functions.https.onRequest((req, res) =>{
//   cors(req, res, () => {
//   if (req.method !== 'POST') {
//     return res.status(500).json({
//       message: 'Not allowed'
//     });
//   }
//   const busboy = new Busboy({headers: req.headers});
//   let uploadData = null;

//   busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
//     const filepath = path.join(os.tmpdir(), filename);
//     uploadData = {file: filepath, type:minetype}; 
//     file.pipe(fs.createWriteStream(filepath));
//   });
//   busboy.on('finish', () => {
//     const bucket = gcs.bucket('gs://top-shelf-708be.appspot.com/') 
//     bucket.upload(uploadData.file, {
//       uploadType: 'media',
//       metadata: {
//         metadata: {
//           contentType: uploadData.type
//         }
//       } 
//     })
//     .then((err,uploadedFile) => {
//       if(err) {
//         return res.status(500).json({
//           error: err
//         });
//       }
//       res.status(200).json({
//         message: 'It worked!'
//       });
//       });
//     });
//   });
// });