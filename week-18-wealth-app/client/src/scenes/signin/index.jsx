import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserId } from 'state';
import loginImg from 'assets/login.jpg';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signInHandler = async (e) => {
    e.preventDefault();
    const { data: user } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/signin`,
      {
        email: email,
        password: password,
      }
    );

    dispatch(setUserId(user._id));

    if (user.user && user.status === 'ok') {
      localStorage.setItem('user', JSON.stringify(user.user));
      alert('Login Successful');
      window.location.href = '/dashboard';
    } else {
      alert('Login Failed, Please check username & password / sign up');
    }

    return user;
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt='' />
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
        <form
          className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
          onSubmit={(e) => signInHandler(e)}
        >
          <h2 className='text-4xl dark:text-white font-bold text-center'>
            LOGIN
          </h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Username</label>
            <input
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='text'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input
              className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'>
              <input className='mr-2' type='checkbox' /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
            SIGN IN
          </button>
          <p className='text-gray-400 flex items-center justify-center'>
            Not a member? Please &nbsp;
            <span
              className='hover:text-blue-500 hover:underline hover:cursor-pointer'
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
