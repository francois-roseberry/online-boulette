  
const express = require('express');
const app = express();
const http = require('http').Server(app);
const program = require('commander');

const PORT = 3000;

program
	.version('0.1')
	.option('-w, --webclient <directory>', 'The directory served')
    .parse(process.argv);

app.use(express.static(program.webclient));