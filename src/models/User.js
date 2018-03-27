import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: [5, 'Username must be 5 characters or more.']
  },
  password: {
    type: String,
    required: true,
    min: [8, 'Password must be 8 characters or more.']
  },
  createdAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User', UserSchema);
export default User;
