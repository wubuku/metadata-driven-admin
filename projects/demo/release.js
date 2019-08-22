const fs = require('fs');
const child = require('child_process');
const path = require("path");



function buildModules(modules){
  const appModulePath = `./projects/demo/src/app/app.module.ts`;
  const appModuleContent = fs.readFileSync(appModulePath, {encoding: 'utf8'});

  function replaceAppModule(appModule){
    fs.writeFileSync(appModulePath, appModule);
  }

  const packagePath = `./projects/demo/package.json`;

  function processPackageVersion(upgrade){

    let pkg = JSON.parse(fs.readFileSync(packagePath, {encoding: 'utf8'}));
    let versionParts = pkg.version.split(".");
    let patchVersion = parseInt(versionParts[versionParts.length - 1]);

    versionParts[versionParts.length - 1] = upgrade? patchVersion + 1: patchVersion - 1;

    pkg.version = versionParts.join(".");

    fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
    if(upgrade) {
      console.log("升级版本到：" + pkg.version);
    } else {
      console.log("版本降级到：" + pkg.version);
    }
    return Promise.resolve();
  }

  function upgradePackage(){
    return processPackageVersion(true);
  }

  function downgrade(error){
    console.log("发布失败，降级发布的npm包", error);
    return processPackageVersion(false);
  }

  function buildAndPublishModule(packageName){
    console.log(`构建${packageName}【开始】`);
    child.execSync(`ng build @metadata-driven-admin/demo --prod`);
    console.log(`构建${packageName}【完成】`)

    const packageObject = JSON.parse(fs.readFileSync(packagePath, {encoding: 'utf8'}));
    packageObject.name = packageName;

    const moduleName = packageName.substring(packageName.lastIndexOf('/')+1);

    const modulePath = path.normalize(`dist/metadata-driven-admin/${moduleName}`);

    rmdirSync(modulePath);

    move(`dist/metadata-driven-admin/demo`, `dist/metadata-driven-admin/${moduleName}`)

    fs.writeFileSync(`${modulePath}/package.json`, JSON.stringify(packageObject, null, 2));

    console.log(`发布${packageName}【开始】`);
    child.execSync(`npm publish ${modulePath}`);
    console.log(`发布${packageName}【完成】`);
  }

  function mkdirs(target){
    const parent = path.dirname(target);
    if(!fs.existsSync(parent)) {
      mkdirs(parent);
    }
    fs.mkdirSync(target);
  }

  function move(src, target) {
    if(src === target) {
      return;
    }

    const srcStats = fs.statSync(src);

    if (srcStats.isDirectory()) {
      if(fs.existsSync(target) && fs.statSync(target).isFile()) {
        throw new Error(`源地址(${src})是一个目录，而目标地址(${target})是一个文件，无法移动`);
      }
      fs.readdirSync(src).forEach(function(childItemName) {
        move(path.join(src, childItemName), path.join(target, childItemName));
      });
    }
    else {
      if(fs.existsSync(target)) {
        const filename = path.basename(src);
        if(fs.statSync(target).isDirectory()) {
          fs.renameSync(src, path.normalize(`${target}/${filename}`));
        } else {
          fs.renameSync(src, target);
        }
      } else {
        const parent = path.dirname(target);
        if(!fs.existsSync(parent)) {
          mkdirs(parent);
        }
        fs.renameSync(src, target);
      }
    }

    if(!target.includes(src) && srcStats.isDirectory()) {
      fs.rmdirSync(src);
    }
  }

  function rmdirSync(path) {
    let files = [];
    if (fs.existsSync(path)) {
      files = fs.readdirSync(path);
      files.forEach(function (file) {
        let curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          rmdirSync(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  }


  try {
    upgradePackage();
    for (const item of modules) {
      replaceAppModule(item.appModule);
      buildAndPublishModule(item.package.name);
    }
  } catch (e) {
    downgrade(e);
  } finally {
    replaceAppModule(appModuleContent);
    fs.rmdirSync(`dist/metadata-driven-admin/demo`);
  }
}


function getModules(){
  const modules = [
    {
      package: {
        'name': '@metadata-driven-admin/demo-for-yang',
      },
      appModule: `
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app.component';
import {MonsterModule} from './modules/monster/monster.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MonsterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
`,
    },
    {
      package: {
        'name': '@metadata-driven-admin/demo-for-standard',
      },
      appModule: `
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app.component';
import {SimpleModule} from './modules/simple/simple.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SimpleModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
    
    `,
    }
  ]

  const args = process.argv.slice(2);

  if(args.length > 0) {
    return modules.filter(m => {
      return args.some(arg => {
        return m.package.name.includes(arg);
      })
    })
  }
  return modules;
}


buildModules(getModules());





