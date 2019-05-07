const { BrowserWindow, app, dialog, ipcMain } = require("electron");

const os = require("os");
const fs = require("fs");

let mainWindow;

ipcMain.on("clannel", (e, args) => {
  //listing for any message on "clannel"
  console.log(args); //logging the message
  e.sender.send("clannel", "message recoded on the mian process "); // reply to the channel 1
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    // cretaing a windows
    width: 600,
    height: 600,
    show: false
  });

  mainWindow.once("ready-to-show", () => {
    //lisning for once
    mainWindow.show();
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`); // loading the file
});

app.on("closed", () => {
  mainWindow = null;
});

const getfileFromUser = () => {
  const files = dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "Text File", extensions: ["MP4", "txt", "text", "md"] }]
  });

  console.log(files);
  const content = fs.readFileSync(files).toString();
  console.log(content);
};
