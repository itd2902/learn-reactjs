import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './components/Register/RegisterForm';

Register.propTypes = {};

function Register(props) {
   const handlerSubmit = (value) => {
      console.log(value);
   };
   return <RegisterForm onSubmit={handlerSubmit} />;
}

export default Register;
