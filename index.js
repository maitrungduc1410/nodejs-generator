#!/usr/bin/env node
var _0x36df=['checkbox','Styling','length','You\x20must\x20choose\x20at\x20least\x20one\x20option.','Using\x20CSS/SASS\x20modules','Image\x20loader','Ultilities','ultilities','eslint','yes','helmet','then','project_name','/webpack.config.js','appendFileSync','const\x20path\x20=\x20require(\x27path\x27)\x0a','includes','const\x20WebpackNotifierPlugin\x20=\x20require(\x27webpack-notifier\x27)\x0a\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.(js|jsx)$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20\x27babel-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/node_modules/\x0a\x20\x20\x20\x20\x20\x20},\x0a','stylings','scss','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.less$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27less-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.css$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20importLoaders:\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20modules:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20localIdentName:\x20\x27[hash:base64:32]\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20include:\x20/\x5c.module\x5c.css$/\x0a\x20\x20\x20\x20\x20\x20},\x0a','image_loader','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.svg$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27file-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name:\x20\x27[name]_[hash:8].[ext]\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20publicPath:\x20\x27/images\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outputPath:\x20\x27../images\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.png$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27url-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mimetype:\x20\x27image/png\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a','\x20\x20\x20\x20]\x0a\x20\x20},\x0a','\x20\x20resolve:\x20{\x0a\x20\x20\x20\x20extensions:\x20[\x0a\x20\x20\x20\x20\x20\x20\x27.js\x27,\x0a\x20\x20\x20\x20\x20\x20\x27.jsx\x27\x0a\x20\x20\x20\x20]\x0a\x20\x20},\x0a','\x20\x20resolve:\x20{\x0a\x20\x20\x20\x20extensions:\x20[\x0a\x20\x20\x20\x20\x20\x20\x27.js\x27,\x0a\x20\x20\x20\x20\x20\x20\x27.vue\x27\x0a\x20\x20\x20\x20]\x0a\x20\x20},\x0a','\x20\x20plugins:\x20[\x0a\x20\x20\x20\x20new\x20WebpackNotifierPlugin({\x20alwaysNotify:\x20true\x20}),\x0a','\x20\x20\x20\x20new\x20LodashModuleReplacementPlugin,\x0a','moment','\x20\x20\x20\x20new\x20webpack.ContextReplacementPlugin(/moment[\x5c/\x5c\x5c]locale$/,\x20/en/),\x0a','\x20\x20\x20\x20new\x20VueLoaderPlugin(),\x0a','readFileSync','/package.json','parse','start','nodemon\x20./bin/www','dev','webpack\x20-d\x20--progress\x20--watch\x20--mode=development','scripts','prod','npm\x20run\x20production','production','webpack\x20-p\x20--progress\x20--mode=production','dependencies','nodemon','devDependencies','webpack','^4.29.6','webpack-cli','^1.7.0','react-dom','^16.8.5','^7.0.0','babel-loader','^8.0.5','@babel/core','^7.4.0','@babel/preset-env','^10.0.1','^5.15.3','eslint-config-standard','^12.0.0','eslint-plugin-import','eslint-plugin-jsx-a11y','eslint-plugin-node','^8.0.1','eslint-plugin-promise','^4.0.1','eslint-plugin-react','^7.12.4','eslint-plugin-standard','^4.0.0','react-router-dom','^2.6.10','vue-loader','^15.7.0','vue-template-compiler','^7.4.2','eslint-friendly-formatter','^1.7.1','^2.16.0','vue-router','css-loader','^2.1.1','style-loader','sass-loader','^7.1.0','node-sass','^4.11.0','less-loader','^4.1.0','^3.9.0','^3.0.2','^0.54.5','file-loader','url-loader','^1.1.2','^2.24.0','lodash-webpack-plugin','writeFileSync','yellow','type','toLowerCase','windows','log','\x0a#================================\x0a','----------\x20','hex','#00ffe7','visible','Project\x20initialization\x20finished!','\x20----------','To\x20get\x20started:\x0a','\x20\x20\x20\x20Run:\x20','npm\x20install','\x20(to\x20install\x20dependencies)','npm\x20start','\x20(to\x20start\x20backend)','npm\x20run\x20dev','\x20(in\x20another\x20terminal\x20window,\x20to\x20build\x20frontend\x20in\x20developement\x20mode)','\x20\x20\x20\x20Open\x20your\x20browser,\x20your\x20app\x20will\x20be\x20hosted\x20at:\x20','http://localhost:3000','\x20\x20\x20\x20For\x20production\x20build,\x20run:\x20','npm\x20run\x20prod','Thank\x20you\x20for\x20using\x20this\x20package','\x09\x09----------\x20','\x20----------\x0a','get','ok_hand','star2','bulb','Creator:\x20Mai\x20Trung\x20Duc\x20<maitrungduc1410@gmail.com>','copy','npm\x20install\x20-g\x20express-generator','express\x20--view=','\x5ctemplates\x5cviews\x5cindex.','\x22\x20\x22','\x5cviews\x22','\x5ctemplates\x5cwebpack.config.js\x22\x20\x22','mkdir\x20\x22','\x5cviews\x5cfrontend\x22\x20&&\x20mkdir\x20\x22','\x5cviews\x5cfrontend\x5cjs\x22\x20&&\x20','\x5ctemplates\x5cviews\x5cfrontend\x5c','\x5c\x22\x20\x22','\x5cviews\x5cfrontend\x5cjs\x22','\x5ctemplates\x5ceslint\x5c.eslintrc.','.js\x22\x20\x22','\x5c.babelrc\x22','\x5ctemplates\x5cgit_ignore\x22\x20\x22','\x5c.gitignore\x22','/templates/views/index.','/views\x22','/views/frontend\x22\x20&&\x20mkdir\x20\x22','/views/frontend/js\x22\x20&&\x20','\x20-r\x20\x22','/\x22\x20\x22','/templates/eslint/.eslintrc.','/.eslintrc.js\x22','/.babelrc\x22','/templates/git_ignore\x22\x20\x22','/.gitignore\x22','/app.js','readFile','utf8','replace','var\x20express\x20=\x20require(\x27express\x27);','var\x20app\x20=\x20express();','var\x20app\x20=\x20express();\x0aapp.use(helmet());','writeFile','inquirer','child_process','process','node-emoji','chalk','cwd','EJS','ejs','Pug','Jade','jade','Hbs','hbs','hjs','Twig','twig','Vash','vash','react','VueJS','vue','Babel','babel','typescript','CSS','css','Less','less','Stylus','stylus','CSS\x20Modules','css_modules','SASS\x20Modules','sass_modules','SVG','svg','PNG','png','Lodash','lodash','prompt','input','Project\x20name:\x20','list','Express\x20View\x20Engine','backend','frontend','Using\x20with\x20React-router/Vue-router','router','Yes','with-router','no-router','transpiler'];(function(_0x273f43,_0x1a3508){var _0x185642=function(_0x3ffcc7){while(--_0x3ffcc7){_0x273f43['push'](_0x273f43['shift']());}};_0x185642(++_0x1a3508);}(_0x36df,0x18d));var _0x414f=function(_0x12b779,_0x38bc5b){_0x12b779=_0x12b779-0x0;var _0xbf42dc=_0x36df[_0x12b779];return _0xbf42dc;};var inquirer=require(_0x414f('0x0'));const {execSync}=require(_0x414f('0x1'));const process=require(_0x414f('0x2'));const fs=require('fs');var emoji=require(_0x414f('0x3'));const chalk=require(_0x414f('0x4'));var os=require('os');const CURR_DIR=process[_0x414f('0x5')]();let templateEngines=[{'name':_0x414f('0x6'),'checked':!![],'value':_0x414f('0x7')},{'name':_0x414f('0x8'),'value':'pug'},{'name':_0x414f('0x9'),'value':_0x414f('0xa')},{'name':_0x414f('0xb'),'value':_0x414f('0xc')},{'name':'Hjs','value':_0x414f('0xd')},{'name':_0x414f('0xe'),'value':_0x414f('0xf')},{'name':_0x414f('0x10'),'value':_0x414f('0x11')}];let frontendFrameworks=[{'name':'ReactJS','checked':!![],'value':_0x414f('0x12')},{'name':_0x414f('0x13'),'value':_0x414f('0x14')}];let transpilers=[{'name':_0x414f('0x15'),'checked':!![],'value':_0x414f('0x16')},{'name':'Typescript\x20(not\x20supported','value':_0x414f('0x17'),'disabled':!![]}];let stylings=[{'name':_0x414f('0x18'),'checked':!![],'value':_0x414f('0x19')},{'name':'SCSS','checked':!![],'value':'scss'},{'name':_0x414f('0x1a'),'value':_0x414f('0x1b')},{'name':_0x414f('0x1c'),'value':_0x414f('0x1d')}];let cssModules=[{'name':_0x414f('0x1e'),'checked':!![],'value':_0x414f('0x1f')},{'name':_0x414f('0x20'),'checked':!![],'value':_0x414f('0x21')}];let imageLoaders=[{'name':_0x414f('0x22'),'value':_0x414f('0x23')},{'name':_0x414f('0x24'),'value':_0x414f('0x25')}];let ultilities=[{'name':'MomentJS','value':'moment'},{'name':_0x414f('0x26'),'value':_0x414f('0x27')}];inquirer[_0x414f('0x28')]([{'type':_0x414f('0x29'),'message':_0x414f('0x2a'),'name':'project_name','default':'my_app'},{'type':_0x414f('0x2b'),'message':_0x414f('0x2c'),'name':_0x414f('0x2d'),'choices':templateEngines},{'type':_0x414f('0x2b'),'message':'Frontend\x20Framework','name':_0x414f('0x2e'),'choices':frontendFrameworks},{'type':_0x414f('0x2b'),'message':_0x414f('0x2f'),'name':_0x414f('0x30'),'choices':[{'name':_0x414f('0x31'),'value':_0x414f('0x32'),'checked':!![]},{'name':'No','value':_0x414f('0x33')}]},{'type':_0x414f('0x2b'),'message':'Transpiler','name':_0x414f('0x34'),'choices':transpilers},{'type':_0x414f('0x35'),'message':_0x414f('0x36'),'name':'stylings','choices':stylings,'validate':function(_0x4ddbe5){if(_0x4ddbe5[_0x414f('0x37')]<0x1){return _0x414f('0x38');}return!![];}},{'type':_0x414f('0x35'),'message':_0x414f('0x39'),'name':_0x414f('0x1f'),'choices':cssModules},{'type':_0x414f('0x35'),'message':_0x414f('0x3a'),'name':'image_loader','choices':imageLoaders},{'type':'checkbox','message':_0x414f('0x3b'),'name':_0x414f('0x3c'),'choices':ultilities},{'type':_0x414f('0x2b'),'message':'Using\x20Eslint?','name':_0x414f('0x3d'),'choices':[{'name':_0x414f('0x31'),'value':_0x414f('0x3e')},{'name':'No','value':'no'}]},{'type':'list','message':'Do\x20you\x20want\x20to\x20use\x20Helmet\x20for\x20security?\x20(recommended)','name':_0x414f('0x3f'),'choices':[{'name':'Yes','value':_0x414f('0x3e')},{'name':'No','value':'no'}]}])[_0x414f('0x40')](_0x179ef1=>{copyRequiredFiles(_0x179ef1);writeContentToWebpackFile(_0x179ef1);writeContentToPackageJson(_0x179ef1);printOnSuccess(_0x179ef1);});function writeContentToWebpackFile(_0x1990c2){fs['appendFileSync'](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),'const\x20webpack\x20=\x20require(\x27webpack\x27)\x0a');fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x44'));if(_0x1990c2[_0x414f('0x3c')][_0x414f('0x45')](_0x414f('0x27'))){fs['appendFileSync'](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),'const\x20LodashModuleReplacementPlugin\x20=\x20require(\x27lodash-webpack-plugin\x27)\x0a');}if(_0x1990c2[_0x414f('0x2e')]===_0x414f('0x14')){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),'const\x20VueLoaderPlugin\x20=\x20require(\x27vue-loader/lib/plugin\x27)\x0a');}fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2['project_name']+_0x414f('0x42'),_0x414f('0x46'));fs['appendFileSync'](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),'const\x20config\x20=\x20{\x0a\x20\x20entry:\x20\x27./views/frontend/js/index.js\x27,\x0a\x20\x20output:\x20{\x0a\x20\x20\x20\x20path:\x20path.resolve(__dirname,\x20\x27public/javascripts\x27),\x0a\x20\x20\x20\x20filename:\x20\x27app.js\x27\x0a\x20\x20},\x0a\x20\x20module:\x20{\x0a\x20\x20\x20\x20rules:\x20[\x0a');if(_0x1990c2[_0x414f('0x2e')]==='react'){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2['project_name']+_0x414f('0x42'),_0x414f('0x47'));}else if(_0x1990c2['frontend']===_0x414f('0x14')){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),'\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/.vue$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27vue-loader\x27\x0a\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/.js$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20\x27babel-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/node_modules/\x0a\x20\x20\x20\x20\x20\x20},\x0a');}if(_0x1990c2[_0x414f('0x48')][_0x414f('0x45')](_0x414f('0x19'))){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),'\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.css$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/\x5c.module\x5c.css$/\x0a\x20\x20\x20\x20\x20\x20},\x0a');}if(_0x1990c2[_0x414f('0x48')][_0x414f('0x45')](_0x414f('0x49'))){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+'/webpack.config.js','\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.scss$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27sass-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20exclude:\x20/\x5c.module\x5c.scss$/\x0a\x20\x20\x20\x20\x20\x20},\x0a');}if(_0x1990c2[_0x414f('0x48')]['includes'](_0x414f('0x1b'))){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x4a'));}if(_0x1990c2[_0x414f('0x48')][_0x414f('0x45')]('stylus')){fs['appendFileSync'](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),'\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.styl$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27stylus-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20},\x0a');}if(_0x1990c2[_0x414f('0x1f')][_0x414f('0x45')](_0x414f('0x1f'))){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x4b'));}if(_0x1990c2[_0x414f('0x1f')][_0x414f('0x45')]('sass_modules')){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2['project_name']+_0x414f('0x42'),'\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20test:\x20/\x5c.scss$/,\x0a\x20\x20\x20\x20\x20\x20\x20\x20use:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27style-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20loader:\x20\x27css-loader\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20options:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20importLoaders:\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20modules:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20localIdentName:\x20\x27[hash:base64:32]\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27sass-loader\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20include:\x20/\x5c.module\x5c.scss$/\x0a\x20\x20\x20\x20\x20\x20},\x0a');}if(_0x1990c2[_0x414f('0x4c')][_0x414f('0x45')](_0x414f('0x23'))){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x4d'));}if(_0x1990c2[_0x414f('0x4c')]['includes']('png')){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x4e'));}fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x4f'));if(_0x1990c2['frontend'][_0x414f('0x45')]('react')){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x50'));}else if(_0x1990c2['frontend'][_0x414f('0x45')](_0x414f('0x14'))){fs['appendFileSync'](CURR_DIR+'/'+_0x1990c2['project_name']+_0x414f('0x42'),_0x414f('0x51'));}fs['appendFileSync'](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x52'));if(_0x1990c2[_0x414f('0x3c')]['includes'](_0x414f('0x27'))){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+'/webpack.config.js',_0x414f('0x53'));}if(_0x1990c2[_0x414f('0x3c')][_0x414f('0x45')](_0x414f('0x54'))){fs['appendFileSync'](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x55'));}if(_0x1990c2['frontend']===_0x414f('0x14')){fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),_0x414f('0x56'));}fs[_0x414f('0x43')](CURR_DIR+'/'+_0x1990c2[_0x414f('0x41')]+_0x414f('0x42'),'\x20\x20]\x0a}\x0a\x0amodule.exports\x20=\x20config\x0a');}function writeContentToPackageJson(_0x5ade6d){let _0x163665=fs[_0x414f('0x57')](CURR_DIR+'/'+_0x5ade6d['project_name']+_0x414f('0x58'));let _0x216ccb=JSON[_0x414f('0x59')](_0x163665);_0x216ccb['scripts'][_0x414f('0x5a')]=_0x414f('0x5b');_0x216ccb['scripts'][_0x414f('0x5c')]=_0x414f('0x5d');_0x216ccb[_0x414f('0x5e')][_0x414f('0x5f')]=_0x414f('0x60');_0x216ccb[_0x414f('0x5e')][_0x414f('0x61')]=_0x414f('0x62');_0x216ccb[_0x414f('0x63')][_0x414f('0x64')]='^1.18.10';if(_0x5ade6d[_0x414f('0x3f')]==='yes'){_0x216ccb[_0x414f('0x63')]['helmet']='^3.16.0';}if(!_0x216ccb[_0x414f('0x65')]){_0x216ccb[_0x414f('0x65')]={};}_0x216ccb['devDependencies'][_0x414f('0x66')]=_0x414f('0x67');_0x216ccb[_0x414f('0x65')][_0x414f('0x68')]='^3.3.0';_0x216ccb[_0x414f('0x65')]['webpack-notifier']=_0x414f('0x69');if(_0x5ade6d[_0x414f('0x2e')]==='react'){_0x216ccb[_0x414f('0x63')][_0x414f('0x6a')]=_0x414f('0x6b');_0x216ccb[_0x414f('0x63')][_0x414f('0x12')]='^16.8.5';_0x216ccb['devDependencies']['@babel/preset-react']=_0x414f('0x6c');_0x216ccb[_0x414f('0x65')][_0x414f('0x6d')]=_0x414f('0x6e');_0x216ccb[_0x414f('0x65')][_0x414f('0x6f')]=_0x414f('0x70');_0x216ccb['devDependencies'][_0x414f('0x71')]='^7.4.2';_0x216ccb['devDependencies']['@babel/plugin-proposal-class-properties']=_0x414f('0x70');if(_0x5ade6d[_0x414f('0x3d')]===_0x414f('0x3e')){_0x216ccb[_0x414f('0x65')]['babel-eslint']=_0x414f('0x72');_0x216ccb[_0x414f('0x65')][_0x414f('0x3d')]=_0x414f('0x73');_0x216ccb[_0x414f('0x65')][_0x414f('0x74')]=_0x414f('0x75');_0x216ccb[_0x414f('0x65')][_0x414f('0x76')]='^2.16.0';_0x216ccb[_0x414f('0x65')][_0x414f('0x77')]='^6.2.1';_0x216ccb['devDependencies'][_0x414f('0x78')]=_0x414f('0x79');_0x216ccb[_0x414f('0x65')][_0x414f('0x7a')]=_0x414f('0x7b');_0x216ccb[_0x414f('0x65')][_0x414f('0x7c')]=_0x414f('0x7d');_0x216ccb[_0x414f('0x65')][_0x414f('0x7e')]=_0x414f('0x7f');}if(_0x5ade6d[_0x414f('0x30')]===_0x414f('0x32')){_0x216ccb[_0x414f('0x63')][_0x414f('0x80')]='^5.0.0';}}else if(_0x5ade6d['frontend']===_0x414f('0x14')){_0x216ccb['dependencies'][_0x414f('0x14')]=_0x414f('0x81');_0x216ccb[_0x414f('0x65')][_0x414f('0x82')]=_0x414f('0x83');_0x216ccb['devDependencies'][_0x414f('0x84')]=_0x414f('0x81');_0x216ccb[_0x414f('0x65')][_0x414f('0x6d')]=_0x414f('0x6e'),_0x216ccb[_0x414f('0x65')]['@babel/core']='^7.4.0',_0x216ccb[_0x414f('0x65')][_0x414f('0x71')]=_0x414f('0x85');if(_0x5ade6d[_0x414f('0x3d')]===_0x414f('0x3e')){_0x216ccb['devDependencies']['babel-eslint']=_0x414f('0x72');_0x216ccb[_0x414f('0x65')]['eslint']='^5.15.3';_0x216ccb[_0x414f('0x65')][_0x414f('0x74')]=_0x414f('0x75');_0x216ccb[_0x414f('0x65')][_0x414f('0x86')]='^3.0.0';_0x216ccb[_0x414f('0x65')]['eslint-loader']=_0x414f('0x87');_0x216ccb[_0x414f('0x65')][_0x414f('0x76')]=_0x414f('0x88');_0x216ccb[_0x414f('0x65')]['eslint-plugin-node']=_0x414f('0x79');_0x216ccb['devDependencies'][_0x414f('0x7a')]='^4.0.1';_0x216ccb[_0x414f('0x65')][_0x414f('0x7e')]='^4.0.0';_0x216ccb[_0x414f('0x65')]['eslint-plugin-vue']='^4.0.0';}if(_0x5ade6d[_0x414f('0x30')]===_0x414f('0x32')){_0x216ccb['dependencies'][_0x414f('0x89')]='^3.0.1';}}_0x216ccb[_0x414f('0x65')][_0x414f('0x8a')]=_0x414f('0x8b');_0x216ccb[_0x414f('0x65')][_0x414f('0x8c')]='^0.23.1';if(_0x5ade6d[_0x414f('0x48')]['includes'](_0x414f('0x49'))){_0x216ccb[_0x414f('0x65')][_0x414f('0x8d')]=_0x414f('0x8e');_0x216ccb[_0x414f('0x65')][_0x414f('0x8f')]=_0x414f('0x90');}if(_0x5ade6d[_0x414f('0x48')][_0x414f('0x45')](_0x414f('0x1b'))){_0x216ccb['devDependencies'][_0x414f('0x91')]=_0x414f('0x92');_0x216ccb['devDependencies']['less']=_0x414f('0x93');}if(_0x5ade6d[_0x414f('0x48')][_0x414f('0x45')](_0x414f('0x1d'))){_0x216ccb['devDependencies']['stylus-loader']=_0x414f('0x94');_0x216ccb['devDependencies'][_0x414f('0x1d')]=_0x414f('0x95');}if(_0x5ade6d['image_loader'][_0x414f('0x45')](_0x414f('0x23'))){_0x216ccb[_0x414f('0x65')][_0x414f('0x96')]='^3.0.1';}if(_0x5ade6d[_0x414f('0x4c')][_0x414f('0x45')]('svg')){_0x216ccb[_0x414f('0x65')][_0x414f('0x97')]=_0x414f('0x98');}if(_0x5ade6d[_0x414f('0x3c')][_0x414f('0x45')](_0x414f('0x54'))){_0x216ccb[_0x414f('0x63')][_0x414f('0x54')]=_0x414f('0x99');}if(_0x5ade6d['ultilities'][_0x414f('0x45')](_0x414f('0x27'))){_0x216ccb[_0x414f('0x63')][_0x414f('0x27')]='^4.17.11';_0x216ccb[_0x414f('0x65')][_0x414f('0x9a')]='^0.11.5';}fs[_0x414f('0x9b')](CURR_DIR+'/'+_0x5ade6d[_0x414f('0x41')]+_0x414f('0x58'),JSON['stringify'](_0x216ccb,null,'\x20\x20'));}function printOnSuccess(_0xb1fc1e){let _0x5ed518=chalk[_0x414f('0x9c')]('cd\x20'+_0xb1fc1e[_0x414f('0x41')]);if(os[_0x414f('0x9d')]()[_0x414f('0x9e')]()[_0x414f('0x45')](_0x414f('0x9f'))){console[_0x414f('0xa0')](_0x414f('0xa1'));console[_0x414f('0xa0')](_0x414f('0xa2')+chalk[_0x414f('0xa3')](_0x414f('0xa4'))[_0x414f('0xa5')](_0x414f('0xa6'))+_0x414f('0xa7'));console[_0x414f('0xa0')](_0x414f('0xa1'));console[_0x414f('0xa0')](_0x414f('0xa8'));console[_0x414f('0xa0')](_0x414f('0xa9')+_0x5ed518);console['log']('\x20\x20\x20\x20Run:\x20'+chalk['yellow'](_0x414f('0xaa'))+_0x414f('0xab'));console[_0x414f('0xa0')](_0x414f('0xa9')+chalk[_0x414f('0x9c')](_0x414f('0xac'))+_0x414f('0xad'));console[_0x414f('0xa0')](_0x414f('0xa9')+chalk[_0x414f('0x9c')](_0x414f('0xae'))+_0x414f('0xaf'));console[_0x414f('0xa0')](_0x414f('0xb0')+chalk['yellow'](_0x414f('0xb1'))+'\x0a');console[_0x414f('0xa0')](_0x414f('0xb2')+chalk[_0x414f('0x9c')](_0x414f('0xb3'))+'\x0a');console[_0x414f('0xa0')]('\x0a#================================\x0a');console[_0x414f('0xa0')]('\x09\x09\x09----------\x20'+chalk[_0x414f('0xa3')](_0x414f('0xa4'))[_0x414f('0xa5')](_0x414f('0xb4'))+_0x414f('0xa7'));console['log'](_0x414f('0xb5')+chalk[_0x414f('0xa3')](_0x414f('0xa4'))[_0x414f('0xa5')]('Creator:\x20Mai\x20Trung\x20Duc\x20<maitrungduc1410@gmail.com>')+_0x414f('0xb6'));}else{console[_0x414f('0xa0')]('\x0a#================================\x0a');console['log'](emoji[_0x414f('0xb7')](_0x414f('0xb8'))+'\x20'+chalk[_0x414f('0xa3')](_0x414f('0xa4'))[_0x414f('0xa5')](_0x414f('0xa6'))+'\x20'+emoji[_0x414f('0xb7')](_0x414f('0xb8')));console['log'](_0x414f('0xa1'));console['log'](_0x414f('0xa8'));console[_0x414f('0xa0')](_0x414f('0xa9')+_0x5ed518);console['log'](_0x414f('0xa9')+chalk[_0x414f('0x9c')]('npm\x20install')+_0x414f('0xab'));console['log'](_0x414f('0xa9')+chalk[_0x414f('0x9c')]('npm\x20start')+_0x414f('0xad'));console[_0x414f('0xa0')](_0x414f('0xa9')+chalk[_0x414f('0x9c')](_0x414f('0xae'))+_0x414f('0xaf'));console['log'](_0x414f('0xb0')+chalk[_0x414f('0x9c')](_0x414f('0xb1'))+'\x0a');console[_0x414f('0xa0')](_0x414f('0xb2')+chalk[_0x414f('0x9c')](_0x414f('0xb3'))+'\x0a');console[_0x414f('0xa0')]('\x0a#================================\x0a');console[_0x414f('0xa0')]('\x09\x09\x09'+emoji['get'](_0x414f('0xb9'))+'\x20'+chalk[_0x414f('0xa3')](_0x414f('0xa4'))[_0x414f('0xa5')](_0x414f('0xb4'))+'\x20'+emoji[_0x414f('0xb7')](_0x414f('0xb9')));console[_0x414f('0xa0')]('\x09\x09'+emoji[_0x414f('0xb7')](_0x414f('0xba'))+'\x20'+chalk[_0x414f('0xa3')](_0x414f('0xa4'))[_0x414f('0xa5')](_0x414f('0xbb'))+'\x20'+emoji[_0x414f('0xb7')](_0x414f('0xba'))+'\x0a');}}function copyRequiredFiles(_0x32996c){let _0x8c6f23=os[_0x414f('0x9d')]()['toLowerCase']()[_0x414f('0x45')]('windows')?_0x414f('0xbc'):'cp';let _0x4116b4='';execSync(_0x414f('0xbd'));execSync(_0x414f('0xbe')+_0x32996c[_0x414f('0x2d')]+'\x20'+_0x32996c[_0x414f('0x41')]);if(os[_0x414f('0x9d')]()['toLowerCase']()[_0x414f('0x45')]('windows')){execSync(_0x8c6f23+'\x20\x22'+__dirname+_0x414f('0xbf')+_0x32996c[_0x414f('0x2d')]+_0x414f('0xc0')+CURR_DIR+'\x5c'+_0x32996c['project_name']+_0x414f('0xc1'));execSync(_0x8c6f23+'\x20\x22'+__dirname+_0x414f('0xc2')+CURR_DIR+'\x5c'+_0x32996c[_0x414f('0x41')]+'\x22');execSync(_0x414f('0xc3')+CURR_DIR+'\x5c'+_0x32996c['project_name']+_0x414f('0xc4')+CURR_DIR+'\x5c'+_0x32996c[_0x414f('0x41')]+_0x414f('0xc5')+_0x8c6f23+'\x20\x22'+__dirname+_0x414f('0xc6')+_0x32996c['frontend']+'\x5c'+_0x32996c[_0x414f('0x30')]+_0x414f('0xc7')+CURR_DIR+'\x5c'+_0x32996c[_0x414f('0x41')]+_0x414f('0xc8'));if(_0x32996c[_0x414f('0x3d')]===_0x414f('0x3e')){execSync(_0x8c6f23+'\x20\x22'+__dirname+_0x414f('0xc9')+_0x32996c[_0x414f('0x2e')]+_0x414f('0xca')+CURR_DIR+'\x5c'+_0x32996c[_0x414f('0x41')]+'\x5c.eslintrc.js\x22');}if(_0x32996c['transpiler']===_0x414f('0x16')){execSync(_0x8c6f23+'\x20\x22'+__dirname+'\x5ctemplates\x5cbabel\x5c.babelrc.'+_0x32996c[_0x414f('0x2e')]+_0x414f('0xc0')+CURR_DIR+'\x5c'+_0x32996c['project_name']+_0x414f('0xcb'));}execSync(_0x8c6f23+'\x20\x22'+__dirname+_0x414f('0xcc')+CURR_DIR+'\x5c'+_0x32996c[_0x414f('0x41')]+_0x414f('0xcd'));}else{execSync(_0x8c6f23+'\x20\x22'+__dirname+_0x414f('0xce')+_0x32996c[_0x414f('0x2d')]+_0x414f('0xc0')+CURR_DIR+'/'+_0x32996c[_0x414f('0x41')]+_0x414f('0xcf'));execSync(_0x8c6f23+'\x20\x22'+__dirname+'/templates/webpack.config.js\x22\x20\x22'+CURR_DIR+'/'+_0x32996c[_0x414f('0x41')]+'\x22');execSync(_0x414f('0xc3')+CURR_DIR+'/'+_0x32996c[_0x414f('0x41')]+_0x414f('0xd0')+CURR_DIR+'/'+_0x32996c['project_name']+_0x414f('0xd1')+_0x8c6f23+_0x414f('0xd2')+__dirname+'/templates/views/frontend/'+_0x32996c[_0x414f('0x2e')]+'/'+_0x32996c[_0x414f('0x30')]+_0x414f('0xd3')+CURR_DIR+'/'+_0x32996c[_0x414f('0x41')]+'/views/frontend/js\x22');if(_0x32996c['eslint']===_0x414f('0x3e')){execSync(_0x8c6f23+'\x20\x22'+__dirname+_0x414f('0xd4')+_0x32996c[_0x414f('0x2e')]+_0x414f('0xca')+CURR_DIR+'/'+_0x32996c['project_name']+_0x414f('0xd5'));}if(_0x32996c[_0x414f('0x34')]==='babel'){execSync(_0x8c6f23+'\x20\x22'+__dirname+'/templates/babel/.babelrc.'+_0x32996c[_0x414f('0x2e')]+_0x414f('0xc0')+CURR_DIR+'/'+_0x32996c[_0x414f('0x41')]+_0x414f('0xd6'));}execSync(_0x8c6f23+'\x20\x22'+__dirname+_0x414f('0xd7')+CURR_DIR+'/'+_0x32996c[_0x414f('0x41')]+_0x414f('0xd8'));}if(_0x32996c[_0x414f('0x3f')]===_0x414f('0x3e')){let _0x389827=CURR_DIR+'/'+_0x32996c[_0x414f('0x41')]+_0x414f('0xd9');if(_0x8c6f23==='copy'){_0x389827=CURR_DIR+'\x5c'+_0x32996c[_0x414f('0x41')]+'\x5capp.js';}fs[_0x414f('0xda')](_0x389827,_0x414f('0xdb'),function(_0x3f2665,_0x498ee1){if(_0x3f2665){return console[_0x414f('0xa0')](_0x3f2665);}var _0x3684d5=_0x498ee1[_0x414f('0xdc')](_0x414f('0xdd'),'var\x20express\x20=\x20require(\x27express\x27);\x0avar\x20helmet\x20=\x20require(\x27helmet\x27);')[_0x414f('0xdc')](_0x414f('0xde'),_0x414f('0xdf'));fs[_0x414f('0xe0')](_0x389827,_0x3684d5,_0x414f('0xdb'),function(_0x3f2665){if(_0x3f2665)return console[_0x414f('0xa0')](_0x3f2665);});});}}