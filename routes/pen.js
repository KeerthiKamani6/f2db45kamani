var express = require('express');
const pen_controllers= require('../controllers/pen');
var router = express.Router();

/* GET television */ 
router.get('/', pen_controllers.pen_view_all_Page );
  // GET request for one costume. 
router.get('/:id', pen_controllers.pen_detail); 
router.put('/:id', pen_controllers.pen_update_put); 
 

module.exports = router;