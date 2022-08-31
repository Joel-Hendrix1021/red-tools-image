const express = require('express');
const verifyAuth = require('../middleware/verifyAuth');
const CommentControllers = require('../controllers/comment.controllers');

const router = express.Router();

router.get('/', CommentControllers.find);

router.get('/:id', verifyAuth, CommentControllers.findByIdImage);

router.get('/all/:id', verifyAuth, CommentControllers.findAllByIdImage);

router.post('/add-comment/:id', verifyAuth, CommentControllers.create); // id -> idImg

router.put('/edit-comment/:id', verifyAuth, CommentControllers.update);

router.delete('/img/comment/delete/:id', verifyAuth, CommentControllers.delete);

module.exports = router;
