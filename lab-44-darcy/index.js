const express = require('express');
const app = require('express')();
const http = require('http').Server(app);


const Bundler = require('parcel-bundler');
let bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
http.listen(3000, function() {
  console.log('Listening on http://localhost' + PORT);
});