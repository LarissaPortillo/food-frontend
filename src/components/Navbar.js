import { Link } from 'react-router-dom';
import { useLogout } from '../services/logout-api';
import { useAuthContext } from '../services/useAuthContext';
import './navbar.css'

const Navbar=()=>{
    const { logout } = useLogout();
    const { user } = useAuthContext();
    

    const handleClick=()=>{
        logout();
    }
    
    return(
        <header>
            <div className='navcontainer'>
                <Link to='/' className='nav homeLink'> home </Link>
                <Link to='/foods' className='nav foodLink'> filmfood </Link>
                <nav>
                    {user && (
                        <div className='auth'>
                            <Link to='/reviews' className='nav reviewLink'>  myCravings </Link>
                            <button onClick={handleClick} className='outbtn'>logout</button>
                        </div>
                    )}
                    {!user && (
                        <div className='logsign' >
                            <Link to='/login' className='nav log'>Login</Link>
                            <Link to='/signup' className='nav sign'>Signup</Link>
                        </div> 
                    )}
                    
                </nav>

            </div>
        </header>
    )
}

export default Navbar;
