#!/usr/bin/env node

var inquirer = require('inquirer')
const { execSync } = require('child_process')
const process = require('process')
const fs = require('fs')
var emoji = require('node-emoji')
const chalk = require('chalk')

const CURR_DIR = process.cwd()

let templateEngines = [
  {
    name: 'EJS',
    checked: true,
    value: 'ejs'
  },
  {
    name: 'Pug',
    value: 'pug'
  },
  {
    name: 'Jade',
    value: 'jade'
  },
  {
    name: 'Hbs',
    value: 'hbs'
  },
  {
    name: 'Hjs',
    value: 'hjs'
  },
  {
    name: 'Twig',
    value: 'twig'
  },
  {
    name: 'Vash',
    value: 'vash'
  }
]

let frontendFrameworks = [
  {
    name: 'ReactJS',
    checked: true,
    value: 'react'
  },
  {
    name: 'VueJS',
    value: 'vue'
  }
]

let transpilers = [
  {
    name: 'Babel',
    checked: true,
    value: 'babel'
  },
  {
    name: 'Typescript (not supported',
    value: 'typescript',
    disabled: true
  }
]

let stylings = [
  {
    name: 'CSS',
    checked: true,
    value: 'css'
  },
  {
    name: 'SCSS',
    checked: true,
    value: 'scss'
  },
  {
    name: 'Less',
    value: 'less'
  },
  {
    name: 'Stylus',
    value: 'stylus'
  }
]

let cssModules = [
  {
    name: 'CSS Modules',
    checked: true,
    value: 'css_modules'
  },
  {
    name: 'SASS Modules',
    checked: true,
    value: 'sass_modules'
  }
]

let imageLoaders = [
  {
    name: 'SVG',
    value: 'svg'
  },
  {
    name: 'PNG',
    value: 'png'
  }
]

let ultilities = [
  {
    name: 'MomentJS',
    value: 'moment'
  },
  {
    name: 'Lodash',
    value: 'lodash'
  }
]

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project name: ',
      name: 'project_name',
      default: 'my_app'
    },
    {
      type: 'list',
      message: 'Express View Engine',
      name: 'backend',
      choices: templateEngines
    },
    {
      type: 'list',
      message: 'Frontend Framework',
      name: 'frontend',
      choices: frontendFrameworks
    },
    {
      type: 'list',
      message: 'Using with React-router/Vue-router',
      name: 'router',
      choices: [
        {
          name: 'Yes',
          value: 'with-router',
          checked: true
        },
        {
          name: 'No',
          value: 'no-router'
        }
      ]
    },
    {
      type: 'list',
      message: 'Transpiler',
      name: 'transpiler',
      choices: transpilers
    },
    {
      type: 'checkbox',
      message: 'Styling',
      name: 'stylings',
      choices: stylings,
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one option.';
        }

        return true;
      }
    },
    {
      type: 'checkbox',
      message: 'Using CSS/SASS modules',
      name: 'css_modules',
      choices: cssModules
    },
    {
      type: 'checkbox',
      message: 'Image loader',
      name: 'image_loader',
      choices: imageLoaders
    },
    {
      type: 'checkbox',
      message: 'Ultilities',
      name: 'ultilities',
      choices: ultilities
    },
    {
      type: 'list',
      message: 'Using Eslint?',
      name: 'eslint',
      choices: [
        {
          name: 'Yes',
          value: 'yes'
        },
        {
          name: 'No',
          value: 'no'
        }
      ]
    },
    {
      type: 'list',
      message: 'Do you want to use Helmet for security? (recommended)',
      name: 'helmet',
      choices: [
        {
          name: 'Yes',
          value: 'yes'
        },
        {
          name: 'No',
          value: 'no'
        }
      ]
    }
  ])
  .then(answers => {
    // create express project
    execSync(`express --view=${answers.backend} ${answers.project_name}`)

    // overwrite express views file
    execSync(`cp ${__dirname}/templates/views/index.${answers.backend} ${CURR_DIR}/${answers.project_name}/views`)
    
    // create webpack config
    execSync(`cp ${__dirname}/templates/webpack.config.js ${CURR_DIR}/${answers.project_name}`)

    // create frontend
    execSync(`mkdir ${CURR_DIR}/${answers.project_name}/views/frontend && mkdir ${CURR_DIR}/${answers.project_name}/views/frontend/js && cp -r ${__dirname}/templates/views/frontend/${answers.frontend}/${answers.router}/ ${CURR_DIR}/${answers.project_name}/views/frontend/js`)
  
    // copy eslint config
    if (answers.eslint === 'yes') {
      execSync(`cp ${__dirname}/templates/eslint/.eslintrc.${answers.frontend}.js ${CURR_DIR}/${answers.project_name}/.eslintrc.js`)
    }

    // copy babel config
    if (answers.transpiler === 'babel') {
      execSync(`cp ${__dirname}/templates/babel/.babelrc.${answers.frontend} ${CURR_DIR}/${answers.project_name}/.babelrc`)
    }

    // if use Helmet
    if (answers.helmet === 'yes') {
      fs.readFile(`${CURR_DIR}/${answers.project_name}/app.js`, 'utf8', function (err,data) {
        if (err) {
          return console.log(err)
        }
        var result = data.replace(`var express = require('express');`, `var express = require('express');\nvar helmet = require('helmet');`)
                         .replace('var app = express();', 'var app = express();\napp.use(helmet());')
        // console.log(data.indexOf("var express = require('express');"))
        fs.writeFile(`${CURR_DIR}/${answers.project_name}/app.js`, result, 'utf8', function (err) {
           if (err) return console.log(err)
        })
      })
      // execSync(`cp ${__dirname}/templates/app.helmet.js ${CURR_DIR}/${answers.project_name}/app.js`)
    }

    // copy gitignore
    execSync(`cp ${__dirname}/templates/.gitignore ${CURR_DIR}/${answers.project_name}`)

    writeContentToWebpackFile(answers)
    writeContentToPackageJson(answers)
    
    printOnSuccess(answers)
  })

function writeContentToWebpackFile (answers) {
  fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, "const webpack = require('webpack')\n")
  fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, "const path = require('path')\n")
  
  if (answers.ultilities.includes('lodash')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, "const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')\n")
  }

  if (answers.frontend === 'vue') {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, "const VueLoaderPlugin = require('vue-loader/lib/plugin')\n")
  }

  fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, "const WebpackNotifierPlugin = require('webpack-notifier')\n\n")

  // write config
  fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`const config = {
  entry: './views/frontend/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'app.js'
  },
  module: {
    rules: [\n`
  )

  if (answers.frontend === 'react') {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },\n`
    )
  } else if (answers.frontend === 'vue') {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },\n`
    )
  }

  if (answers.stylings.includes('css')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\\.module\\.css$/
      },\n`
    )
  }

  if (answers.stylings.includes('scss')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /\\.module\\.scss$/
      },\n`
      )
  }

  if (answers.stylings.includes('less')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },\n`
      )
  }

  if (answers.stylings.includes('stylus')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },\n`
    )
  }

  if (answers.css_modules.includes('css_modules')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[hash:base64:32]'
            }
          }
        ],
        include: /\\.module\\.css$/
      },\n`
    )
  }

  if (answers.css_modules.includes('sass_modules')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[hash:base64:32]'
            }
          },
          'sass-loader'
        ],
        include: /\\.module\\.scss$/
      },\n`
    )
  }

  if (answers.image_loader.includes('svg')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.svg$/,
        use: 'file-loader'
      },\n`
    )
  }

  if (answers.image_loader.includes('png')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`      {
        test: /\\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },\n`
    )
  }

  fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`, 
`    ]
  },\n`
  )

  if (answers.frontend.includes('react')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`,
`  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },\n`
    )
  } else if (answers.frontend.includes('vue')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`,
`  resolve: {
    extensions: [
      '.js',
      '.vue'
    ]
  },\n`
    )
  }

  fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`,
`  plugins: [
    new WebpackNotifierPlugin(),\n`
  )

  if (answers.ultilities.includes('lodash')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`,
`    new LodashModuleReplacementPlugin,\n`
    )
  }

  if (answers.ultilities.includes('moment')) {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`,
`    new webpack.ContextReplacementPlugin(/moment[\\/\\\\]locale$/, /en/),\n`
    )
  }

  if (answers.frontend === 'vue') {
    fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`,
`    new VueLoaderPlugin(),\n`
    )
  }

  fs.appendFileSync(`${CURR_DIR}/${answers.project_name}/webpack.config.js`,
`  ]
}\n
module.exports = config\n`
    )
}

function writeContentToPackageJson (answers) {
  let packageData = fs.readFileSync(`${CURR_DIR}/${answers.project_name}/package.json`)
  let data = JSON.parse(packageData)

  data.scripts['start'] = 'nodemon ./bin/www'
  data.scripts['dev'] = 'webpack -d --progress --watch'
  data.scripts['prod'] = 'npm run production'
  data.scripts['production'] = 'webpack -p --progress'

  data.dependencies['nodemon'] = '^1.18.10'

  if (answers.helmet === 'yes') {
    data.dependencies['helmet'] = '^3.16.0'
  }

  if (!data.devDependencies) {
    data.devDependencies = {}
  }

  data.devDependencies['webpack'] = '^4.29.6'
  data.devDependencies['webpack-cli'] = '^3.3.0'
  data.devDependencies['webpack-notifier'] = '^1.7.0'

  if (answers.frontend === 'react') {
    data.dependencies['react-dom'] = '^16.8.5'
    data.dependencies['react'] = '^16.8.5'

    data.devDependencies['@babel/preset-react'] = '^7.0.0'
    data.devDependencies['babel-loader'] = '^8.0.5'
    data.devDependencies['@babel/core'] = '^7.4.0'
    data.devDependencies['@babel/preset-env'] = '^7.4.2'
    data.devDependencies['@babel/plugin-proposal-class-properties'] = '^7.4.0'
    if (answers.eslint === 'yes') {
      data.devDependencies['babel-eslint'] = '^10.0.1'
      data.devDependencies['eslint'] = '^5.15.3'
      data.devDependencies['eslint-config-standard'] = '^12.0.0'
      data.devDependencies['eslint-plugin-import'] = '^2.16.0'
      data.devDependencies['eslint-plugin-jsx-a11y'] = '^6.2.1'
      data.devDependencies['eslint-plugin-node'] = '^8.0.1'
      data.devDependencies['eslint-plugin-promise'] = '^4.0.1'
      data.devDependencies['eslint-plugin-react'] = '^7.12.4'
      data.devDependencies['eslint-plugin-standard'] = '^4.0.0'
    }

    if (answers.router === 'with-router') {
      data.dependencies['react-router-dom'] = '^5.0.0'
    }
  } else if (answers.frontend === 'vue') {
    data.dependencies['vue'] = '^2.6.10'

    data.devDependencies['vue-loader'] = '^15.7.0'
    data.devDependencies['vue-template-compiler'] = '^2.6.10'
    data.devDependencies['babel-loader'] = '^8.0.5'
    data.devDependencies['@babel/core'] = '^7.4.0'
    data.devDependencies['@babel/preset-env'] = '^7.4.2'
    data.devDependencies['babel-preset-stage-2'] = '^6.22.0'

    // eslint
    if (answers.eslint === 'yes') {
      data.devDependencies['babel-eslint'] = '^10.0.1'
      data.devDependencies['eslint'] = '^5.15.3'
      data.devDependencies['eslint-config-standard'] = '^12.0.0'
      data.devDependencies['eslint-friendly-formatter'] = '^3.0.0'
      data.devDependencies['eslint-loader'] = '^1.7.1'
      data.devDependencies['eslint-plugin-import'] = '^2.16.0'
      data.devDependencies['eslint-plugin-node'] = '^8.0.1'
      data.devDependencies['eslint-plugin-promise'] = '^4.0.1'
      data.devDependencies['eslint-plugin-standard'] = '^4.0.0'
      data.devDependencies['eslint-plugin-vue'] = '^4.0.0'
    }

    if (answers.router === 'with-router') {
      data.dependencies['vue-router'] = '^3.0.1'
    }
  }

  

  data.devDependencies['css-loader'] = '^2.1.1'
  data.devDependencies['style-loader'] = '^0.23.1'

  if (answers.stylings.includes('scss')) {
    data.devDependencies['sass-loader'] = '^7.1.0'
    data.devDependencies['node-sass'] = '^4.11.0'
  }

  if (answers.stylings.includes('less')) {
    data.devDependencies['less-loader'] = '^4.1.0'
    data.devDependencies['less'] = '^3.9.0'
  }

  if (answers.stylings.includes('stylus')) {
    data.devDependencies['stylus-loader'] = '^3.0.2'
    data.devDependencies['stylus'] = '^0.54.5'
  }

  if (answers.image_loader.includes('svg')) {
    data.devDependencies['file-loader'] = '^3.0.1'
  }

  if (answers.image_loader.includes('svg')) {
    data.devDependencies['url-loader'] = '^1.1.2'
  }

  if (answers.ultilities.includes('moment')) {
    data.dependencies['moment'] = '^2.24.0'
  }

  if (answers.ultilities.includes('lodash')) {
    data.dependencies['lodash'] = '^4.17.11'
    data.devDependencies['lodash-webpack-plugin'] = '^0.11.5'
  }

  fs.writeFileSync(`${CURR_DIR}/${answers.project_name}/package.json`, JSON.stringify(data, null, '  '));  
}

function printOnSuccess (answers) {
  console.log(`\n#================================\n`)
  console.log(`${emoji.get('ok_hand')} ${chalk.hex('#00ffe7').visible('Project initialization finished!')} ${emoji.get('ok_hand')}`)
  console.log(`\n#================================\n`)
  console.log('To get started:\n')

  let projectName = chalk.yellow('cd ' + answers.project_name)

  console.log(`    Run: ${projectName}`)
  console.log(`    Run: ${chalk.yellow('npm install')} (to install dependencies)`)
  console.log(`    Run: ${chalk.yellow('npm start')} (to start backend)`)
  console.log(`    Run: ${chalk.yellow('npm run dev')} (in another terminal window, to build frontend in developement mode)`)
  console.log(`    Run: ${chalk.yellow('npm run prod')} (to build frontend in production mode)\n`)
  console.log(`\n#================================\n`)
  console.log(`\t\t\t${emoji.get('star2')} ${chalk.hex('#00ffe7').visible('Thank you for using this package')} ${emoji.get('star2')}`) // returns the emoji code for coffee (displays emoji on terminals that support it)
  console.log(`\t\t${emoji.get('bulb')} ${chalk.hex('#00ffe7').visible('Creator: Mai Trung Duc <maitrungduc1410@gmail.com>')} ${emoji.get('bulb')}`)
}