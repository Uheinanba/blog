/* 'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const { ObjectId } = mongoose.Schema.Types;
  const UserSchema = new mongoose.Schema({
    title: {
      type: String,
      unique: true,
      required: false,
    },
    content: {
      type: String,
      required: false,
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
 */
