import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './services/useAuthContext';
//pages & components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Foods from './pages/Foods';
import Reviews from './pages/Reviews'
import Login from './pages/Login'
import Signup from './pages/Signup';
import ShowReview from './pages/ShowReview'
import EditReview from './components/EditReview';
import ShowFood from './pages/ShowFood';


function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/reviews'/>}/>
          <Route path='/reviews' element={user ? <Reviews /> : <Navigate to='/login'/>} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />}/>
          <Route path='/foods' element={<Foods />} />
          <Route path='/reviews/:id' element={<ShowReview />} />
          <Route path='/foods/:id' element={<ShowFood />} />
          <Route path='/:id/edit' element={<EditReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
