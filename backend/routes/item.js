const { Router } = require('express');
const itemController = require('../controllers/itemControllers');

const router = Router();

router.post('/items',itemController.post_item);
router.get('/items', itemController.get_items);
router.delete('/items/:id',itemController.delete_item);

module.exports = router;
