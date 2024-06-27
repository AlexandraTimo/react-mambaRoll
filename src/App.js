import "./App.css";
import Home from "./components/Home/Home";
import Actions from "./components/Actions/Actions";
// import First from "./components/First/First";
// import Header from "./components/Header/Header";
// import Second from "./components/Second/Second";
import {Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";


const App = () => {
  return (
    <main className="wrapper">
      {/* <Header />
      <First />
      <Second /> */}
      <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/Actions" element={<Actions />} />
       <Route path="/Contacts" element={<Contacts />} />

     </Routes>

    </main>
  );
};

export default App;
