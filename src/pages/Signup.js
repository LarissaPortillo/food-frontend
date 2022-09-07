import { useState } from 'react';
import { useSignup } from '../services/signup-api';

const Signup=()=>{
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await signup(name,username,password);
    }

    return(
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Name:</label>
            <input type='text'
                onChange={(e)=> setName(e.target.value)}
                value={name}>
                
            </input>
            <label>Username:</label>
            <input type='text'
                onChange={(e)=> setUsername(e.target.value)}
                value={username}>
                
            </input>
            <label>Password:</label>
            <input type='password' onChange={(e)=> setPassword(e.target.value)}
                value={password}>
               
            </input>
            <button disabled={isLoading}>Singup</button>
            {error && <div className='error'> {error}</div>}

        </form>
    )
}

export default Signup; 