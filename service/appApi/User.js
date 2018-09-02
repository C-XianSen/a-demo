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

router.post('/login', async(ctx) => {
  // 拿到传递过来的数据
  let loginUser = ctx.require.body
  console.log(loginUser)

  let username = loginUser.username
  let password = loginUser.password

  // 引入User的model
  const User = mongoose.model('User')
  // 验证用户名、密码
  await User.findOne({username:username}).exec().then(async(result) => {
    console.log(result)
    if (result) {
      // 用户名存在，对比密码
      let newUser = new User()
      await newUser.comparePassword(password, result.password)
      .then((isMatch) => {
        // 返回对比结果
        ctx.body= {code: 200, message: isMatch}
      })
      .catch(err => {
        console.log(err)
        ctx.body={code:500, message:err}
      })
    } else {
      ctx.body={code: 200, message: '用户名不存在'}
    }
  }).catch(err => {
    console.log(err)
    ctx.body= {code: 500, message:err}
  })
})

module.exports = router