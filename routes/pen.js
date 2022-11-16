var express = require('express');
const pen_controllers= require('../controllers/pen');
var router = express.Router();

/* GET pen */ 
router.get('/', pen_controllers.pen_view_all_Page );
  // GET request for one pen. 
router.get('pen/:id', pen_controllers.pen_detail); 

/* GET detail pen page */ 
router.get('/detail', pen_controllers.pen_view_one_Page); 
module.exports = router;

/* GET create pen page */ 
router.get('/create', pen_controllers.pen_create_Page); 

/* GET create update page */ 
router.get('/update', pen_controllers.pen_update_Page); 

/* GET delete pen page */ 
router.get('/delete', pen_controllers.pen_delete_Page); 

 