import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import NoEncontrado from "./views/NoEncontrado";
import FotosProvider from "./Context/MiContext";

const App = () => {
  return (
    <FotosProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </div>
    </FotosProvider>
  );
};
export default App;
