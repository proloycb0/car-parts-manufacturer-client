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
import NotFound from "./pages/Shared/NotFound";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import RequireAdmin from "./pages/Login/RequireAdmin";
import AllProducts from "./pages/Home/AllProducts";

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
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/allProduct' element={<AllProducts />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<MyProfile />} />
            <Route path='review' element={<AddReview />} />
            <Route path='orders' element={<MyOrders />} />
            <Route path='orders/payment/:id' element={<Payment />} />
            <Route path='manageOrder' element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
            <Route path='product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
            <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
            <Route path='manageProduct' element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
