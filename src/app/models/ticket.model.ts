export class Ticket {
    ticketId: string;
    clienteId: string;
    tipo: string;
    estado: string;
    historial: Historial[];
    soluciones: Solucion[];
    ubicacion: Ubicacion;

    constructor(
        ticketId: string,
        clienteId: string,
        tipo: string,
        estado: string,
        historial: Historial[],
        soluciones: Solucion[],
        ubicacion: Ubicacion
    ) {
        this.ticketId = ticketId;
        this.clienteId = clienteId;
        this.tipo = tipo;
        this.estado = estado;
        this.historial = historial;
        this.soluciones = soluciones;
        this.ubicacion = ubicacion;
    }
}

export class Historial {
    fecha: Date;
    detalle: string;
    departamento: string;
    empleadoId: string;

    constructor(fecha: Date, detalle: string, departamento: string, empleadoId: string) {
        this.fecha = fecha;
        this.detalle = detalle;
        this.departamento = departamento;
        this.empleadoId = empleadoId;
    }
}

export class Solucion {
    fecha: Date;
    descripcion: string;
    exitosa: boolean;

    constructor(fecha: Date, descripcion: string, exitosa: boolean) {
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.exitosa = exitosa;
    }
}

export class Ubicacion {
    type: string;
    coordinates: number[]; // [longitud, latitud]

    constructor(type: string, coordinates: number[]) {
        this.type = type;
        this.coordinates = coordinates;
    }
}
