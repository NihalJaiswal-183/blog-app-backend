import express from 'express';
import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controller/post-controller.js';
import { createUser, getUser, getProfile, getUserPost, getUserbyID, updatefollow ,updateUnfollow,updateUser} from '../controller/User-controller.js';
import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';
const router = express.Router();

router.post('/createUser', createUser);
router.get('/user', getUser);
router.put('/updateUser/:id', updateUser);
router.get('/user/:id', getUserbyID);

router.get('/profile/:id', getProfile);
router.get('/postUser/:id', getUserPost);

router.post('/create', createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

router.get('/post/:id', getPost);
router.get('/posts', getAllPosts);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);

router.put('/updatefollow', updatefollow);
router.put('/updateUnfollow', updateUnfollow);

export default router;