'use strict';

const i18nextBuild = require('./i18next-build.js');
const fs = require('fs');

let template = fs.readFileSync('./template.src.js', 'utf8');
let jsonIntl = JSON.parse(fs.readFileSync('./locale/i18n.json', 'utf8'));

i18nextBuild.generateFilesLanguage(template, jsonIntl, 'en');
