import {Centre} from "./centre";

export interface Appointment{
    id: number
    centre: Centre,
    dateAndTime: Date,
    duration: number
}
