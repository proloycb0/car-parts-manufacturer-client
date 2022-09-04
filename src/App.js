import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';
import Purchase from "./pages/Home/Purchase";
import RequireAuth from "./pages/Login/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile";
import AddReview from "./pages/Dashboard/AddReview";
import MyOrders from "./pages/Dashboard/MyOrders";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import AddProduct from "./pages/Dashboard/AddProduct";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageProduct from "./pages/Dashboard/ManageProduct";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div>
      <div >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/purchase/:id' element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          } />
          <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
            <Route index element={<MyProfile/>}/>
            <Route path='review' element={<AddReview/>}/>
            <Route path='orders' element={<MyOrders/>}/>
            <Route path='payment/:id' element={<Payment/>}/>
            <Route path='manageOrder' element={<ManageOrders/>}/>
            <Route path='product' element={<AddProduct/>}/>
            <Route path='makeAdmin' element={<MakeAdmin/>}/>
            <Route path='manageProduct' element={<ManageProduct/>}/>
          </Route>
          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
