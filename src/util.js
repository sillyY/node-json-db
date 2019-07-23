const moment = require('moment')

function isUndef(v) {
  return v === undefined || v === null
}

function buildID() {
  return moment().unix()
}


module.exports = {
    isUndef,
    buildID
}