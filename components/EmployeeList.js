"use client";

import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

export default function({ employees }){
    const [role, setRole] = useState("Todos");

    const visible = role ===    "Todos" ? employees : employees.filter((e) => e.role === role)

    return (
        <>
            <div>
                {["Todos", "Barra", "Cocina", "Salon"].map((r) => (
                    <button key={r} onClick={() => setRole(r)} >
                    {r}
                    </button>
                ))}
            </div>
            {visible.map((e) => (
                <EmployeeCard key={e.id} name={e.name} role={e.role} />
            ))}

        </>
    )
}