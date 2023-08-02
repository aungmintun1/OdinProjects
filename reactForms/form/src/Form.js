import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Form() {


// we specify what type of data and then add required to make it mandotory that the user inputs that data

    const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is required!!"),         // must be a string
    email: yup.string().email().required(),     // must be a string and look like an actual email
    age: yup.number().typeError("enter a number for age").positive().integer().min(18).required(),      //must be a positive integer number. min value is 18
    password: yup.string().min(4).max(20).required(),               // must be a string with at least 4 letter and at most 20 letters
    confirmPassword: yup.string().oneOf([yup.ref("password"), null,], "passwords don't match").required(),    // compares the password string with confirm string and makes sure they match
    });

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
      console.log(data);
      };

  return (
    <div>

<form onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder="Full Name..." {...register("fullName")} />
<p>{errors.fullName?.message}</p>

<input type="text" placeholder="Email..." {...register("email")}/>
<p>{errors.email?.message}</p>

<input type="text" placeholder="Age..." {...register("age")} />
<p>{errors.age?.message}</p>

<input type="password" placeholder="Password..." {...register("password")}/>
<p>{errors.password?.message}</p>

<input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
<p>{errors.confirmPassword?.message}</p>
<input type="submit" />
</form>

    </div>

  )
}

/*
2. Form.js: import useForm from 'react-hook-form'

3.  const {register, handleSubmit } = useForm();
    we call handleSubmit function whenever we click submit button. This handles returning the data from onSubmit.
    onSubmit(); is the actual code that is activated whenever we click the submit button. It will passed as a parameter to handleSubmit();

    in Onsubmit(); "data" is the object that we get from the all the inputs once the user clicks submit.

4. The data that is submitted will come in the form of an object. The "register" variable acts as variables that you create in that object.
    <input type="text" placeholder="Full Name..." {...register("fullName")} />

    the object that is created will look like this

    {
    name: pedro,
    age:23,
    email: pedro@gmail.com, 
    etc..
    }

HOW TO CREATE VALIDATION IN OUR FORMS

1.import * as yup from 'yup'
2. we create the variable "schema", this is going to be the outline of our validation.
    our data is going to look like a object()

    we then use the shape() function that accepts an object. We then declare what is required in those variables in the object. 

    const schema = yup.object().shape({
    fullName: yup.string().required(),         // must be a string
    email: yup.string().email().required(),     // must be a string and look like an actual email
    age: yup.number().positive().integer().min(18).required(),      //must be a positive integer number. min value is 18
    password: yup.string().min(4).max(20).required(),               // must be a string with at least 4 letter and at most 20 letters
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),    // compares the password string with confirm string and makes sure they match
    // be careful of ("password") , null. do not put null in the parentheses
    });

3. we must then pass the schema into our resolver.
   go to terminal: npm install @hookform/resolvers

4. import { yupResolver } from '@hookform/resolvers/yup'

5. add the resolver and schema into the useForm() function

const { register, handleSubmit } = useForm({
resolver: yupResolver (schema),
});

MAKE SURE THAT THE SCHEMA IS ABOVE THE useForm() function!!!


HOW TO ACTIVATE ERRORS

1. go in the useForm(); and create a formState with errors in it. The 'errors' will be an object

const { register, handleSubmit, formState: {errors} } = useForm({
resolver: yupResolver(schema),
});

2. go to your form tag and add a <p> tag for the error message


<form onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder="Full Name..." {...register("fullName")} />
<p>{errors.fullName?.message}</p> // this will display the error message from the errors object for fullName

proceed to add <p> tags that contain all the error messages for the remaining inputs

3. You can write the error messages yourself. by going into the schema and writing the error msg in the required().

   a.const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is required!!"),    
    

    b.for the confirmed password error msg it is different. the msg will be next to null
    confirmPassword: yup.string().oneOf([yup.ref("password"), null,], "passwords don't match").required(),  

    c.to change the default error message when the age input is empty, you add the .typeError() method and type the error message in the parentheses
    age: yup.number().typeError("enter a number for age").positive().integer().min(18).required(),

*/