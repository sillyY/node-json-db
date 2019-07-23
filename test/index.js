const Database = require('../index')

var database = new Database('./static/db.json', {
  memos: []
})

// 新增
database.add('memos', {
  title: '测试标题001',
  content: '测试内容002',
  date: 'xxx'
})

// 删除
// database.remove('memos', {
//   id: 1563868935
// })

// 更新
// database.update(
//   'memos',
//   { id: 1563868935 },
//   {
//     title: '测试标题001+'
//   }
// )

// 查找
// var a = database.get('memos', { id: 1563868935 })
// console.log(a)

// 清空
// var a = database.clear('memos', [])
// console.log(a)
