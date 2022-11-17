// Controlador de client

const db = require("../models");
const Client = db.Client;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    if (!req.body.name || !req.body.surname || !req.body.password || !req.body.email || !req.body.phone || !req.body.address) {

        res.status(400).send({
            message: "Faltan campos por rellenar."
        });

        return;
    }

    const client = {
        name: req.body.name,
        surname: req.body.surname,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    };

    Client.create(client).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = (req, res) => {
    
    const phone = req.query.phone;

    var condition = phone ? { phone: { [Op.like]: `%${phone}%` } } : null;

    Client.findAll({ where: condition }).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Client.findByPk(id, {where: {deletedAt: null}}).then(data => {

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({
                message: "No se ha encontrado el cliente con id=" + id
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error recuperando el cliente con id=" + id
        });
    });
};

exports.update = (req, res) => {

    const id = req.params.id;

    Client.update(req.body, {where: {id: id}}).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El cliente ha sido actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede actualizar el cliente con id=${id}.`
            });
        }
    }
    ).catch(err => {
        res.status(500).send({
            message: "Error actualizando el cliente con id=" + id
        });
    });
};

exports.delete = (req, res) => {

    const id = req.params.id;

    Client.destroy({where: {id: id}}).then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "El cliente ha sido eliminado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se puede eliminar el cliente con id=${id}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "No se puede eliminar el cliente con id=" + id
        });
    });
};

// exports.deleteAll = (req, res) => {

//     Client.destroy({where: {}, truncate: false}).then(nums => {
//         res.status(200).send({ message: `${nums} clientes han sido eliminados correctamente.` });
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Algún error ha surgido al eliminar todos los clientes."
//         });
//     });
// };

// exports.findAllDeleted = (req, res) => {

//     Client.findAll({where: {deletedAt: {[Op.ne]: null}}}).then(data => {
//         res.status(200).send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Algún error ha surgido al recuperar los datos."
//         });
//     });
// };

// exports.restore = (req, res) => {
    
//     const id = req.params.id;

//     Client.restore({where: {id: id}}).then(num => {
//         if (num == 1) {
//             res.status(200).send({
//                 message: "El cliente ha sido restaurado correctamente."
//             });
//         } else {
//             res.status(404).send({
//                 message: `No se puede restaurar el cliente con id=${id}.`
//             });
//         }
//     }).catch(err => {
//         res.status(500).send({
//             message: "Error restaurando el cliente con id=" + id
//         });
//     });
// };