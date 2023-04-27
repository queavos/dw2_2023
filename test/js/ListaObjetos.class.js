class ListaObjetos {
  constructor() {
    this._autoid = 1;
    this._lista = [];
  }

  agregar(objeto) {
    objeto.id = this._autoid;
    this._lista.push(objeto);
    this._autoid++;
  }

  editar(id, objeto) {
    let index = this._buscarIndicePorId(id);
    if (index >= 0) {
      objeto.id = this._lista[index].id;
      this._lista[index] = objeto;
    }
  }

  eliminar(id) {
    let index = this._buscarIndicePorId(id);
    if (index >= 0) {
      this._lista.splice(index, 1);
    }
  }

  buscar(atributo, valor) {
    let resultados = [];
    for (let objeto of this._lista) {
      if (objeto[atributo] === valor) {
        resultados.push(objeto);
      }
    }
    return resultados;
  }

  insertarDesdeArray(array) {
    this._lista = [];
    let maxId = 0;
    for (let objeto of array) {
      if (objeto.id > maxId) {
        maxId = objeto.id;
      }
      this.agregar(objeto);
    }
    this._autoid = maxId + 1;
  }

  _buscarIndicePorId(id) {
    return this._lista.findIndex((objeto) => objeto.id === id);
  }

  get lista() {
    return this._lista;
  }
}

// El método insertarDesdeArray recibe como argumento un array de objetos y reemplaza la lista actual con los objetos del array pasado. Además, el método busca el valor más alto del id de los objetos existentes en la lista y actualiza el contador _autoid para que comience a partir del valor más alto encontrado más 1.

// Es importante notar que este método borra todos los objetos existentes en la lista antes de insertar los nuevos objetos del array, por lo que debes tener cuidado de no perder información importante.

// Espero que esto te sea útil.
