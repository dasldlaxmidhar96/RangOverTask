import React, { useState } from 'react'
import LogPage from './LoginForm/LogPage'
import SignUp from './SignUp';

const Login = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
      }
  return (
    <div className="app">
      {
        currentForm === "login" ? <LogPage onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  )
}

export default Login