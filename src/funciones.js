const fs = require("fs");
listaCurso = [];


const listarCurso = () => {
    try {
      listaCurso = require("./cursos.json");
        } catch (error) {
            listaCurso = [];
    }
  };

const crear = curso => {
    listarCurso();
    let asig = {
      id: parseInt(req.query.id),
      asignatura: req.query.asignatura,
      descripcion: req.query.descripcion,
      valor:  parseInt(req.query.valor),
      modalidad: req.query.modalidad,
      intensidad: req.query.intensidad,
      estado: 'disponible'

    };
  
    let duplicado = listaCurso.find(curss => curss.id == asig.id);
    if (!duplicado) {
        listaCurso.push(asig);
  
      guardarCurso();
    } else {
      console.log("ya exite el curso " + curso.id);
    }

    
const guardarCurso = () => {
    let datos = JSON.stringify(listaCurso);
  
    fs.writeFile("cursos.json", datos, err => {
      if (err) throw err;
      console.log("Datos guardados con exito");
    });
  };
  };

  module.exports = {
    crear
  };