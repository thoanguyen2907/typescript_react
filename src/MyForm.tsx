import { Button, TextField } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import MyField from './MyField';

interface Values {
    firstName: string; 
    lastName: string; 
    email: string; 
}


interface Props {
    onSubmit : (values: Values) => void ;
}

export const MyForm: React.FC<Props> = ({onSubmit}) => {
    return ( <Formik initialValues = {{firstName: '', lastName: '', email: ''}} 
    onSubmit = {(values) => {
        onSubmit(values)
    }}>
            {({values, handleChange})=> (
                <Form style = {{textAlign:"center"}}>
                    <div className="">
                    <Field name="firstName" placeholder = "firstName"
                    component = {MyField}
                    />
                    </div>
                    <div className="">
                    <Field name="lastName"
                    placeholder = "lastName"
                    component = {MyField}/>
                    </div>
                    <div className="">
                    <Field name="email"
                      placeholder = "email"
                      component = {MyField}/>
                    </div>
                   <div className="">
                   <Button type="submit" variant="contained" color="primary">
  Primary
</Button>
                   </div>
                 </Form>
            )}
        </Formik>
    


         
      
    );
}

export default MyForm;
