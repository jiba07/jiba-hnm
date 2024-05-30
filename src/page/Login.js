import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    // 새로고침을 막음
    event.preventDefault();
    setAuthenticate(true);
    navigate('/');
  }
  return (
    <Container>
      <form onSubmit={(event) => loginUser(event)}>
        <div className='login-area'>
          <div className='input-id'>
            <label>ID</label>
            <input type='text' placeholder='Enter ID' />
          </div>
          <div className='input-pw'>
            <label>Password</label>
            <input type='password' placeholder='Password' />
          </div>

          <div className='button-area'>
            <button type='submit'>Login</button>
            <div className='signup-area'>
              <p>Don't have an account yet?</p>
              <a href='/login'>Sign up</a>
            </div>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default Login