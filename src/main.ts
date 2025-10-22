import { login } from "./feature/login";
import { mostrarMesasDisponibles } from "./feature/table-list";
console.log("===== SISTEMA DE RESERVAS v1.0.0 =====");
const acceso = login("ana@example.com", "1234");
if (acceso) {
console.log("Acceso concedido ");
mostrarMesasDisponibles();
} else {
console.log("Acceso denegado ");
}
console.log("Finalizado")

export function procesarReserva(cliente: string, total: number): string {
 console.log(`Procesando reserva para ${cliente}.`);
<<<<<<< HEAD
 console.log(`Total a pagar: ${total} €`);
 let puntosGanados = Math.floor(total / 10);
 console.log(` El cliente ${cliente} ha ganado ${puntosGanados} puntos.`);

 return "Reserva completada correctamente con puntos de recompensa.";
=======
 let descuento = 0;
 if (cliente === "Juan Pérez") {
 descuento = total * 0.1;
 total -= descuento;
 console.log(` Descuento aplicado de ${descuento.toFixed(2)} €`);
 }
 console.log(`Total a pagar: ${total} €`);
 return "Reserva completada correctamente con descuento.";
>>>>>>> b9ac6bef6c21b8381e718a73e1ac43a5cd833496
}