import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { setAuthToken } from '../../Api/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {loginWithEmail} = useContext(AuthContext);

    const handleEmailLogin = ()=>{
        loginWithEmail()
        .then(result =>{
          const user = result.user;
          console.log(user)
          setAuthToken(user)
          
        })
        .catch(error =>{
          console.error(error)
        });
        
      }
    return (
        <div className='text-center'>
            <button onClick={handleEmailLogin} className="btn btn-outline btn-primary m-10"><span className='mr-4'>Continue with email</span> <FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;