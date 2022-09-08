// style ref https://bootsnipp.com/snippets/4MrdQ

import { useState } from 'react';
import { useLogin } from '../services/login-api';
import './login.css';


const Login=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(username, password);
    }

    return(
        <div className="container h-100">
        <div className="d-flex justify-content-center">
            <div className="card mt-5 col-md-4 animated bounceInDown myForm">
                <div className="card-header">
                <p className="h1">Login</p>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div id="dynamic_container">
                            <div className="input-group  input-group-lg ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text br-15" ><i className="fas fa-at"></i></span>
                                </div>
                                <input type="text" placeholder="Enter username" className="form-control" onChange={(e)=> setUsername(e.target.value)} value={username}/>
                            </div>
                            <div className="input-group mt-3 input-group-lg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text br-15"><i className="fas fa-lock"></i></span>
                                </div>
                                <input type="password" placeholder="Enter password" className="form-control" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                            </div>
                        </div>
                        <div className="mt-3 ">
                            <button className="btn btn-success btn-sm float-right submit_btn" disabled={isLoading}><i className="fas fa-arrow-alt-circle-right"></i> Login</button>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    {error && <div className='error'> {error}</div>}
                </div>
            </div>
        </div>
        </div>
    )

}

export default Login;