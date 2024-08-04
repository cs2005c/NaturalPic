import { useContext } from "react";
import { MiContexto } from "../Context/MiContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(MiContexto);

  const agregarFavorito = (id) => {
    const nuevasFotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(nuevasFotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          onClick={() => agregarFavorito(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.tiny})` }}
          key={i}
        >
          <IconHeart filled={photo.isFavorite} />
          <p>
            {photo.alt} <span className="autor">{photo.photographer}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
