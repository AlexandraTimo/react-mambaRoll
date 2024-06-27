import "./App.css";
import Home from "./components/Home/Home";
import Actions from "./components/Actions/Actions";
import {Route, Routes,useLocation } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Delivery from "./components/Delivery/Delivery";
import Politics from "./components/Politics/Politics";
import PublicOffer from "./components/PublicOffer/PublicOffer";
import NotFound from "./components/404/NoFound";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart/Cart";
import CartEmpty from "./components/CartEmpty/CartEmpty";
import Checkout from "./components/Checkout/Checkout";
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";




const App = () => {
const location= useLocation()

  return (
    <main className="wrapper">
      {/* <Header />
      <First />
      <Second /> */}
<CartProvider >
<AnimatePresence wait>
      <Routes key = {location.pathname}  location={location}  >
       <Route path="/" element={<Home />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/Actions" element={<Actions />} />
       <Route path="/Delivery" element={<Delivery />} />
       <Route path="/Contacts" element={<Contacts />} />
       <Route path="/Politics" element={<Politics />} />
       <Route path="/PublicOffer" element={<PublicOffer />} />
       <Route path="/Cart" element={<Cart />} />
       <Route path="/Cart" element={<CartEmpty />} />
       <Route path="/Checkout" element={<Checkout />} />
       <Route path="/OrderConfirm" element={<OrderConfirm />} />
       <Route path="*" element={<NotFound />} />
     </Routes>
     </AnimatePresence>
     </CartProvider>
    </main>
  );
};

export default App;
