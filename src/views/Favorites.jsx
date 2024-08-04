import { useContext } from "react";
import { MiContexto } from "../context/MiContext";

const Favorites = () => {
  const { photos, setPhotos } = useContext(MiContexto);

  const removerFavorito = (id) => {
    const nuevasFotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          Liked: false,
        };
      }

      return photo;
    });
    setPhotos(nuevasFotos);
  };

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-4 p-3">
        {photos
          .filter((photo) => photo.isFavorite)
          .map((photo, i) => (
            <div
              className="photo"
              style={{ backgroundImage: `url(${photo.src.tiny})` }}
              key={i}
            >
              <p> {photo.alt} </p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Favorites;
