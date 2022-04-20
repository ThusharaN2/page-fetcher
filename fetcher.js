const request = require('request');
const fs = require("fs");

const args = process.argv.slice(2);
const localPath = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.log("Failed to download resource: ", error)
  }
  fs.writeFile(localPath, body, (error) => {
    if (error) {
      console.log("Failed to write to local path: ", localPath);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  });
});
