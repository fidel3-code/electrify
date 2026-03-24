import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Mpesa from './components/Mpesa';
import GetProducts from './components/GetProducts';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import { FaBoxOpen, FaPlusCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">

        <h1 className='text-white'>electrify™</h1>
        
      </header>

      <nav className="navbar fixed-bottom bg-white border-top py-2 shadow-sm">
  <div className="container-fluid d-flex justify-content-around px-0">
    
    {/* Get Products */}
    <NavLink to="/" className="nav-link d-flex flex-column align-items-center" 
      style={({ isActive }) => ({ color: isActive ? '#198754' : '#6c757d', fontWeight: isActive ? 'bold' : 'normal' })}>
      <FaBoxOpen size={22} />
      <span style={{ fontSize: '0.7rem' }}>Products</span>
    </NavLink>

    {/* Add Products */}
    <NavLink to="/addproducts" className="nav-link d-flex flex-column align-items-center"
      style={({ isActive }) => ({ color: isActive ? '#198754' : '#6c757d', fontWeight: isActive ? 'bold' : 'normal' })}>
      <FaPlusCircle size={22} />
      <span style={{ fontSize: '0.7rem' }}>Add</span>
    </NavLink>

    {/* Sign In */}
    <NavLink to="/signin" className="nav-link d-flex flex-column align-items-center"
      style={({ isActive }) => ({ color: isActive ? '#198754' : '#6c757d', fontWeight: isActive ? 'bold' : 'normal' })}>
      <FaSignInAlt size={22} />
      <span style={{ fontSize: '0.7rem' }}>Sign In</span>
    </NavLink>

    {/* Sign Up */}
    <NavLink to="/signup" className="nav-link d-flex flex-column align-items-center"
      style={({ isActive }) => ({ color: isActive ? '#198754' : '#6c757d', fontWeight: isActive ? 'bold' : 'normal' })}>
      <FaUserPlus size={22} />
      <span style={{ fontSize: '0.7rem' }}>Sign Up</span>
    </NavLink>

  </div>
</nav>


     

      

      


      <Routes>
        <Route path='/' element={ <GetProducts/>}/>
        <Route path='/addproducts' element={ <AddProduct/>}/>
        <Route path='/mpesa' element={ <Mpesa/>}/>
        <Route path='/signin' element={ <SignIn/>}/>
        <Route path='/signup' element={ <SignUp/>}/>
      </Routes>

       


     <footer className="bg-dark text-white text-center p-3 mt-4">
  <p className="mb-0">© 2026 electrify™</p>
</footer>
    </div>
    </Router>
  );
}

export default App;
