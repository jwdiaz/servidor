const hbs = require("hbs");
const funcion = require("./funciones");

hbs.registerHelper("obtenerPromedio", (nota1, nota2, nota3) => {
  return (nota1 + nota2 + nota3) / 3;
});

hbs.registerHelper("crearCurso", () => {
  funcion.crear();
});

hbs.registerHelper("listar", () => {
  listarEstudiantes = require("./db.json");
  let texto =
    '<table class = "table table-striped">\
                <thead class="thead-dark">\
                <th scope="col"> Nombre </th>\
                <th scope="col"> Matematicas </th>\
                <th scope="col"> Ingles </th>\
                <th scope="col"> Programacion </th>\
                </thead>\
                <tbody>';

  listarEstudiantes.forEach(estudiante => {
    texto =
      texto +
      "<tr>" +
      "<td>" +
      estudiante.nombre +
      "</td>" +
      "<td>" +
      estudiante.matematicas +
      "</td>" +
      "<td>" +
      estudiante.ingles +
      "</td>" +
      "<td>" +
      estudiante.programacion +
      "</td></tr>";
  });
  texto = texto + "</tbody></table>";
  return texto;
});

hbs.registerHelper("todoscursos", () => {
  listaCurso = require("./cursos.json");
  let texto =
    '<table  class = "table table-striped">\
                <thead class="thead-dark">\
                <th> ID </th>\
                <th> Asignatura </th>\
                <th> Descripcion </th>\
                <th> Valor </th>\
                <th> Modalidad </th>\
                <th> Intensidad </th>\
                <th> Estado </th>\
                </thead>\
                <tbody>';

  listaCurso.forEach(curso => {
    texto =
      texto +
      "<tr>" +
      "<td>" +
      curso.id +
      "</td>" +
      "<td>" +
      curso.asignatura +
      "</td>" +
      "<td>" +
      curso.descripcion +
      "</td>" +
      "<td>" +
      curso.valor +
      "</td>" +
      "<td>" +
      curso.modalidad +
      "</td>" +
      "<td>" +
      curso.intensidad +
      "</td>" +
      "<td>" +
      curso.estado +
      '</td> <td> <a class="btn btn-secondary" href="editEstado/'+curso.id+'"> Editar estado\
  </a></td></tr>';
  });
  texto = texto + "</tbody></table>";
  return texto;
});

hbs.registerHelper("lis", () => {
  listaCurso = require("./cursos.json");
  let texto = "";
  listaCurso.forEach(curso => {
    texto =
      texto +
      '\
       <div class="container p-4"\
         <div class="row">\
           <div class="col-sm-5">\
             <div class="card text-center">\
                <div class="card-body">\
                     <h4 class="card-title text-uppercase"> ' +
      curso.asignatura +
      ' </h4>\
                    <p class="m-2">ID: ' +
      curso.id +
      '</p>\
                    <p class="m-2">' +
      curso.descripcion +
      ' </p>\
                    <p class="m-2">Valor: ' +
      curso.valor +
      '</p>\
      <p class="m-2">Intesidad:  ' +
curso.intensidad +
'</p>\
                    <a class="btn btn-danger" href="elim/'+curso.id+'">\
                        Eliminar  </a>\
                    <a class="btn btn-secondary" href="editarCurso/'+curso.id+'">\
                        Editar\
                    </a>\
                </div>\
              </div>\
           </div>\
          </div>';
  });

  texto = texto + "</div>";
  return texto;
});


hbs.registerHelper("listaUsuarios", () => {
  listaUsuario = require("./usuarios.json");
  let texto =
    '<table  class = "table table-striped">\
                <thead class="thead-dark">\
                <th> Documento ID </th>\
                <th> Nombre </th>\
                <th> Correo electronico </th>\
                <th> Teleono </th>\
                <th> Tipo de Usuario</th>\
                </thead>\
                <tbody>';

  listaUsuario.forEach(usuario => {
    texto =
      texto +
      "<tr>" +
      "<td>" +
      usuario.documentoId +
      "</td>" +
      "<td>" +
      usuario.nombre +
      "</td>" +
      "<td>" +
      usuario.correoElectronico +
      "</td>" +
      "<td>" +
      usuario.telefono +
      "</td>" +
      "<td>" +
      usuario.tipoUsuario +
      '</td> <td> <a class="btn btn-secondary" href="editEstado/'+usuario.documentoId +'"> Editar estado\
  </a></td></tr>';
  });
  texto = texto + "</tbody></table>";
  return texto;
});