import Form from './Form';

import './App.css';

function App() {


 

  return (
    <div className="App">

      <Form/> 
     
    </div>
  );
}

export default App;

/* 
1. terminal: npm install react-hook-form yup
2. Form.js: import useForm from 'react-hook-form'
3.  const {register, handleSubmit } = useForm();
    we call handleSubmit function whenever we click submit button. This handles returning the data from onSubmit.
    onSubmit is the actual code that is activated whenever we click the submit button. It will passed as a parameter to handleSubmit();


*/