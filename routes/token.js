var express = require("express");
var router = express.Router();

let crypto = require("crypto");
const jwt = require('jsonwebtoken');
/* 1. Cargue los modelos de acuerdo con la configuración de la conexión */
const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", async function (req, res, next) {
  res.render("ticket",{ 
    token: jwt.sign(
      { data: 'foobar' }, 'secret', { expiresIn: '1h' }
    ), username: req.cookies['username']});
});

/*router.post("/", async (req, res) => {
  let { name, password, idrole } = req.body;

  try {
    let salt = process.env.SALT;
    let hash = crypto.createHmac("sha512", salt).update(password).digest("base64");
    let passwordHash = salt + "$" + hash;

    let user = await models.users.create({
      name: name,
      password: passwordHash,
    });
    await models.users_roles.create({
      users_iduser: user.iduser,
      roles_idrole: idrole,
    });

    res.redirect("/token");
  } catch (error) {
    res.status(400).send(error);
  }
});*/

module.exports = router;
