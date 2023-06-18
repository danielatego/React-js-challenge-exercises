import React from "react";

function App() {
  const [Registration,setFirstName]= React.useState({
    firstName:'',
    secondName:'',
    email:''
  })
  console.log(Registration)
  function handleChange(event){
    setFirstName({...Registration,[event.target.name]:event.target.value})
  }
  
  return (
    <form>
      <input 
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        name="firstName"
      />
       <input 
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        name="secondName"
      />
      <input 
        type='text'
        placeholder='email'
        onChange={handleChange}
        name="email"
      />
    </form>
  );
}

export default App;
