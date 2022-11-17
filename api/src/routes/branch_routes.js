module.exports = app => {

    const branch = require("../controllers/branch-controller.js");
    var router = require("express").Router();

    router.post("/", branch.create);
    router.get("/", branch.findAll);  
    router.get("/:id", branch.findOne);  
    router.put("/:id", branch.update);  
    router.delete("/:id", branch.delete);
    
    app.use('/api/branch', router);
};