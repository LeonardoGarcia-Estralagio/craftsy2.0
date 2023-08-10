const { readFileSync, writeFileSync } = require("fs");
const path = require('path');

const readJSON = (json) => {
  JSON.parse(readJSON(path.join(__dirname, "tareas.json"), "utf-8"));
};

const writeJSON = (array, file) => {
  writeJSON(
    path.join(__dirname, file),
    JSON.stringify(array, null, 3),
    "utf-8"
  );
};

module.exports = {
    readJSON,
    writeJSON
}
