export class Empleado {
    empleadoId: string;
    nombre: string;
    departamento: string;
    ticketsAtendidos: string[]; // Suponiendo que esto es un array de IDs de tickets
    localidad: Localidad;

    constructor(
        empleadoId: string,
        nombre: string,
        departamento: string,
        ticketsAtendidos: string[],
        localidad: Localidad
    ) {
        this.empleadoId = empleadoId;
        this.nombre = nombre;
        this.departamento = departamento;
        this.ticketsAtendidos = ticketsAtendidos;
        this.localidad = localidad;
    }
}

export class Localidad {
    codigoPostal: string;
    descripcion: string;

    constructor(codigoPostal: string, descripcion: string) {
        this.codigoPostal = codigoPostal;
        this.descripcion = descripcion;
    }
}
