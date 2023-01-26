import {User} from "./user";
import {Appointment} from "./appointment";

export interface Reservation {
  id: number,
  user: User,
  appointment: Appointment
}
