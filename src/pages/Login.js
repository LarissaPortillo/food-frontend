import { useState } from 'react';
import { useLogin } from '../services/login-api';

const Login=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(username, password);
    }

    return(
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Username:</label>
            <input type='text'
                onChange={(e)=> setUsername(e.target.value)}
                value={username}>
                
            </input>
            <label>Password:</label>
            <input type='password'
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
            >
                
            </input>
            <button disabled={isLoading}>Login</button>
            {error && <div className='error'> {error}</div>}
        </form>
    )

}

export default Login;