'use strict';

const i18next = require('i18next');
// const Backend = require('i18next-node-fs-backend');

// const ESCAPE = '[\'"`]?';
// const WORD = '(\\w*)';
// const jsonRegex = new RegExp(
//   [ESCAPE, WORD, ESCAPE, ':\\s', ESCAPE, WORD, ESCAPE].join(''),
//   ['g']);

// i18next.on('missingKey', function(lngs, namespace, key) {
//   console.log(
//     '[' + lngs + '] key `' + namespace + ':' + key + '` missing'
//   );
// });

module.exports.generateFilesLanguage = (templateJs) => {

  let defaultQuotes = '\'';
  let quotes = '\'';
  // let regex = new RegExp(funcName + 'i18next\.t\\(([\'"`])(.*?)[\'"`](?:,\\s(.*?))?\\)', ['g']);
  let regex = /i18next\.t\(\'(.*)\'\)/gm;

  i18next.init({
    lng: 'en',
    debug: false,
    resources: {
      en: {
        translation: {
          "test": "hello world",
          "test2": "hello world guys",
          "test3": "hello world wouhouw !",
          "testDeep": {
            "inner": "Teddy yeah"
          },
          "day": "Today is {{date}}"
        }
      },
      fr: {
        translation: {
          "test": "bonjour monde",
          "test2": "bonjour monde amis",
          "test3": "bonjour monde wouhouw !",
          "testDeep": {
            "inner": "Teddy wou"
          },
          "day": "Aujourd'hui est {{date}}"
        }
      }
    }
  }, (err, t) => {

    if(err) throw err;

    templateJs = templateJs.replace(regex, function (res, quotes, key, jsonString) {

      quotes = (quotes == '`') ? '`' : defaultQuotes;

      return `${quotes}${i18next.t(res.replace(regex, '$1'))}${quotes}`;

      // if (jsonString) {
      //   var options = {};
      //   jsonString.replace(jsonRegex, function (res, key, value) {
      //     options[key] = value;
      //   });
      // } else {
      //   var options = undefined;
      // }

      // return JSON.stringify(options);
  
      // quotes = (quotes == '`') ? '`' : defaultQuotes;
      // return quotes + 'i18next.t(key, options)' + quotes;

    });

    console.log('result :' + templateJs);
  })
}
