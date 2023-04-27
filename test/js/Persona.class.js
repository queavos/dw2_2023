class Persona {
	constructor(apellido, nombre, direccion, email, telefono, fechaNacimiento) {
		this.id = Date.now().toString();
		this.apellido = apellido;
		this.nombre = nombre;
		this.direccion = direccion;
		this.email = email;
		this.telefono = telefono;
		this.fechaNacimiento = fechaNacimiento;
		this.fechaRegistro = new Date().toISOString();
		this.fechaModificacion = null;
		this.fechaBorrado = null;
	}

	get id() {
		return this.id;
	}

	get apellido() {
		return this.apellido;
	}

	set apellido(valor) {
		this.apellido = valor;
		this.fechaModificacion = new Date().toISOString();
	}

	get nombre() {
		return this.nombre;
	}

	set nombre(valor) {
		this.nombre = valor;
		this.fechaModificacion = new Date().toISOString();
	}

	get direccion() {
		return this.direccion;
	}

	set direccion(valor) {
		this.direccion = valor;
		this.fechaModificacion = new Date().toISOString();
	}

	get email() {
		return this.email;
	}

	set email(valor) {
		this.email = valor;
		this.fechaModificacion = new Date().toISOString();
	}

	get telefono() {
		return this.telefono;
	}

	set telefono(valor) {
		this.telefono = valor;
		this.fechaModificacion = new Date().toISOString();
	}

	get fechaNacimiento() {
		return this.fechaNacimiento;
	}

	set fechaNacimiento(valor) {
		this.fechaNacimiento = valor;
		this.fechaModificacion = new Date().toISOString();
	}

	get fechaRegistro() {
		return this.fechaRegistro;
	}

	get fechaModificacion() {
		return this.fechaModificacion;
	}

	get fechaBorrado() {
		return this.fechaBorrado;
	}

	borrar() {
		this.fechaBorrado = new Date().toISOString();
	}
}
