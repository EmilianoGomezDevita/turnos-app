import Image from "next/image";
import Link from 'next/link'
import styles from "../styles/page.module.css";
import variables from '../styles/variables.module.scss'

export default function Home() {
  return (
    <html>
      <main>
        <h1 className={variables.title} >Gestor de turnos</h1>

        <a href="/empleados" className={variables.enlaces}>Ver empleados</a>
      </main>
    </html>

  );
}
