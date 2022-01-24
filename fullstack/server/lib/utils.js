const fs = require('fs')

function readFiles (dir , filters = '') {
  let arrFiles = []
  const files = fs.readdirSync(dir)
  for (let i = 0; i < files.length; i++) {
    const item = files[i]
    const stat = fs.lstatSync(dir + '\\' + item)
    if (stat.isDirectory() === true) {
      arrFiles = arrFiles.concat(readFiles(dir + '\\' + item))
    } else {
      var reg = /^.*\.js$/
      if (reg.test(item)) { /* 获取的是所有的txt和ini文件 */
        arrFiles.push(dir + '\\' + item)
      }
    }
  }
  return arrFiles
}

function loadServerData(dir){
  var data = {};
  var files = readFiles(dir);
  files.forEach( filePath =>{
    var name = filePath
        .replace(dir,'')
        .replace(/\.js$/,'')
        .replace(/\\/ig,'/')
    if(/([\w,\\]*)$/.test(name) && name != '/index'){
      console.log(filePath)
      var module = require(filePath);
      data[name] = module;
    }
  })
  return data;
}


module.exports = {
  readFiles : readFiles,
  loadServerData : loadServerData
}
