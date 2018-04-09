'use strict';

const getConn = require('./envservice').getDBConn;
const mysql = require('mysql');

function executeQuery(query) {
  const dbConn = mysql.createConnection(getConn());
  return new Promise((resolve, reject) => {
    if (query.hasOwnProperty('text')) {
      dbConn.query({
        sql: query.text,
        timeout: 15000, // 15sec
        values: query.values
      }, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    } else {
      reject({Error: 'Wrong query, excepted an SQL-Bricks object'});
    }
    dbConn.end();
  });
}

module.exports = {
  executeQuery
};
