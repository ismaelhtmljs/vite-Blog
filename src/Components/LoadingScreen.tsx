import React,{useEffect,useState} from "react";

function LoadingScreen(){
    const [loading, setLoading] = useState(true);  // Estado de la pantalla de carga

    useEffect(() => {
        document.body.style.overflow = 'hidden'; //aqui se quita para que no se permita hacer scroll
        // Simula una espera de 3 segundos antes de que la pantalla de carga desaparezca
        setTimeout(() => {
            setLoading(false); // Después de 3 segundos, la pantalla de carga desaparece
            document.body.style.overflow = 'auto'; //luego de los 3 segundos se activa para poder hacer scroll
        }, 3000);
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return(
        <>
            {loading && (
                <div className="loading-screen">
                    <div className="loader-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>Cargando Sección de la página...</p>
                </div>
            )}
        </>
    )
}

export default LoadingScreen;