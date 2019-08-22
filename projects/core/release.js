const fs = require('fs');
const child = require('child_process');
const lessc = require('less');
lessc.options.javascriptEnabled = true;
const LessPluginCleanCSS = require('less-plugin-clean-css');

let promisify = (fn, receiver) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            let callback = (err, res) => {
                return err ? reject(err) : resolve(res);
            }
            fn.apply(receiver, [...args, callback]);
        });
    };
};
const exec = promisify(child.exec, child);


function processVersion(upgrade){
    let packageFile = './projects/core/package.json';

    let pkg = JSON.parse(fs.readFileSync(packageFile));
    let versionParts = pkg.version.split(".");
    let patchVersion = parseInt(versionParts[versionParts.length - 1]);

    versionParts[versionParts.length - 1] = upgrade? patchVersion + 1: patchVersion - 1;

    pkg.version = versionParts.join(".");

    fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2));
    if(upgrade) {
        console.log("升级版本到：" + pkg.version);
    } else {
        console.log("版本降级到：" + pkg.version);
    }
    return Promise.resolve();
}

function upgradePackage(){
    return processVersion(true);
}

function downgrade(error){
    console.log("发布失败，降级发布的npm包", error);
    return processVersion(false);
}

function processLess(){
    let data = fs.readFileSync('./projects/core/src/ma.less', "utf-8");

    fs.writeFileSync('./dist/metadata-driven-admin/core/ma.less', data.replace("../../../node_modules/", "../../"));

    data = data.replace("../../.",""); //当前目录为项目目录，将less导入的地址改为适配当前目录的地址。 ../../../node_modules/ng-zorro-antd/src/ng-zorro-antd.less  => /node_modules/ng-zorro-antd/src/ng-zorro-antd.less

    console.log("写入less到文件：../dist/metadata-driven-admin/core/ma.less");

    return writeCss(data).then(writeMinCss);
}

function writeCss(data){
    console.log("编译less代码到CSS");
    return lessc.render(data).then(({css}) => fs.writeFileSync("./dist/metadata-driven-admin/core/ma.css", css))
        .then(()=>{
            console.log("编译less代码到CSS【完成】");
            return data;
        });
}

function writeMinCss(data){
    let options = {plugins : [new LessPluginCleanCSS({advanced: true})]};
    console.log("编译less代码到min css");
    return lessc.render(data, options).then(({css}) => fs.writeFileSync("./dist/metadata-driven-admin/core/ma.min.css", css))
        .then(()=>{
            console.log("编译less代码到min css【完成】");
        });
}

function buildPackage(){
    console.log("开始构建npm包");
    return exec("ng build @metadata-driven-admin/core").then(()=>{
        console.log("开始构建npm包【完成】");
    });
}

function publish(){
    console.log("发布npm包");
    return exec("npm publish dist/metadata-driven-admin/core").then(()=>{
        console.log("发布npm包【完成】");
    });
}

console.time("task");
Promise.resolve()
    .then(upgradePackage)   //升级版本
    .then(buildPackage)     //构建library
    .then(processLess)      //复制less到dist，以及处理@import路径，编译成css和min css
    .then(publish)          //发布
    .then(()=>{
        console.timeEnd("task");
    })
    .catch(downgrade)       //如果构建失败，则回退版本
;

