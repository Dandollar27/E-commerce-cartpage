import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Page/Landingpage";
import Header from "./Components/Header";
import Details from "./Components/details";
import Detailspage from "./Page/Detailspage";
 import Cart from "./Components/Cart"
import CheckupList from "./Components/CheckupList";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/details/:id" element={<Detailspage/>}/>
      {/* <Route path="/"  element={<CheckupList/>}/> */}
       <Route path="/Cart" element={<Cart />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;