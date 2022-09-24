const chokidar = require('chokidar');

// One-liner for current directory
chokidar.watch('/tmp/thura1').on('add', (event, path) => {
  console.log(event, path);
});
