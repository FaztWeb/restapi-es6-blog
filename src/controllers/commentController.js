import db from '../models';

const commentController = {};

commentController.post = async (req, res) => {
  const {
    text,
    userId,
    postId
  } = req.body;

  const comment = new db.Comment({
    text,
    _creator: userId,
    _post: postId
  });

  const commentSaved = await comment.save();
  const existingPost = await db.Post.findByIdAndUpdate(postId, {
    $push: {'_comments': comment._id}
  });

  res.status(200).json({
    success: true,
    data: commentSaved,
    existingPost
  });
};

export default commentController;
