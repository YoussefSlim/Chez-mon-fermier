const { Router } = require('express');

const router = Router();

router.get('/', (_, res) => {
    res.json('Bienvenue chez mon fermier');
});

module.exports = router; 
