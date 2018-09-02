const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
let ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  UserId: {type: ObjectId},
  username: {
    unique: true,
    type: String
  },
  password: String,
  createAt: {
    type:Date,
    default: Date.now()
  },
  lastLoginAt: {
    type: Date,
    default:Date.now()
  }
},{
  collection: 'user'
})

userSchema.pre('save', function (next) {
  console.log(this)
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err)
    }
    this.password = hash
    next()
  })
})

userSchema.methods = {
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err,isMatch) => {
        if (!err) {
          resolve(isMatch)
        } else {
          reject(err)
        }
      })
    })
  }
}

mongoose.model('User', userSchema)