const chokidar = require('chokidar')
const fs = require('fs')
const path = require('path');
const commander = require('commander');

const source = '~/Downloads'
const dest = '~/Desktop'

const program = commander.program
	.option("--source <source>", "Directory to watch", "/tmp/thura1")
	.option("--dest <dest>", "Directory to move files to", "/tmp/thura2")
	.option("--rename <rename>", "New name for moved file")
	.parse(process.argv)

const opts = program.opts()

console.log({opts})

const watcher = chokidar.watch(opts.source, {
  ignoreInitial: true
});

watcher.on('add', sourcePath => {
  const filename = opts.rename || path.basename(sourcePath)
  const destPath = path.join(opts.dest, filename)

  // log the rename
  console.log('moved', sourcePath, 'to', destPath)
  fs.renameSync(sourcePath, destPath)
})
