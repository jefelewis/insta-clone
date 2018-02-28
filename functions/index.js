const functions = require('firebase-functions');
const os = require('os');
const cors = require('cors')({origin:true});
const path = require('path');
const Busboy = require('busboy');
const fs = require('fs');
const spawn = require('child-process-promise').spawn;

const gcconfig = {     
  projectId: 'top-shelf-708be',
  keyFilename: 'top-shelf-708be-firebase-adminsdk-gi7rg-966f7e4f84.json'
};

const gcs = require('@google-cloud/storage')(gcconfig);

exports.onFileChange = functions.storage.object().onChange(event => {
  const object = event.data;
  const bucket = object.bucket;
  const contentType = object.contentType;
  const filePath = object.name;
  // console.log('event is ', event)
  console.log('File change detected, starting function');

  if(object.resourceState === 'not_exists'){
    console.log('we deleted a file, exit...')
    return;
  }
  if(path.basename(filePath).startsWith('resized-')) {
    console.log('we already renamed this file!');
    return;
  }

  const destBucket = gcs.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = { contentType: contentType};

  return destBucket.file(filePath).download({
    destination: tmpFilePath
}).then(() => {
  return spawn('convert', [tmpFilePath, '-resize', '250x250', tmpFilePath]);
}).then(() => {
  return destBucket.upload(tmpFilePath, {
    destination: 'resized-' + path.basename(filePath),
    metadata: metadata
  })
});
});
//upload file to http endpoint
exports.uploadFile = functions.https.onRequest((req, res) => {
  //check request method, mobile app cors taken care of
  cors(req, res, () => {
  if (req.method !== 'POST') {
    return res.status(500).json({
      message: 'Not allowed'
    });
  } 
  //busboy used to parse data
  const busboy = new Busboy({ headers: req.headers });
  let uploadData = null;
//once parsed, handle it
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    const filepath = path.join(os.tmpdir(), filename);
    uploadData = {file: filepath, type:minetype}; 
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on('finish', () => {
    const bucket = gcs.bucket('gs://top-shelf-708be.appspot.com/'); 
    bucket.upload(uploadData.file, {
      uploadType: 'media',
      metadata: {
        metadata: {
          contentType: uploadData.type
        }
      } 
    })
    .then(() => {
      res.status(200).json({
        message: 'It worked!'
      });
      return busboy.end(req.rawBody);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
  });
  //on end
  });
});