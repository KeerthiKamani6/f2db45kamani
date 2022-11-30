var express = require('express');
const pen_controllers= require('../controllers/pen');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 

/* GET pen */ 
router.get('/', pen_controllers.pen_view_all_Page );
  // GET request for one pen. 
router.get('pen/:id', pen_controllers.pen_detail); 

/* GET detail pen page */ 
router.get('/detail', pen_controllers.pen_view_one_Page); 
module.exports = router;

/* GET create pen page */ 
router.get('/create',secured, pen_controllers.pen_create_Page); 

/* GET create update page */ 
router.get('/update',secured, pen_controllers.pen_update_Page); 

/* GET delete pen page */ 
router.get('/delete',secured,pen_controllers.pen_delete_Page); 

 