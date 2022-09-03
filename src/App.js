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
