const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;
// start
let mainWindow;

const fs = require("fs");
fs.readdir("/", function(err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function(file) {
    console.log(file);
  });
});



app.on("ready", function() {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );
});
