import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
  text: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User', required: true},
  _post: {type: Schema.ObjectId, ref: 'Post'}
});

const populateCreator = function(next) {
  this.populate({
    path: '_creator',
    select: 'username createdAt -_id'
  });
  next();
}

commentSchema.pre('find', populateCreator);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
