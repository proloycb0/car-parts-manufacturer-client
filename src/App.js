import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';


function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
