import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  enabled: { type: Boolean, required: true }
}, {
  timestamps: true,
  collection: 'users'
});

// ---------- Static Methods ----------

userSchema.statics.getAll = function () {
  return this.find().sort({ lastName: 1 }).exec();
};

userSchema.statics.getById = function (id) {
  return this.findById(id).exec();
};

userSchema.statics.createUser = function (username, firstName, lastName) {
  const newUser = new this({ username, firstName, lastName });
  return newUser.save();
};

userSchema.statics.updateUser = function (id, updates) {
  return this.findByIdAndUpdate(id, updates, { new: true }).exec();
};

userSchema.statics.deleteUser = function (id) {
  return this.findByIdAndDelete(id).exec();
};

const User = mongoose.model('User', userSchema);

export default User;
