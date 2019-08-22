const fs = require('fs');
const child = require('child_process');

const moduleName = 'in-memory-web-api';

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
    let packageFile = `./projects/${moduleName}/package.json`;

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


function buildPackage(){
    console.log("开始构建npm包");
    return exec(`ng build @metadata-driven-admin/${moduleName}`).then(()=>{
        console.log("开始构建npm包【完成】");
    });
}

function publish(){
    console.log("发布npm包");
    return exec(`npm publish dist/metadata-driven-admin/${moduleName}`).then(()=>{
        console.log("发布npm包【完成】");
    });
}

console.time("task");
Promise.resolve()
    .then(upgradePackage)   //升级版本
    .then(buildPackage)     //构建library
    .then(publish)          //发布
    .then(()=>{
        console.timeEnd("task");
    })
    .catch(downgrade)       //如果构建失败，则回退版本
;

