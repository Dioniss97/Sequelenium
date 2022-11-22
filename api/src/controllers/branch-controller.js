const db = require("../models");
const Branch = db.Branch;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if ( !req.body.business_id
        ||  !req.body.trade_name 
        || !req.body.address 
        || !req.body.location 
        || !req.body.phone 
        || !req.body.email 
        || !req.body.web) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const branch = {
        business_id: req.body.business_id,
        trade_name: req.body.trade_name,
        address: req.body.address,
        location: req.body.location,
        phone: req.body.phone,
        email: req.body.email,
        web: req.body.web
    };

    Branch.create(branch).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {

    const trade_name = req.query.trade_name;
    // condición para buscar por el trade_name
    var condition = trade_name ? { trade_name: { [Op.like]: `%${trade_name}%` } } : null;
 
    Branch.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Branch.findByPk(id, {where: {deletedAt: null}}).then(data => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
                message: `No se puede encontrar el elemento con la id=${id}.`
            });
        }

    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al recuperar la id=" + id
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    Branch.update(req.body, {
        where: { [Op.and]: [{id: id} , {deletedAt: null}] }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al actualiazar la id=" + id
        });
    });
};

exports.delete = (req, res) => {

  const id = req.params.id;

    Branch.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El elemento ha sido borrado correctamente"
            });
        } else {
            res.status(404).send({
                message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Algún error ha surgido al borrar la id=" + id
        });
    });
};