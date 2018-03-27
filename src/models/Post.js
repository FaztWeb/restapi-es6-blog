import mongoose from 'mongoose';
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: { type: String, required: true },
  link: String,
  text: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User', required: true},
  _comments: [{type: Schema.ObjectId, ref: 'Comment'}]
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
