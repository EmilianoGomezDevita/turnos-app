import EmployeeCard from "@/components/EmployeeCard";
import EmployeeList from "@/components/EmployeeList";

const employees = [
    { id: 1, name: "Lucía", role: "Barra", turno: "Noche"},
    { id: 2, name: "Franco", role: "Salon", turno: "Tarde"},
    { id: 3, name: "Florencia", role: "Cocina", turno: "Tarde" },
    { id: 4, name: "Emiliano", role: "Barra",turno: "Tarde" },
];

export default function EmpleadosPage(){
    return (
        <main>
            <h1>Empleados</h1>
            <EmployeeList employees={employees} />
        </main>
    );
}

