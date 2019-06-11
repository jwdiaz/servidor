const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const fs = require("fs");
const flash = require("connect-flash");
const dirNode_modules = path.join(__dirname, "../node_modules");

listaCurso = [];

require("./helpers");

app.use(flash());
app.use("/css", express.static(dirNode_modules + "/bootstrap/dist/css"));
app.use("/js", express.static(dirNode_modules + "/jquery/dist"));
app.use("/js", express.static(dirNode_modules + "/popper.js/dist"));
app.use("/js", express.static(dirNode_modules + "/bootstrap/dist/js"));

const directorioBootstrap = path.join(
  __dirname,
  "../node_modules/bootstrap/dist/css"
);
app.use("/bootstrap", express.static(directorioBootstrap));

const directorioPublico = path.join(__dirname, "../public");
const directorioPartials = path.join(__dirname, "../partials");

app.use(express.static(directorioPublico));
hbs.registerPartials(directorioPartials);
//var userRouters = require('./rutasUsuario');

const listarCurso = () => {
  try {
    listaCurso = require("./cursos.json");
  } catch (error) {
    listaCurso = [];
  }
};

const guardarCurso = () => {
  let datos = JSON.stringify(listaCurso);

  listaCurso.forEach(estudiante => {
    console.log(estudiante.asignatura + estudiante.valor);
  });

  fs.writeFile("./src/cursos.json", datos, err => {
    if (err) throw err;
  });
};

app.get("elim", (req, res) => {
  console.log(req.body);
});
app.get("/eliminarCurso", (req, res) => {
  listarCurso();
  let id = parseInt(id);

  let nuevo = listaCurso.filter(est => est.id != id);
  listaCurso = nuevo;

  guardar();
  res.render("listaCurso", {
    titulo: "Asignaturas programadas",
    success: "Proceso exitos",
    listarCurso
  });
});
app.get("/crear", (req, res) => {
  listarCurso();
  let asig = {
    id: parseInt(req.query.id),
    asignatura: req.query.asignatura,
    descripcion: req.query.descripcion,
    valor: parseInt(req.query.valor),
    modalidad: req.query.modalidad,
    intensidad: req.query.intensidad,
    estado: "disponible"
  };

  let duplicado = listaCurso.find(curss => curss.id == asig.id);
  if (!duplicado) {
    listaCurso.push(asig);

    guardarCurso();

    res.render("listaCurso", {
      titulo: "Asignaturas programadas",
      success: "Proceso exitos",
      listarCurso
    });
  } else {
    res.render("formuCursos", {
      titulo: "Crear nuevo curso",
      message: "el ID : " + asig.id + ", ya se encuentra registrado"
    });
  }
});

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    titulo: "REDS SCHOOL"
  });
});

app.get("/calculos", (req, res) => {
  res.render("calculos", {
    estudiante: req.query.nombre,
    nota1: parseInt(req.query.nota1),
    nota2: parseInt(req.query.nota2),
    nota3: parseInt(req.query.nota3)
  });
});

app.get("/listaEstu", (req, res) => {
  res.render("listaEstu", {
    titulo: "Estudiantes Matriculados"
  });
});

app.get("/listaCurso", (req, res) => {
  res.render("listaCurso", {
    titulo: "Asignaturas programadas",
    listarCurso
  });
});

app.get("/todoscurso", (req, res) => {
  res.render("todoscursos", {
    titulo: "Asignaturas programadas",
    listarCurso
  });
});

app.get("/crearCurso", (req, res) => {
  res.render("formuCursos", {
    titulo: "Crear nuevo curso"
  });
});

const listarUsuarios = () => {
  try {
    listaUsuarios = require("./usuarios.json");
  } catch (error) {
    listaUsuarios = [];
  }
};


app.get("/listaUsuarios", (req, res) => {
  listarUsuarios()
  console.log("Invocar funcion")
  console.log(listaUsuarios)
  res.render("listaUsuarios", {
      titulo: "Usuarios asignados",
      listaUsuarios
  });
});

app.get("/crearUsuario", (req, res) => {
  res.render("formUsuarios", {
    titulo: "Crear nuevo usuario"
  });
});

app.get("/guardarUsuario", (req, res) => {
  listarUsuarios()
  let asig = {
    documentoId: req.query.documentoId,
    nombre: req.query.nombre,
    correoElectronico: req.query.correoElectronico,
    telefono: req.query.telefono,
    tipoUsuario: req.query.tipoUsuario
  };

  let duplicado = listaUsuarios.find(usuars => usuars.documentoId == asig.documentoId);
  if (!duplicado) {
    listaUsuarios.push(asig);

    guardarCurso();

    res.render("listaUsuarios", {
      titulo: "Usuario registrado",
      success: "Proceso exitoso",
      listaUsuarios
    });
  } else {
    res.render("formUsuarios", {
      titulo: "Crear nuevo usuario",
      message: "el usuario con Numero de Identificacion: " + asig.documentoId + ", ya se encuentra registrado"
    });
  }
});

app.get("/login", (req, res) => {
  res.render("formIngreso", {
    titulo: "Bienvenidos"
  });
});

app.listen(3000, () => {
  console.log("escuchando el puerto 3000");
});
