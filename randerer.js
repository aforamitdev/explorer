const os = require("os");
const fs = require("fs");
const { ipcRenderer } = require("electron");

ipcRenderer.send("clannel", "Amit rai hellow from rander"); // sending the message to the "channel"
ipcRenderer.on("clannel", (e, args) => {
  // listeing for the reply from the 'channel'
  console.log(args); // loging the reply
});

// const openFileButton = document.querySelector("#open-file-button");

// const files = fs.readdirSync(os.homedir());
// console.log(files);

// files.forEach(name => {
//   const file = document.createElement("li");
//   file.textContent = name;
//   document.body.appendChild(file);
// });

// openFileButton.addEventListener("click", () => {
//   alert("I will open file ");
// });
