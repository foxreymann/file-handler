const chokidar = require('chokidar')
const fs = require('fs')
const path = require('path');

const source = '/tmp/thura1'
const dest = '/tmp/thura1/thura2'

chokidar.watch(source).on('add', {
  ignoreInitial: true
}, (event, _) => {
  const sourcePath = event
  const filename = path.basename(sourcePath)
  const destPath = path.join(dest, filename)

  // log the rename
  console.log(sourcePath, destPath)
  fs.renameSync(sourcePath, destPath)
});
