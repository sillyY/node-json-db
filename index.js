const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const { isUndef, buildID } = require('./src/util')

class Database {
  constructor(root, defaults) {
    const adapter = new FileSync(root)
    this.db = low(adapter)
    this.db.defaults(defaults).write()
  }

  get(path, keyObj) {
    return this.db
      .get(path)
      .find(keyObj)
      .value()
  }

  add(path, value) {
    let data = { ...value, ...{ id: buildID() } }
    this.db
      .get(path)
      .push(data)
      .write()
  }
  set(path, keyObj, value) {
    if (isUndef(keyObj)) return

    this.db
      .get(path)
      .find(keyObj)
      .assign(value)
      .write()
  }
  remove(path, keyObj) {
    this.db
      .get(path)
      .remove(keyObj)
      .write()
  }
  clear(path, value) {
    this.db.set(path, value).write()
  }
}

module.exports = Database