import { Route, Routes } from "react-router-dom";
import Home from "./modules/Home/Home";
import Navbar from "./shared/components/NavBar";
import Ticket from "./modules/Ticket/Ticket";
import ContactPage from "./modules/Contact/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <Ticket/>
      {/* {<ContactPage/>} */}
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Ticket" element={<Ticket />} ></Route>
      </Routes> */}
    </>
  )
}
export default App;
