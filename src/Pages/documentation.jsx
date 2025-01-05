import React from "react";
import { SiVite } from "react-icons/si";
import LoadingScreen from "../Components/LoadingScreen";
import '../Css/documentation.css'

function button_documentation_click() {
    window.open('https://es.vite.dev/guide/','bank_');
}

function Documentation() {
    return(
        <>
            <LoadingScreen/>
            <main>
                <div className="contendor-contenido">
                    <div className="contenedor-post">
                        <div className="post">
                            <div className="titulo_post1">
                                <h1>Documentación de <strong>Vite</strong></h1>
                            </div>
                            <article>
                                <p>
                                    La <em>Documentación de Vite</em> es la clave para entender y aprovechar al máximo las capacidades de esta herramienta revolucionaria. 
                                    Con una estructura clara y ejemplos prácticos, la documentación te guía paso a paso en el proceso de instalación, configuración 
                                    y uso avanzado de Vite. Ya sea que estés construyendo aplicaciones de pequeña escala o proyectos más complejos, 
                                    aquí encontrarás todo lo que necesitas para optimizar tu flujo de trabajo.
                                </p>
                                <p>
                                    Además, descubrirás cómo Vite aprovecha características modernas de desarrollo como el Hot Module Replacement (HMR), 
                                    la carga rápida de módulos y la compatibilidad con múltiples frameworks, incluyendo React, Vue, Svelte y más. 
                                    También se abordan temas avanzados como la personalización de configuraciones, la integración con bibliotecas populares 
                                    y cómo escalar tu aplicación para producción.
                                </p>
                                <p>
                                    No importa si eres un desarrollador experimentado o alguien que está comenzando a explorar las herramientas modernas 
                                    de construcción, la documentación de Vite está diseñada para ser accesible y útil para todos los niveles. 
                                    ¡Visítala y empieza a construir con confianza!
                                </p>
                            </article>
                        </div>
                        <div className="post2">
                            <button type="button" className="button_documentation" onClick={button_documentation_click}>Entrar a la documentación de Vite <SiVite/></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Documentation;