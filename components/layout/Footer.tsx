import React from 'react'
import styles from './Footer.module.css'
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            
            {/* CONTENEDOR */}
            <div className={styles.container}>

                {/* IZQUIERDA */}
                <div className={styles.Izq}>
                    <h3>CONTÁCTANOS</h3>
                    <p>Para cualquier inquietud que tengas, no dudes en contactarnos</p>
                    <span className={styles.email}>houseofart@company.com</span>
                    <p className={styles.phone}>+1 234 567 8901</p>
                </div>

                {/* SOCIAL */}
                <div className={styles.social}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className={styles.icon} />
                    </a>

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className={styles.icon} />
                    </a>
                </div>

                {/* DERECHA */}
                <div className={styles.Derech}>
                    <div>
                        <h3>EXPOSICIONES</h3>
                        <p>Agenda de exhibiciones actuales y futuras</p>
                    </div>

                    <div>
                        <h3>SUBSCRÍBETE</h3>
                        <p>Recibe noticias y nuevos lanzamientos</p>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className={styles.bottom}>
                <span>POLÍTICA DE PRIVACIDAD</span>
                <span>HOUSE OF ARTISTS — TODOS LOS DERECHOS RESERVADOS</span>
                <span>TÉRMINOS Y CONDICIONES</span>
            </div>

        </footer>
    )
}
