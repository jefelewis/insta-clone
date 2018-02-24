const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage')();
const path = require('path');

exports.uploadFile = functions.https.onRequest((req, res) =>{
  if (req.method !== 'POST') {
    return res.status(500).json({
      message: 'Not allowed'
    });
  }
  res.status(200).json({
    message: 'It worked!'
  });
});