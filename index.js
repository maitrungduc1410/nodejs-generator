#!/usr/bin/env node
var _0x2ba5=['react','vue','Babel','babel','Typescript\x20(not\x20supported','typescript','CSS','SCSS','scss','Less','Stylus','stylus','CSS\x20Modules','css_modules','SASS\x20Modules','sass_modules','SVG','svg','MomentJS','moment','Lodash','prompt','input','project_name','list','Express\x20View\x20Engine','backend','frontend','router','Yes','with-router','Transpiler','transpiler','Styling','stylings','length','You\x20must\x20choose\x20at\x20least\x20one\x20option.','checkbox','Image\x20loader','ultilities','Using\x20Eslint?','eslint','yes','Do\x20you\x20want\x20to\x20use\x20Helmet\x20for\x20security?\x20(recommended)','helmet','then','type','toLowerCase','includes','windows','copy','npm\x20install\x20-g\x20express-generator','express\x20--view=','/templates/webpack.config.js\x20','mkdir\x20','/views/frontend/js\x20&&\x20','\x20-r\x20','/templates/views/frontend/','/views/frontend/js','/templates/eslint/.eslintrc.','.js\x20','/.eslintrc.js','/templates/babel/.babelrc.','/.babelrc','/app.js','utf8','log','replace','var\x20express\x20=\x20require(\x27express\x27);','var\x20express\x20=\x20require(\x27express\x27);\x0avar\x20helmet\x20=\x20require(\x27helmet\x27);','var\x20app\x20=\x20express();','var\x20app\x20=\x20express();\x0aapp.use(helmet());','writeFile','/templates/git_ignore\x20','/.gitignore','appendFileSync','/webpack.config.js','const\x20webpack\x20=\x20require(\x27webpack\x27)\x0a','lodash','const\x20LodashModuleReplacementPlugin\x20=\x20require(\x27lodash-webpack-plugin\x27)\x0a','const\x20VueLoaderPlugin\x20=\x20require(\x27vue-loader/lib/plugin\x27)\x0a','const\x20WebpackNotifierPlugin\x20=\x20require(\x27webpack-notifier\x27)\x0a\x0a','const\x20config\x20=\x20{\x0a\x20\x20entry:\x20\x27./views/frontend/js/index.js\x27,\x0a\x20\x20output:\x20{\x0a\x20\x20\x20\x20path:\x20path.resolve(__dirname,\x20\x27public/javascripts\x27),\x0a\x20\x20\x20\x20filename:\x20\x27app.js\x27\x0a\x20\x20},\x0a\x20\x20module:\x20{\x0a\x20\x20\x20\x20rules:\x20[\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/.vue$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27vue-loader\x27\x0a\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/.js$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20\x27babel-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/node_modules/\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.css$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/\x5c.module\x5c.css$/\x0a\x20\x20\x20\x20\x20\x20},\x0a','less','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.less$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27less-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.styl$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27stylus-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.css$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20importLoaders:\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20modules:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20localIdentName:\x20\x27[hash:base64:32]\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20include:\x20/\x5c.module\x5c.css$/\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.scss$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20importLoaders:\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20modules:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20localIdentName:\x20\x27[hash:base64:32]\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27sass-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20include:\x20/\x5c.module\x5c.scss$/\x0a\x20\x20\x20\x20\x20\x20},\x0a','image_loader','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.svg$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27file-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name:\x20\x27[name]_[hash:8].[ext]\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20publicPath:\x20\x27/images\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outputPath:\x20\x27../images\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','png','\x20\x20\x20\x20]\x0a\x20\x20},\x0a','\x20\x20resolve:\x20{\x0a\x20\x20\x20\x20extensions:\x20[\x0a\x20\x20\x20\x20\x20\x20\x27.js\x27,\x0a\x20\x20\x20\x20\x20\x20\x27.vue\x27\x0a\x20\x20\x20\x20]\x0a\x20\x20},\x0a','\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20new\x20WebpackNotifierPlugin({\x20alwaysNotify:\x20true\x20}),\x0a','\x20\x20\x20\x20new\x20webpack.ContextReplacementPlugin(/moment[\x5c/\x5c\x5c]locale$/,\x20/en/),\x0a','\x20\x20]\x0a}\x0a\x0amodule.exports\x20=\x20config\x0a','readFileSync','parse','scripts','start','nodemon\x20./bin/www','dev','webpack\x20-d\x20--progress\x20--watch\x20--mode=development','npm\x20run\x20production','production','webpack\x20-p\x20--progress\x20--mode=production','dependencies','nodemon','devDependencies','webpack','^4.29.6','webpack-cli','webpack-notifier','^1.7.0','react-dom','^16.8.5','babel-loader','^8.0.5','@babel/core','^7.4.0','@babel/preset-env','@babel/plugin-proposal-class-properties','babel-eslint','^10.0.1','^5.15.3','eslint-config-standard','^12.0.0','eslint-plugin-import','^2.16.0','eslint-plugin-jsx-a11y','^6.2.1','eslint-plugin-promise','^4.0.1','^7.12.4','eslint-plugin-standard','^4.0.0','react-router-dom','^5.0.0','^2.6.10','vue-loader','^15.7.0','vue-template-compiler','^7.4.2','eslint-friendly-formatter','^3.0.0','eslint-loader','eslint-plugin-node','eslint-plugin-vue','vue-router','style-loader','^0.23.1','sass-loader','^7.1.0','node-sass','less-loader','^4.1.0','^3.9.0','stylus-loader','^3.0.2','file-loader','^3.0.1','url-loader','^1.1.2','^2.24.0','writeFileSync','/package.json','\x0a#================================\x0a','get','ok_hand','hex','#00ffe7','To\x20get\x20started:\x0a','cd\x20','yellow','npm\x20install','\x20(to\x20install\x20dependencies)','\x20\x20\x20\x20Run:\x20','npm\x20start','star2','Thank\x20you\x20for\x20using\x20this\x20package','bulb','visible','inquirer','child_process','process','chalk','cwd','pug','jade','Hbs','hbs','Hjs','hjs','twig','Vash'];(function(_0x34b2bf,_0x51b304){var _0x54a7f5=function(_0x34cdaa){while(--_0x34cdaa){_0x34b2bf['push'](_0x34b2bf['shift']());}};_0x54a7f5(++_0x51b304);}(_0x2ba5,0x17d));var _0x403e=function(_0x4455c5,_0x3ff2f9){_0x4455c5=_0x4455c5-0x0;var _0x4f1aa4=_0x2ba5[_0x4455c5];return _0x4f1aa4;};var inquirer=require(_0x403e('0x0'));const {execSync}=require(_0x403e('0x1'));const process=require(_0x403e('0x2'));const fs=require('fs');var emoji=require('node-emoji');const chalk=require(_0x403e('0x3'));var os=require('os');const CURR_DIR=process[_0x403e('0x4')]();let templateEngines=[{'name':'EJS','checked':!![],'value':'ejs'},{'name':'Pug','value':_0x403e('0x5')},{'name':'Jade','value':_0x403e('0x6')},{'name':_0x403e('0x7'),'value':_0x403e('0x8')},{'name':_0x403e('0x9'),'value':_0x403e('0xa')},{'name':'Twig','value':_0x403e('0xb')},{'name':_0x403e('0xc'),'value':'vash'}];let frontendFrameworks=[{'name':'ReactJS','checked':!![],'value':_0x403e('0xd')},{'name':'VueJS','value':_0x403e('0xe')}];let transpilers=[{'name':_0x403e('0xf'),'checked':!![],'value':_0x403e('0x10')},{'name':_0x403e('0x11'),'value':_0x403e('0x12'),'disabled':!![]}];let stylings=[{'name':_0x403e('0x13'),'checked':!![],'value':'css'},{'name':_0x403e('0x14'),'checked':!![],'value':_0x403e('0x15')},{'name':_0x403e('0x16'),'value':'less'},{'name':_0x403e('0x17'),'value':_0x403e('0x18')}];let cssModules=[{'name':_0x403e('0x19'),'checked':!![],'value':_0x403e('0x1a')},{'name':_0x403e('0x1b'),'checked':!![],'value':_0x403e('0x1c')}];let imageLoaders=[{'name':_0x403e('0x1d'),'value':_0x403e('0x1e')},{'name':'PNG','value':'png'}];let ultilities=[{'name':_0x403e('0x1f'),'value':_0x403e('0x20')},{'name':_0x403e('0x21'),'value':'lodash'}];inquirer[_0x403e('0x22')]([{'type':_0x403e('0x23'),'message':'Project\x20name:\x20','name':_0x403e('0x24'),'default':'my_app'},{'type':_0x403e('0x25'),'message':_0x403e('0x26'),'name':_0x403e('0x27'),'choices':templateEngines},{'type':_0x403e('0x25'),'message':'Frontend\x20Framework','name':_0x403e('0x28'),'choices':frontendFrameworks},{'type':'list','message':'Using\x20with\x20React-router/Vue-router','name':_0x403e('0x29'),'choices':[{'name':_0x403e('0x2a'),'value':_0x403e('0x2b'),'checked':!![]},{'name':'No','value':'no-router'}]},{'type':_0x403e('0x25'),'message':_0x403e('0x2c'),'name':_0x403e('0x2d'),'choices':transpilers},{'type':'checkbox','message':_0x403e('0x2e'),'name':_0x403e('0x2f'),'choices':stylings,'validate':function(_0x451b34){if(_0x451b34[_0x403e('0x30')]<0x1){return _0x403e('0x31');}return!![];}},{'type':'checkbox','message':'Using\x20CSS/SASS\x20modules','name':_0x403e('0x1a'),'choices':cssModules},{'type':_0x403e('0x32'),'message':_0x403e('0x33'),'name':'image_loader','choices':imageLoaders},{'type':'checkbox','message':'Ultilities','name':_0x403e('0x34'),'choices':ultilities},{'type':_0x403e('0x25'),'message':_0x403e('0x35'),'name':_0x403e('0x36'),'choices':[{'name':_0x403e('0x2a'),'value':_0x403e('0x37')},{'name':'No','value':'no'}]},{'type':_0x403e('0x25'),'message':_0x403e('0x38'),'name':_0x403e('0x39'),'choices':[{'name':_0x403e('0x2a'),'value':_0x403e('0x37')},{'name':'No','value':'no'}]}])[_0x403e('0x3a')](_0x26cdd3=>{let _0x1b4cb5=os[_0x403e('0x3b')]()[_0x403e('0x3c')]()[_0x403e('0x3d')](_0x403e('0x3e'))?_0x403e('0x3f'):'cp';execSync(_0x403e('0x40'));execSync(_0x403e('0x41')+_0x26cdd3[_0x403e('0x27')]+'\x20'+_0x26cdd3['project_name']);execSync(_0x1b4cb5+'\x20'+__dirname+'/templates/views/index.'+_0x26cdd3[_0x403e('0x27')]+'\x20'+CURR_DIR+'/'+_0x26cdd3[_0x403e('0x24')]+'/views');execSync(_0x1b4cb5+'\x20'+__dirname+_0x403e('0x42')+CURR_DIR+'/'+_0x26cdd3['project_name']);execSync(_0x403e('0x43')+CURR_DIR+'/'+_0x26cdd3[_0x403e('0x24')]+'/views/frontend\x20&&\x20mkdir\x20'+CURR_DIR+'/'+_0x26cdd3[_0x403e('0x24')]+_0x403e('0x44')+_0x1b4cb5+_0x403e('0x45')+__dirname+_0x403e('0x46')+_0x26cdd3['frontend']+'/'+_0x26cdd3[_0x403e('0x29')]+'/\x20'+CURR_DIR+'/'+_0x26cdd3[_0x403e('0x24')]+_0x403e('0x47'));if(_0x26cdd3[_0x403e('0x36')]==='yes'){execSync(_0x1b4cb5+'\x20'+__dirname+_0x403e('0x48')+_0x26cdd3[_0x403e('0x28')]+_0x403e('0x49')+CURR_DIR+'/'+_0x26cdd3[_0x403e('0x24')]+_0x403e('0x4a'));}if(_0x26cdd3[_0x403e('0x2d')]===_0x403e('0x10')){execSync(_0x1b4cb5+'\x20'+__dirname+_0x403e('0x4b')+_0x26cdd3[_0x403e('0x28')]+'\x20'+CURR_DIR+'/'+_0x26cdd3['project_name']+_0x403e('0x4c'));}if(_0x26cdd3[_0x403e('0x39')]==='yes'){fs['readFile'](CURR_DIR+'/'+_0x26cdd3[_0x403e('0x24')]+_0x403e('0x4d'),_0x403e('0x4e'),function(_0x170bf7,_0x146473){if(_0x170bf7){return console[_0x403e('0x4f')](_0x170bf7);}var _0xe80d94=_0x146473[_0x403e('0x50')](_0x403e('0x51'),_0x403e('0x52'))[_0x403e('0x50')](_0x403e('0x53'),_0x403e('0x54'));fs[_0x403e('0x55')](CURR_DIR+'/'+_0x26cdd3[_0x403e('0x24')]+_0x403e('0x4d'),_0xe80d94,_0x403e('0x4e'),function(_0x170bf7){if(_0x170bf7)return console['log'](_0x170bf7);});});}execSync(_0x1b4cb5+'\x20'+__dirname+_0x403e('0x56')+CURR_DIR+'/'+_0x26cdd3[_0x403e('0x24')]+_0x403e('0x57'));writeContentToWebpackFile(_0x26cdd3);writeContentToPackageJson(_0x26cdd3);printOnSuccess(_0x26cdd3);});function writeContentToWebpackFile(_0x3dad7c){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),_0x403e('0x5a'));fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c['project_name']+'/webpack.config.js','const\x20path\x20=\x20require(\x27path\x27)\x0a');if(_0x3dad7c['ultilities'][_0x403e('0x3d')](_0x403e('0x5b'))){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c['project_name']+_0x403e('0x59'),_0x403e('0x5c'));}if(_0x3dad7c[_0x403e('0x28')]===_0x403e('0xe')){fs['appendFileSync'](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+'/webpack.config.js',_0x403e('0x5d'));}fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+'/webpack.config.js',_0x403e('0x5e'));fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),_0x403e('0x5f'));if(_0x3dad7c['frontend']===_0x403e('0xd')){fs['appendFileSync'](CURR_DIR+'/'+_0x3dad7c['project_name']+_0x403e('0x59'),'\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.(js|jsx)$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20\x27babel-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/node_modules/\x0a\x20\x20\x20\x20\x20\x20},\x0a');}else if(_0x3dad7c[_0x403e('0x28')]===_0x403e('0xe')){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c['project_name']+_0x403e('0x59'),_0x403e('0x60'));}if(_0x3dad7c[_0x403e('0x2f')][_0x403e('0x3d')]('css')){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+'/webpack.config.js',_0x403e('0x61'));}if(_0x3dad7c['stylings']['includes'](_0x403e('0x15'))){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),'\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.scss$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27sass-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/\x5c.module\x5c.scss$/\x0a\x20\x20\x20\x20\x20\x20},\x0a');}if(_0x3dad7c[_0x403e('0x2f')][_0x403e('0x3d')](_0x403e('0x62'))){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+'/webpack.config.js',_0x403e('0x63'));}if(_0x3dad7c[_0x403e('0x2f')][_0x403e('0x3d')](_0x403e('0x18'))){fs['appendFileSync'](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+'/webpack.config.js',_0x403e('0x64'));}if(_0x3dad7c[_0x403e('0x1a')][_0x403e('0x3d')](_0x403e('0x1a'))){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),_0x403e('0x65'));}if(_0x3dad7c[_0x403e('0x1a')][_0x403e('0x3d')](_0x403e('0x1c'))){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+'/webpack.config.js',_0x403e('0x66'));}if(_0x3dad7c[_0x403e('0x67')][_0x403e('0x3d')](_0x403e('0x1e'))){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),_0x403e('0x68'));}if(_0x3dad7c[_0x403e('0x67')][_0x403e('0x3d')](_0x403e('0x69'))){fs['appendFileSync'](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),'\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.png$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27url-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mimetype:\x20\x27image/png\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a');}fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+'/webpack.config.js',_0x403e('0x6a'));if(_0x3dad7c[_0x403e('0x28')]['includes']('react')){fs['appendFileSync'](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),'\x20\x20resolve:\x20{\x0a\x20\x20\x20\x20extensions:\x20[\x0a\x20\x20\x20\x20\x20\x20\x27.js\x27,\x0a\x20\x20\x20\x20\x20\x20\x27.jsx\x27\x0a\x20\x20\x20\x20]\x0a\x20\x20},\x0a');}else if(_0x3dad7c[_0x403e('0x28')][_0x403e('0x3d')]('vue')){fs['appendFileSync'](CURR_DIR+'/'+_0x3dad7c['project_name']+_0x403e('0x59'),_0x403e('0x6b'));}fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),_0x403e('0x6c'));if(_0x3dad7c[_0x403e('0x34')][_0x403e('0x3d')]('lodash')){fs['appendFileSync'](CURR_DIR+'/'+_0x3dad7c['project_name']+'/webpack.config.js','\x20\x20\x20\x20new\x20LodashModuleReplacementPlugin,\x0a');}if(_0x3dad7c[_0x403e('0x34')][_0x403e('0x3d')](_0x403e('0x20'))){fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),_0x403e('0x6d'));}if(_0x3dad7c[_0x403e('0x28')]==='vue'){fs['appendFileSync'](CURR_DIR+'/'+_0x3dad7c['project_name']+_0x403e('0x59'),'\x20\x20\x20\x20new\x20VueLoaderPlugin(),\x0a');}fs[_0x403e('0x58')](CURR_DIR+'/'+_0x3dad7c[_0x403e('0x24')]+_0x403e('0x59'),_0x403e('0x6e'));}function writeContentToPackageJson(_0x4521cc){let _0x369c57=fs[_0x403e('0x6f')](CURR_DIR+'/'+_0x4521cc['project_name']+'/package.json');let _0x4d5b1d=JSON[_0x403e('0x70')](_0x369c57);_0x4d5b1d[_0x403e('0x71')][_0x403e('0x72')]=_0x403e('0x73');_0x4d5b1d[_0x403e('0x71')][_0x403e('0x74')]=_0x403e('0x75');_0x4d5b1d['scripts']['prod']=_0x403e('0x76');_0x4d5b1d[_0x403e('0x71')][_0x403e('0x77')]=_0x403e('0x78');_0x4d5b1d[_0x403e('0x79')][_0x403e('0x7a')]='^1.18.10';if(_0x4521cc['helmet']===_0x403e('0x37')){_0x4d5b1d[_0x403e('0x79')]['helmet']='^3.16.0';}if(!_0x4d5b1d[_0x403e('0x7b')]){_0x4d5b1d[_0x403e('0x7b')]={};}_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x7c')]=_0x403e('0x7d');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x7e')]='^3.3.0';_0x4d5b1d['devDependencies'][_0x403e('0x7f')]=_0x403e('0x80');if(_0x4521cc[_0x403e('0x28')]===_0x403e('0xd')){_0x4d5b1d['dependencies'][_0x403e('0x81')]=_0x403e('0x82');_0x4d5b1d[_0x403e('0x79')][_0x403e('0xd')]=_0x403e('0x82');_0x4d5b1d['devDependencies']['@babel/preset-react']='^7.0.0';_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x83')]=_0x403e('0x84');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x85')]=_0x403e('0x86');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x87')]='^7.4.2';_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x88')]='^7.4.0';if(_0x4521cc['eslint']===_0x403e('0x37')){_0x4d5b1d['devDependencies'][_0x403e('0x89')]=_0x403e('0x8a');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x36')]=_0x403e('0x8b');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x8c')]=_0x403e('0x8d');_0x4d5b1d['devDependencies'][_0x403e('0x8e')]=_0x403e('0x8f');_0x4d5b1d['devDependencies'][_0x403e('0x90')]=_0x403e('0x91');_0x4d5b1d[_0x403e('0x7b')]['eslint-plugin-node']='^8.0.1';_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x92')]=_0x403e('0x93');_0x4d5b1d[_0x403e('0x7b')]['eslint-plugin-react']=_0x403e('0x94');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x95')]=_0x403e('0x96');}if(_0x4521cc[_0x403e('0x29')]==='with-router'){_0x4d5b1d[_0x403e('0x79')][_0x403e('0x97')]=_0x403e('0x98');}}else if(_0x4521cc[_0x403e('0x28')]===_0x403e('0xe')){_0x4d5b1d[_0x403e('0x79')][_0x403e('0xe')]=_0x403e('0x99');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x9a')]=_0x403e('0x9b');_0x4d5b1d['devDependencies'][_0x403e('0x9c')]=_0x403e('0x99');_0x4d5b1d['devDependencies'][_0x403e('0x83')]=_0x403e('0x84'),_0x4d5b1d['devDependencies'][_0x403e('0x85')]=_0x403e('0x86'),_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x87')]=_0x403e('0x9d');if(_0x4521cc[_0x403e('0x36')]===_0x403e('0x37')){_0x4d5b1d[_0x403e('0x7b')]['babel-eslint']=_0x403e('0x8a');_0x4d5b1d[_0x403e('0x7b')]['eslint']=_0x403e('0x8b');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x8c')]=_0x403e('0x8d');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x9e')]=_0x403e('0x9f');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0xa0')]='^1.7.1';_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x8e')]=_0x403e('0x8f');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0xa1')]='^8.0.1';_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x92')]=_0x403e('0x93');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x95')]=_0x403e('0x96');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0xa2')]='^4.0.0';}if(_0x4521cc[_0x403e('0x29')]===_0x403e('0x2b')){_0x4d5b1d[_0x403e('0x79')][_0x403e('0xa3')]='^3.0.1';}}_0x4d5b1d['devDependencies']['css-loader']='^2.1.1';_0x4d5b1d['devDependencies'][_0x403e('0xa4')]=_0x403e('0xa5');if(_0x4521cc['stylings'][_0x403e('0x3d')](_0x403e('0x15'))){_0x4d5b1d['devDependencies'][_0x403e('0xa6')]=_0x403e('0xa7');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0xa8')]='^4.11.0';}if(_0x4521cc[_0x403e('0x2f')][_0x403e('0x3d')]('less')){_0x4d5b1d[_0x403e('0x7b')][_0x403e('0xa9')]=_0x403e('0xaa');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x62')]=_0x403e('0xab');}if(_0x4521cc[_0x403e('0x2f')]['includes'](_0x403e('0x18'))){_0x4d5b1d['devDependencies'][_0x403e('0xac')]=_0x403e('0xad');_0x4d5b1d[_0x403e('0x7b')][_0x403e('0x18')]='^0.54.5';}if(_0x4521cc[_0x403e('0x67')][_0x403e('0x3d')](_0x403e('0x1e'))){_0x4d5b1d['devDependencies'][_0x403e('0xae')]=_0x403e('0xaf');}if(_0x4521cc[_0x403e('0x67')]['includes'](_0x403e('0x1e'))){_0x4d5b1d[_0x403e('0x7b')][_0x403e('0xb0')]=_0x403e('0xb1');}if(_0x4521cc[_0x403e('0x34')][_0x403e('0x3d')](_0x403e('0x20'))){_0x4d5b1d[_0x403e('0x79')][_0x403e('0x20')]=_0x403e('0xb2');}if(_0x4521cc[_0x403e('0x34')]['includes'](_0x403e('0x5b'))){_0x4d5b1d['dependencies'][_0x403e('0x5b')]='^4.17.11';_0x4d5b1d['devDependencies']['lodash-webpack-plugin']='^0.11.5';}fs[_0x403e('0xb3')](CURR_DIR+'/'+_0x4521cc[_0x403e('0x24')]+_0x403e('0xb4'),JSON['stringify'](_0x4d5b1d,null,'\x20\x20'));}function printOnSuccess(_0x7fbfe3){console['log'](_0x403e('0xb5'));console[_0x403e('0x4f')](emoji[_0x403e('0xb6')](_0x403e('0xb7'))+'\x20'+chalk[_0x403e('0xb8')](_0x403e('0xb9'))['visible']('Project\x20initialization\x20finished!')+'\x20'+emoji[_0x403e('0xb6')]('ok_hand'));console[_0x403e('0x4f')](_0x403e('0xb5'));console['log'](_0x403e('0xba'));let _0x1a98f0=chalk['yellow'](_0x403e('0xbb')+_0x7fbfe3[_0x403e('0x24')]);console['log']('\x20\x20\x20\x20Run:\x20'+_0x1a98f0);console[_0x403e('0x4f')]('\x20\x20\x20\x20Run:\x20'+chalk[_0x403e('0xbc')](_0x403e('0xbd'))+_0x403e('0xbe'));console[_0x403e('0x4f')](_0x403e('0xbf')+chalk[_0x403e('0xbc')](_0x403e('0xc0'))+'\x20(to\x20start\x20backend)');console[_0x403e('0x4f')](_0x403e('0xbf')+chalk[_0x403e('0xbc')]('npm\x20run\x20dev')+'\x20(in\x20another\x20terminal\x20window,\x20to\x20build\x20frontend\x20in\x20developement\x20mode)');console['log'](_0x403e('0xbf')+chalk[_0x403e('0xbc')]('npm\x20run\x20prod')+'\x20(to\x20build\x20frontend\x20in\x20production\x20mode)\x0a');console[_0x403e('0x4f')](_0x403e('0xb5'));console[_0x403e('0x4f')]('\x09\x09\x09'+emoji[_0x403e('0xb6')](_0x403e('0xc1'))+'\x20'+chalk[_0x403e('0xb8')](_0x403e('0xb9'))['visible'](_0x403e('0xc2'))+'\x20'+emoji[_0x403e('0xb6')](_0x403e('0xc1')));console[_0x403e('0x4f')]('\x09\x09'+emoji[_0x403e('0xb6')](_0x403e('0xc3'))+'\x20'+chalk[_0x403e('0xb8')](_0x403e('0xb9'))[_0x403e('0xc4')]('Creator:\x20Mai\x20Trung\x20Duc\x20<maitrungduc1410@gmail.com>')+'\x20'+emoji[_0x403e('0xb6')](_0x403e('0xc3'))+'\x0a');}