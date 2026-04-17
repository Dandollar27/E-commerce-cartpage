import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Page/Landingpage";
import Header from "./Components/Header";
import Details from "./Components/details";
import Detailspage from "./Page/Detailspage";
import Store from "./Components/Store";
import Cart from "./Components/Cart";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/details/:id" element={<Detailspage/>}/>
      <Route path="/store" element={<Store />} /> 
      <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;