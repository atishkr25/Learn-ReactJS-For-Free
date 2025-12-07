
import { MovieProvider } from "./contexts/MovieContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <MovieProvider>
      <ThemeProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </MovieProvider>
  )
}

export default App;