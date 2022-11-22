// Rutas de "order"

const router = require('express').router();
const order = require('../controllers/order-controller');

router.post('/', order.create);
router.get('/', order.findAll);
router.get('/:id', order.findOne);
router.put('/:id', order.update);
router.delete('/:id', order.delete);

app.use('/api/orders', router);