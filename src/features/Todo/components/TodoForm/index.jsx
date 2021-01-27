import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-controls/InputField';
TodoForm.propTypes = {
   onSubmit: PropTypes.func,
};

function TodoForm(props) {
   const form = useForm({
      defaultValues: {
         title: '',
      },
   });
   const handleFormSubmit = (values) => {
      console.log(values);
   };
   return (
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
         <InputField name="title" label="Todo" form={form} />
      </form>
   );
}

export default TodoForm;
