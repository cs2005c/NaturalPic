import { createContext, useEffect, useState } from "react";
import RutaFoto from "../Data/photos.json";

export const MiContexto = createContext();

const FotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const CargaFotos = () => {
    /*    try { */
    setPhotos(RutaFoto.photos.map((photo) => ({ ...photo, liked: false })));
    /*  } catch (error) { */
    /* alert("Error al Cargar Fotos:", error); */
    /* } */
  };

  useEffect(() => {
    CargaFotos();
  }, []);

  return (
    <MiContexto.Provider value={{ photos, setPhotos }}>
      {children}
    </MiContexto.Provider>
  );
};

export default FotosProvider;
