// style ref https://bootsnipp.com/snippets/4MrdQ

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
        <div class="container h-100">
        <div class="d-flex justify-content-center">
            <div class="card mt-5 col-md-4 animated bounceInDown myForm">
                <div class="card-header">
                <p className="h1">Signup</p>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div id="dynamic_container">
                            <div class="input-group  input-group-lg ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text br-15"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" placeholder="Enter name" class="form-control"
                                 onChange={(e)=> setName(e.target.value)} value={name}/>
                            </div>
                            <div class="input-group mt-3  input-group-lg">
                                <div class="input-group-prepend">
                                    <span class="input-group-text br-15"><i class="fas fa-at"></i></span>
                                </div>
                                <input type="text" placeholder="Enter username" class="form-control"
                                onChange={(e)=> setUsername(e.target.value)} value={username}/>
                            </div>
                            <div class="input-group mt-3  input-group-lg">
                                <div class="input-group-prepend">
                                    <span class="input-group-text br-15"><i class="fas fa-lock"></i></span>
                                </div>
                                <input type="password" placeholder="Enter password" class="form-control" 
                                    onChange={(e)=> setPassword(e.target.value)} value={password}/>
                            </div>
                           </div>
                           <div className="mt-3 ">
                                <button class="btn btn-success btn-sm float-right submit_btn" disabled={isLoading}><i class="fas fa-plus-circle"></i> Sign up</button>
                            </div>
                    </form>
                </div>
                <div class="card-footer">
                    {error && <div className='error'> {error}</div>}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Signup; 