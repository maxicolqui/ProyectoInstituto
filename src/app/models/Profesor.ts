import { Materia } from "./Materia";
import { Reserva } from "./Reserva";

export class Profesor{
    id:number;
    nombre:string;
    apellido:string;
    correo:string;
    telefono:string;
    dni:string;
    materia:Materia;
    reserva:Reserva;
};