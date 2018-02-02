### usage
```
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose'
}
```

### configuration
```
// {app_root}/config/config.default.js
exports.mongoose = {
  url: 'mongodb://127.0.0.1/example',
  options: {}
}
```

### Example
```
// app/model/user.js
moudle.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    userName: {type: String},
    password: {type: String}
  });
  return mongoose.model('User', UserSchema);
}

// app/controller/user.js
exports.index = async ctx => {
  ctx.body = await ctx.model.User.find({});
}
```
