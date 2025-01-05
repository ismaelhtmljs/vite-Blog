import React from "react";
import { SiVite } from "react-icons/si";

function OpenViteButton() {
    window.open('https://vite.dev/','bank_')
}

function Footer(){
    return(
        <>
            <footer>
                <div className="titulo_footer">
                    <h2>VITE</h2><SiVite className="Vite-icon-footer"/>
                </div>
                <div className="frase">
                <p>¡Acompáñanos en este viaje y descubre por qué Vite está marcando tendencia en el desarrollo web moderno!</p>
                </div>
                <div className="button_open_vite_blog">
                    <button type="button" className="Button-open-vite" onClick={OpenViteButton}>¡Descubre el poder de la velocidad con Vite! 🚀</button>
                </div>
                <div className="Copy">
                    <p className="Copy">&copy;CopyRight by Ismaelxd74 | official License from 2024-2058</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;