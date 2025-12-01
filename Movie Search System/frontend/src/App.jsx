
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;