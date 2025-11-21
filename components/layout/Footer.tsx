import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
       
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* IZQUERDA */}
        <div className={styles.Izq}>
          <h3>CONTÁCTANOS</h3>

          <p>
            Para cualquier inquietud que tengas, no dudes en contactarnos 
          </p>
          <span className={styles.email}>hannah@company.com</span>
            <p className={styles.phone}>+1 234 567 8901</p>
        </div>

        {/* SOCIAL */}
        <div className={styles.social}>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
        </div>

        {/* DERECHA */}
        <div className={styles.Derech}>
          <div>
            <h3>ARTISTAS</h3>
            <p>Descubre los artistas más destacados <br/> del momento</p>
          </div>

          <div>
            <h3>EXPOSICIONES</h3>
            <p>Agenda de exhibiciones actuales<br />y futuras</p>
          </div>

          <div>
            <h3>SUBSCRIBETE</h3>
            <p>recibe noticias y nuevos lanzamientos</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottom}>
        <span>POLÍTICA DE PRIVACIDAD</span>
        <span>HOUSE OF ARTISTS — TODOS LOS DERECHOS RESERVADOS</span>
        <span>TERMINOS Y CONDICIONES</span>
      </div>
    </footer>

        </>
    )
}
