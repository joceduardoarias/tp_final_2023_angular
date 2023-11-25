export class Cliente {
    clienteId: string;
    nombre: string;
    planActual: Plan;
    historialPlanes: Plan[];
    ubicacion: Ubicacion;
    esEmpleado: boolean;
    localidad: Localidad;

    constructor(
        clienteId: string,
        nombre: string,
        planActual: Plan,
        historialPlanes: Plan[],
        ubicacion: Ubicacion,
        esEmpleado: boolean,
        localidad: Localidad
    ) {
        this.clienteId = clienteId;
        this.nombre = nombre;
        this.planActual = planActual;
        this.historialPlanes = historialPlanes;
        this.ubicacion = ubicacion;
        this.esEmpleado = esEmpleado;
        this.localidad = localidad;
    }
}

export class Plan {
    tipoPlan: string;
    canales: string[];
    fechaCompra: Date;

    constructor(tipoPlan: string, canales: string[], fechaCompra: Date) {
        this.tipoPlan = tipoPlan;
        this.canales = canales;
        this.fechaCompra = fechaCompra;
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

export class Localidad {
    codigoPostal: string;
    descripcion: string;

    constructor(codigoPostal: string, descripcion: string) {
        this.codigoPostal = codigoPostal;
        this.descripcion = descripcion;
    }
}
