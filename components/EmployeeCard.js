export default function EmployeeCard({name, role, turno}){
    return (
        <div>
            <strong>{name}</strong> -- {role} --- {turno}
        </div>
    )
}