import { Materia } from "./Materia";
import { Profesor } from "./Profesor";

export class Reserva {
    id:number;
    fecha:Date;
    hora:string;
    turno: string;
    profesor: Profesor;
    materia: Materia;
}