import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import InputField from '../../../../components/form-controls/InputField';
import InputField from 'components/form-controls/InputField';
import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
RegisterForm.propTypes = {
   onSubmit: PropTypes.func,
};
function RegisterForm(props) {
   const schema = yup.object().shape({
      title: yup.string().required('Please enter title').min(5, 'Title is too short'),
   });
   const form = useForm({
      defaultValues: {
         fullName: '',
         email: '',
         password: '',
         retypePassword: '',
      },
      resolver: yupResolver(schema),
   });
   const handleFormSubmit = (values) => {
      console.log(values);
   };
   return (
      <>
         <Avatar>
            <LockOutlined></LockOutlined>
         </Avatar>
         <Typography component="h3">Create An Account</Typography>
         <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <InputField name="fullName" label="FullName" form={form} />
            <InputField name="email" label="Email" form={form} />
            <InputField name="password" label="Password" form={form} />
            <InputField name="retypePassword" label="RetypePassword" form={form} />
         </form>
      </>
   );
}

export default RegisterForm;
