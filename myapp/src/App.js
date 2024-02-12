import Cartpage from "./pages/Cartpage";
import Home from "./pages/Home";
import Aboutpage from "./pages/About"
import Shoppage from "./pages/Shoppage"
import Blogpage from "./pages/Blogpage";
import { Route,Routes } from 'react-router-dom';
import Contactus from "./pages/Contactuspage";
import purchase from "./pages/Purchase";
import ScrollToTop from "./pages/Scrolltop";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Thankyou from "./pages/Thankyou";


function App() {
  return (
    <div className="">   
    <ScrollToTop/> 
     <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/shop" Component={Shoppage}></Route>
      <Route path="/aboutus"Component={Aboutpage}></Route>
      <Route path="/blog" Component={Blogpage}></Route>
      <Route path="/contactus" Component={Contactus}></Route>
      <Route path="/cart" Component={Cartpage}></Route>
      <Route path="/purchase" Component={purchase}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/signup" Component={Signup}></Route>
      <Route path="/thank" Component={Thankyou}></Route>
   
    
     </Routes>
    
    </div>
  );
}

export default App;
 