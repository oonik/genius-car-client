import React, { useContext } from 'react';
import logo from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result =>{
          const user = result.user;

          const currentUser = {
            email: user.email
          }
          console.log(currentUser)
         // get jwt token
          fetch('https://genius-car-server-two-alpha.vercel.app/jwt', {
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(currentUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            // local storage is not the best place to store jwt token(easy system)
            localStorage.setItem('genius-token',data.token) 
            navigate(from,{replace: true})
          });

          form.reset();
          
        })
        .catch(error =>{
          console.error(error)
        });
        
    };

    
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
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Login;

