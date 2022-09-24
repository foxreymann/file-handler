const chokidar = require('chokidar')
const fs = require('fs')
const path = require('path');

const source = '/tmp/thura1'
const dest = '/tmp/thura2'

const watcher = chokidar.watch(source, {
  ignoreInitial: true
});

watcher.on('add', sourcePath => {
  const filename = path.basename(sourcePath)
  const destPath = path.join(dest, filename)

  // log the rename
  console.log(sourcePath, destPath)
  fs.renameSync(sourcePath, destPath)
})
