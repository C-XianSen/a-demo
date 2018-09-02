const Router = require('koa-router')
const mongoose = require('mongoose')

let router = new Router()

router.get('/', async(ctx) => {
  ctx.body = "这是用户操作首页"
})
router.post('/register', async(ctx) => {
  // 拿到Model
  const User = mongoose.model('User')

  //将前端接受的post数据封装成一个新的user对象
  let newUser = new User(ctx.request.body)

  // 用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
  await newUser,save().then(() => {
    ctx.body = {
      code: 200,
      message: '注册成功'
    }
  }).catch(err => {
    ctx.body = {
      code: 500,
      message: err
    }
  })
})

module.exports = router