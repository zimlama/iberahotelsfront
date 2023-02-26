import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import CreateHotel from "./Components/Create/CreateHotel";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/Destinations";
import DeleteUser from "./Components/DeleteUser/DeleteUser";
import HotelDetails from "../src/Components/HotelDetails/HotelDetails.js";
import AboutUs from "./Components/AboutUs/AboutUs";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createHotel" element={<CreateHotel />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/delete" element={<DeleteUser />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/hotels/:id" element={<HotelDetails />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          {/* <Route exact path="/activities" element={<Reservations/>}/> */}
          <Route exact path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
