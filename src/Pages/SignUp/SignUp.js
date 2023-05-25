import React, { useContext } from 'react';
import signup from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../Api/auth';


const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      setAuthToken(user);
      form.reset();
    })
    .catch(error =>{
      console.error(error)
    })
  }
    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img src={signup} alt="" />
    </div>
    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-10">
    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
      <p className='text-center'>Already have an account? <Link to='/login' className='text-red-600 font-bold'>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;