import React, { useContext } from 'react';
import logo from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const {loginUser, loginWithEmail} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          form.reset();
        })
        .catch(error =>{
          console.error(error)
        })
    };

    const handleEmailLogin = ()=>{
      loginWithEmail()
      .then(result =>{
        const user = result.user;
        console.log(user)
      })
      .catch(error =>{
        console.error(error)
      })
    }
    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img src={logo} alt="" />
    </div>
    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-10">
    <h1 className="text-5xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center'>New to genius car? <Link to='/signup' className='text-red-600 font-bold'>Sign Up</Link></p>
      <button onClick={handleEmailLogin} className="btn btn-outline btn-primary m-10"><span className='mr-4'>Continue with email</span> <FaGoogle></FaGoogle></button>
    </div>
  </div>
</div>
    );
};

export default Login;

