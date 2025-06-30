import { createRequire } from 'module';
const require = createRequire(import.meta.url);





// //P1-loadash

function Fcap(string) {
  return _.capitalize(string);
}

const fcap1 = Fcap("hello electra");
console.log(fcap1);

// //P2-chalk

import _ from 'lodash';
import chalk from 'chalk';

console.log(chalk.blue.bgRed.bold('Hello Electra!'));

// //P3- request

const request = require('request');

request('https://docs.npmjs.com/', function (error, response, body) {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});


// //P4 - commander


const { Command } = require('commander');
const readline = require('readline');
const program = new Command();

program
  .command('say <name>')
  .description('Say something interesting')
  .action(function(name){
    console.log('Hello :', name);
  });

function askForCommand() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please type your command (e.g. type say, and your name): ', (answer) => {
    rl.close();
    const args = answer.split(' ');
    program.parse(['node', 'wrapper.js', ...args]);
  });
}

askForCommand();

// // P5 - react

import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);


// // P6 - express


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Stop the server after 20 seconds
setTimeout(() => {
  server.close(() => {
    console.log('Server stopped after 20 seconds');
  });
}, 20000);



//P7 --async

const async = require('async');

async.series([
  function(callback) {
    setTimeout(() => {
      console.log('Task 1 complete');
      callback(null, 'one');
    }, 1000);
  },
  function(callback) {
    setTimeout(() => {
      console.log('Task 2 complete');
      callback(null, 'two');
    }, 500);
  }
],
// fiinal callback
function(err, results) {
  if (err) {
    console.error(err);
  } else {
    console.log('All tasks done');
    console.log(results); 
  }
});



//P8 - fs-extra


import fs from 'fs-extra';

async function createFileIfNotExists() {
  const filePath = 'Users\amushanamwar\Desktop\code\output.txt';

  try {
    await fs.ensureFile(filePath);
    console.log(`The file ${filePath} is ready to use.`);
  } catch (err) {
    console.error('Error ensuring file:', err);
  }
}

createFileIfNotExists();


// P9 - moment

import moment from 'moment';

console.log(moment().format());


//P10 - prop-types

import PropTypes from 'prop-types';

const myPropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  };

const props = {
  name: 'hello', // is valid
  age: 'world', // not valid
};

PropTypes.checkPropTypes(myPropTypes, props, 'prop', 'MyComponent');


//P11 -react-dom




import React from 'react';
import { renderToString } from 'react-dom/server';

function App() {
  return React.createElement('h1', null, 'Hello Aditya');
}

const html = renderToString(React.createElement(App));
console.log(html);




//P12 - bluebird



var Promise = require("bluebird");
var request = Promise.promisify(require("request"));

function clientError(e) {
    return e.code >= 400 && e.code < 500;
}

request("http://www.google.com").then(function(contents){
    console.log(contents);
}).catch(clientError, function(e){
   //A client error like 400 Bad Request happened
});


//P13 --underscore


import * as _ from 'underscore';

console.log(_.range(10));


// P14 -- vue


import { reactive } from 'vue';

const state = reactive({ count: 8 });
console.log('Before:', state);

state.count++;
console.log('After:', state);



// P15 -- axios


const axios = require('axios');

axios.get('https://nodejs.org/en/download/dt/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


//P16--- tslib


const tslib = require('tslib');

const a = { Adi: 1,
    ADDD:
 };
const b = { AD: 2 };

const c = tslib.__assign({}, a, b);
console.log(c);



//P17 --glob


import { glob } from 'glob';

// get all JS files, ignoring node_modules
const jsfiles = await glob('**/*.js', { ignore: 'node_modules/**' });
console.log(jsfiles);

// stop after 100ms if not finished
try {
  const stopAfter100ms = await glob('**/*.css', {
    signal: AbortSignal.timeout(100),
  });
  console.log(stopAfter100ms);
} catch (err) {
  if (err.name === 'AbortError') {
    console.error('Glob was aborted due to timeout');
  } else {
    console.error('Error:', err);
  }
}


//P18 - mkdirp


import { mkdirp } from 'mkdirp';

mkdirp('C:/Users/amushanamwar/Desktop/code').then(hello =>
  console.log(`made directories, starting with ${hello}`)
);



// P19 --yargs

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('name', {
    alias: 'n',
    type: 'string',
    description: 'Your name',
    default: 'Aditya'
  })
  .option('age', {
    alias: 'a',
    type: 'number',
    description: 'Your age',
    default: 29
  })
  .help()
  .argv;

console.log(`Hello, ${argv.name}! You are ${argv.age} years old.`);

//P20

var colors = require('colors');
console.log('hello'.red);

//P21


import inquirer from 'inquirer';

inquirer
  .prompt([
    { type: 'input', name: 'name', message: 'Your name?' }
  ])
  .then((ans) => console.log(`Hello, ${ans.name}`))


//P22 -  webpack

//23 - uuid

import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());
console.log(uuidv4());



import { v5 as uuidv5 } from 'uuid';

const url = 'https://www.w3.org/';
const id = uuidv5(url, uuidv5.URL);

console.log(`UUID for ${url}user/${id}`);


//P24 classnames


const classNames = require('classnames');

const result = classNames('foo', 'bar');
console.log(result);



//P25 - minimist

node wrapper.js Adi Addy -a beep -b boop

import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));
console.log(argv);


//P26 - body-parser -- used GPT generated

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


//P27 --rxjs

import { range, filter, map } from 'rxjs';

range(1, 20)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));


 
//28 - babel-runtime

// P29 jquery for browser

//p30 yeoman-generator --GPT


import Generator from 'yeoman-generator';

export default class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      { type: 'input', name: 'projectName', message: 'Your project name' }
    ]);
  }

  writing() {
    this.fs.write(this.destinationPath('README.md'), `# ${this.answers.projectName}`);
  }
}

//P31 -- through2 

import through2 from 'through2';


process.stdin
  .pipe(through2(function (chunk, _, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }))
  .pipe(process.stdout);


//P32 babel-core --GPT


import { transformSync } from '@babel/core';

const result = transformSync('const x = () => 42;', {
  presets: ['@babel/preset-env']
});

console.log(result.code); // transpiled code


//P33 core-js cp from repo not workin

import 'core-js/actual';

Promise.resolve(42).then(it => console.log(it)); // => 42

Array.from(new Set([1, 2, 3]).union(new Set([3, 4, 5]))); // => [1, 2, 3, 4, 5]

[1, 2].flatMap(it => [it, it]); // => [1, 1, 2, 2]

(function * (i) { while (true) yield i++; })(1)
  .drop(1).take(5)
  .filter(it => it % 2)
  .map(it => it ** 2)
  .toArray(); // => [9, 25]

structuredClone(new Set([1, 2, 3])); // => new Set([1, 2, 3])


//P34 semver


import semver from 'semver';


console.log(semver.valid('1.2.3')); // '1.2.3'
console.log(semver.valid('a.b.c')); // null
console.log(semver.clean('  =v1.2.3   ')); // '1.2.3'
console.log(semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3')); // true
console.log(semver.gt('1.2.3', '9.8.7')); // false
console.log(semver.lt('1.2.3', '9.8.7')); // true
console.log(semver.minVersion('>=1.0.0').version); // '1.0.0'
console.log(semver.valid(semver.coerce('v2'))); // '2.0.0'
console.log(semver.valid(semver.coerce('42.6.7.9.3-alpha'))); // '42.6.7'





//P35 babel-loader 



//P36 -cheerio

import * as cheerio from 'cheerio';
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

console.log($.html());

//P37 - rimraf


import { rimraf } from 'rimraf';

rimraf('./any').then(() => {
  console.log('Folder deleted!');
});

//P38

import Q from 'q';

Q(() => {
  return 'Immediate value from Q';
})
.call()
.then(result => {
  console.log(result);
})

//P39


// import { defineConfig } from "eslint/config";

// export default defineConfig({
//   overrides: [
//     {
//       files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
//       rules: {
//         "prefer-const": "warn",
//         "no-constant-binary-expression": "error",
//       },
//     },
//   ],
// });


//P40

import shell from 'shelljs';
shell.echo('hello world');

P41

const msg: string = "Hello TypeScript";
console.log(msg);


import fs from 'fs';

fs.readFile('file.txt', (err, data) => {
});


//p42 js-yaml

const yaml = require('js-yaml');
const fs   = require('fs');

try {
  const doc = yaml.load(fs.readFileSync('path/example.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}

//P43 -- winston

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console()]
});

logger.info('This is a custom formatted log message!');

//P44

const { createStore } = require('redux');

// Reducer: describes how state changes
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
}

// Create a store
const store = createStore(counter);

// Subscribe to changes
store.subscribe(() => console.log('State:', store.getState()));

// Dispatch some actions
store.dispatch({ type: 'INCREMENT' }); // -> 1
store.dispatch({ type: 'INCREMENT' }); // -> 2
store.dispatch({ type: 'DECREMENT' }); // -> 1

//P45


import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    }
  }
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
});

// Subscribe to log every change
store.subscribe(() => console.log('📦 State:', store.getState()));

// Dispatch some actions
store.dispatch(incremented()); // value: 1
store.dispatch(incremented()); // value: 2
store.dispatch(decremented()); // value: 1


//P46


const objectAssign = require('object-assign');

// Simple merge
const a = objectAssign({ foo: 0 }, { bar: 1 });
console.log(a); // { foo: 0, bar: 1 }

// Multiple sources
const b = objectAssign({ foo: 0 }, { bar: 1 }, { baz: 2 });
console.log(b); // { foo: 0, bar: 1, baz: 2 }

// Overwrite keys
const c = objectAssign({ foo: 0 }, { foo: 1 }, { foo: 2 });
console.log(c); // 


//P47-- gulp


const gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src('src/hello.txt') // source file
    .pipe(gulp.dest('dest'));      // destination folder
});


//48

const gutil = require('gulp-util');
gutil.log(gutil.colors.green('Hello, Gulp!'));


//P49


import ora from 'ora';

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'green';
	spinner.text = 'Loading rainbows';
}, 1000);


//P50


import yosay from 'yosay';

console.log(yosay('Hello, and welcome to Planet!'));