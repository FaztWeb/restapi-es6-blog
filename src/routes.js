import express from 'express';
const router  = express.Router();

import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

router.get('/', basicController.get);

router.post('/signup', userController.post);

router.post('/post', postController.post);
router.get('/post', postController.getAll);
router.post('/comment', commentController.post);

export default router;
