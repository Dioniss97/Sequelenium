module.exports = app => {

    const taxes = require("../controllers/tax-controller.js");
    var router = require("express").Router();
  
    router.post("/", taxes.create);
    router.get("/", taxes.findAll);  
    router.get("/:id", taxes.findOne);  
    router.put("/:id", taxes.update);  
    router.delete("/:id", taxes.delete);
  
    app.use('/api/taxes', router);
};