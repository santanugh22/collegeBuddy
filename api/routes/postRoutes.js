import {Router} from 'express'
import {
  createPost,
  editPost,
  deletePost,
  getPosts,
} from "../controllers/postController.js";
const router =Router()



// creating a post 
router.post('/create',createPost)

// deleting a post
router.delete('/delete',deletePost)

// editing an route
router.put('/edit',editPost)

// getting posts
router.get('/get',getPosts)


export default router