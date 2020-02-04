'use strict';

const i18nextBuild = require('./i18next-build.js');
const fs = require('fs');

let template = fs.readFileSync('./locale/template.js', 'utf8');

i18nextBuild.generateFilesLanguage(template);
