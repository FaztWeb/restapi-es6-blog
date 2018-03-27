import db from '../models';

const postController = {};

postController.post = async (req, res) => {
  console.log('asasd')
  console.log(req.body)
  const { title, text, link, userId } = req.body;
  
  const post = new db.Post({
    title,
    text,
    link,
    _creator: userId
  });
  
  const postSaved = await post.save();
  res.status(200).json({
    success: true,
    data: postSaved
  });
};

postController.getAll = async (req, res) => {
  const posts = await db.Post.find({}).populate({
    path: '_creator',
    select: 'username createdAt -_id'
  }).populate({
    path: '_comments',
    select: 'text createdAt _creator',
    match: {'isDeleted': false }
  });

  res.status(200).json({
    successs: true,
    data: posts
  });
}

export default postController;
