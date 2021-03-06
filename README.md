# NodeJS Generator

Setup NodeJS-Express project with your favorite frontend frameworks (ReactJS, VueJS) and run on same host, same port by running one command.

## Getting Started
When building project, usually you may want to run your backend and frontend in one host and port, not to proxy it. If that's what you're looking for, so this tool is for you.

This project helps you setup your NodeJS app with frontend frameworks (React, VueJS) in same folder, run on same host, same port. It comes with other setups like Webpack, Babel, CSS module, SCSS, Eslint, ...

### Installing

Install this package by running:
```
npm install -g nodejs-generator
```

## How to use

After install this package. You're now able to create new project using command:
```
nodejs-generator
```

Choose your own project options. Then you're ready to go!

### Running project

After setup new project. Follow these steps to run your project:
```
cd <your_project_name>
npm install
npm start       # to start your project
npm run dev     # to build your frontend
```
Then open your browser at port of your project (default is `3000`)

### Running in production
When running in production, I recommend:
- Building your frontend in production mode by running: `npm run prod` or `npm run production`
- Using a process manager to manage your nodejs app. Like PM2 (I love this), Forever, ...
- You should running your app behind a reverse proxy like Nginx. Configuration your Nginx for Nodejs like [this link](https://gist.github.com/maitrungduc1410/2e3bf24a2acde5cd753e6f07b06e625f) 

### Custom
If you want to change any configuration to fit your own demand, feel free to change the config in `webpack.config.js`, but make sure you know what you do.

## Built With

This tool is build on top of `express-generator`.

## Contributing

If there's any problem, question or any upgrade I should make, just create an issue and let me know.

## Authors

* **Mai Trung Duc** - *Creator*

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/maitrungduc1410/nodejs-generator/blob/master/LICENSE.md) file for details.

## Acknowledgments