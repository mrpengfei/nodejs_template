const config = require('../config/index')
const fs = require('fs')
const path = require('path')

module.exports = function (app) {
  let files = fs.readdirSync(path.join(config.rootDir, 'controllers'));
  files.forEach(function (element) {
    let controller = require(path.join('../controllers', element));
    let controllerName = element.replace('.controller.js', '');
    if (controllerName == 'index' || controllerName == 'home') {
      app.use('/', controller)
    } else {
      let path = path.join('/', controllerName);
      app.use(path, controller)
    }
  }, this);

}
