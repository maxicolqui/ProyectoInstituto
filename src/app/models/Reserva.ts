import { Materia } from "./Materia";
import { Profesor } from "./Profesor";

export class Reserva {
    id:number;
    fecha:string;
    hora:string;
    turno: string;
    profesor: Profesor;
    materia: Materia;
}