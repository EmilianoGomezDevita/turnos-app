"use client";

import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import variables from '../styles/variables.module.scss'

export default function ({ employees }) {

    const [role, setRole] = useState("Todos");
    const [turno, setTurno] = useState("Todos");

    const visible = employees.filter(
        e => (role === "Todos" || e.role === role) && (turno === "Todos" || e.turno === turno)
    )
    return (
        <>
            <div>
                <div className={variables.contenedorRol}>
                    {["Todos", "Barra", "Cocina", "Salon"].map((r) => (
                        <button key={r} onClick={() => setRole(r)} className={`${variables.botonRol} ${role === r ? variables.activo : ''}`}>
                            {r}
                        </button>
                    ))}
                </div>

                <div className={variables.contenedorTurno}>
                    {["Todos", "Mañana", "Tarde", "Noche"].map((t) => (
                        <button key={t} onClick={() => setTurno(t)} className={`${variables.botonTurno} ${turno === t ? variables.activo : ''}`}>
                            {t}
                        </button>
                    ))}
                </div>

            </div>
            {visible.map((e) => (
                <EmployeeCard key={e.id} name={e.name} role={e.role} turno={e.turno} />
            ))}


        </>
    )
}