import db from '../models';

const userController = {};

userController.post = async (req, res) => {
  const { username, password } = req.body;

  // Validation
  
  const newUser = new db.User({
    username,
    password
  });
  
  const userSaved = await newUser.save();
  res.status(200).json({
    success: true,
    data: userSaved
  });
};

export default userController;
