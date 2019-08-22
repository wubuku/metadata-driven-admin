module.exports = {
  logRoot: false,
  install: function(less, pluginManager, functions) {
    pluginManager.addPreProcessor({
      process:  (src, {context, imports, fileInfo}) => {
        // if (!this.logRoot) {
        //   this.logRoot = true;
        //   console.log("Root file name:::" + fileInfo.rootFilename);
        //   console.log("Root path:::" + fileInfo.rootpath)
        // }
        // console.log("File name:::" +fileInfo.filename);
        // if(fileInfo.filename.endsWith("default.less")) {
        //   console.log(src);
        // }
        return src;
      }
    }, 2000);
  }
}
