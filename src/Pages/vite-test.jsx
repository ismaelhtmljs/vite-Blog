import React from "react";
import { SiVite } from "react-icons/si";
import LoadingScreen from "../Components/LoadingScreen";
import '../Css/button_vite_ofcial.css'

function EnlaceViteOficial() {
    window.open('https://vite.dev/','bank_')
}

function ViteTest() {
    return(
        <>
            <LoadingScreen/>
            <main>
                <div className="contenedor-contenido">
                    <div className="contenedor-post">
                        <div className="post1">
                            <div className="titulo_post1">
                                <h1>🎉Prueba Vite <SiVite className="vite-icon"/>🎉</h1>
                            </div>
                            <article>
                                <p>
                                    Vite es una herramienta moderna y poderosa diseñada para optimizar el flujo de trabajo 
                                    en proyectos front-end. Su enfoque innovador se centra en la velocidad, utilizando un 
                                    servidor de desarrollo increíblemente rápido impulsado por ESBuild y la creación de 
                                    paquetes de producción altamente optimizados con Rollup. 
                                </p>
                                <p>
                                    La principal ventaja de Vite es su capacidad para ofrecer una experiencia de desarrollo 
                                    fluida y sin complicaciones. En lugar de trabajar con tiempos de construcción largos y 
                                    frustrantes, Vite permite una recarga en caliente (HMR) prácticamente instantánea, 
                                    incluso en proyectos grandes y complejos. Esto significa que puedes centrarte más en el 
                                    desarrollo y menos en esperar a que tus cambios se reflejen.
                                </p>
                                <p>
                                    Vite también soporta de manera nativa los módulos ES, lo que elimina la necesidad de 
                                    configuraciones complicadas para la mayoría de los proyectos. Ya sea que estés trabajando 
                                    con frameworks populares como React, Vue o Svelte, o simplemente con HTML, CSS y JavaScript 
                                    puros, Vite se adapta perfectamente a tus necesidades. Además, su ecosistema de plugins 
                                    es extensible y compatible con los estándares más recientes.
                                </p>
                                <p>
                                    Si aún no lo has probado, ahora es el momento perfecto para descubrir cómo Vite puede 
                                    transformar tu forma de desarrollar aplicaciones web. ¡No te quedes atrás! Dale una oportunidad 
                                    a Vite y experimenta la diferencia en tu próximo proyecto. Con su enfoque centrado en el 
                                    rendimiento, simplicidad y modernidad, Vite se posiciona como la herramienta del futuro 
                                    para el desarrollo front-end.
                                </p>
                            </article>
                        </div>
                        <div className="post2">
                            <button type="button" className="button_vite_blog_oficial" onClick={EnlaceViteOficial}>Ir a la página oficial de <strong>Vite</strong><SiVite/></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ViteTest;