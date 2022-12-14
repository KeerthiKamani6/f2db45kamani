var pen = require('../models/pen');

// List of all Pen

exports.pen_list = async function (req, res) {

    try {

        thepen = await pen.find();

        res.send(thepen);

    }

    catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};
//views

// Handle a show all view 
exports.pen_view_all_Page = async function (req, res) {
    try {
        thepen = await pen.find();
        res.render('pen', { title: 'pen Search results', results: thepen });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// for a specific Pen. 
exports.pen_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await pen.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle pen create on POST.

exports.pen_create_post = async function (req, res) {

    console.log(req.body)

    let document = new pen();

    // We are looking for a body, since POST does not have query parameters.

    // Even though bodies can be in many different formats, we will be picky

    // and require that it be a json object

    //{"pen_width":24,"pen_style":"ball","pen_Color":"red"}

    document.width = req.body.width;

    document.style = req.body.style;

    document.Color = req.body.Color;





    try {

        let result = await document.save();

        res.send(result);

    }

    catch (err) {

        res.status(500);

        res.send(`{"error": ${err}}`);

    }

};


// Handle Pen update form on PUT.

//exports.pen_update_put = function (req, res) {

//res.send('NOT IMPLEMENTED: Pen update PUT' + req.params.id);

//};


exports.pen_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await pen.findById(req.params.id)
        // Do updates of properties 
        if (req.body.width)
            toUpdate.width = req.body.width;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.style) toUpdate.style = req.body.style;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
// Handle pen delete on DELETE. 
exports.pen_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await pen.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
//Handle a show one view with id specified by query 
exports.pen_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await pen.findById(req.query.id)
        res.render('pendetail', { title: 'pen Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a pen. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.pen_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('pencreate', { title: 'pen Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a pen
// query provides the id 
exports.pen_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await pen.findById(req.query.id) 
        res.render('penupdate', { title: 'pen Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.pen_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await pen.findById(req.query.id) 
        res.render('pendelete', { title: 'pen Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 