const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const { isUndef, buildID } = require('./src/util')

class Database {
  constructor(root, defaults) {
    const adapter = new FileSync(root)
    this.db = low(adapter)
    this.db.defaults(defaults).write()
  }
  // 查询
  get(path, keyObj) {
    return this.db
      .get(path)
      .find(keyObj)
      .value()
  }
  
  // 新增
  add(path, value) {
    let data = { ...value, ...{ id: buildID() } }
    this.db
      .get(path)
      .push(data)
      .write()
  }

  // 更新
  update(path, keyObj, value) {
    if (isUndef(keyObj)) return

    this.db
      .get(path)
      .find(keyObj)
      .assign(value)
      .write()
  }

  // 删除
  remove(path, keyObj) {
    this.db
      .get(path)
      .remove(keyObj)
      .write()
  }

  // 清空
  clear(path, value) {
    this.db.set(path, value).write()
  }
}

module.exports = Database