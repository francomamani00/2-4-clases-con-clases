class Edificio {
  piso: Piso[];
  departamento: any;
  constructor(piso: Piso[]) {
    this.piso = piso;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoEncontrado = this.piso.find(function (item) {
      return item.nombre == nombreDePiso;
    });
    return pisoEncontrado.pushDepartamentos(departamento);
  }
  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const pisoEncontrado = this.piso.find(
      (item) => item.nombre == nombreDePiso
    );
    return pisoEncontrado.getDepartamentos();
  }
}

class Piso {
  nombre: string;
  depto: Departamento[]=[];
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  pushDepartamentos(departamento: Departamento) {
    return this.depto.push(departamento);
  }
  getDepartamentos(): Departamento[] {
    return this.depto;
  }
}

class Departamento {
  midepto: string;
  constructor(_midepto: string) {
    this.midepto = _midepto;
  }
  getName() {
    return this.midepto;
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
