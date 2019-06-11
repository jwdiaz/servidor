const express = require("express");
var router = express.Router();

const listarUsuarios = () => {
    try {
      listaUsuarios = require("./usuarios.json");
    } catch (error) {
      listaUsuarios = [];
    }
  };


router.get("/listaUsuarios", (req, res) => {
    console.log("Invocar funcion")
    res.render("listaUsuarios", {
        titulo: "Usuarios asignados",
        listarUsuarios
    });
});