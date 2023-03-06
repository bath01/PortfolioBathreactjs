import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contact from "./Routes/contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   
  );
}

export default App;
 