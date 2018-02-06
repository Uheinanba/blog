'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  // const { ObjectId } = mongoose.Schema.Types;
  const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    tel: {
      type: Number,
    },
    role: {
      type: String,
      enum: ['admin'],
    },
    createTime: {
      type: Date,
      default: Date.now,
    },
    modifiedTime: {
      type: Date,
      default: Date.now,
    },
  });
  return mongoose.model('User', UserSchema);
};
