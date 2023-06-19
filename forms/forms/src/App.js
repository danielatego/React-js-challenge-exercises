import React from "react";

function App() {
  const [Registration,setFirstName]= React.useState({
    firstName:'',
    secondName:'',
    email:'',
    comment:'',
    isFriendly: true

  })
  console.log(Registration)
  function handleChange(event){
    const{name,value,type,checked}=event.target
    setFirstName({...Registration,[name]:type === 'checkbox'?checked:value})
  }
  
  return (
    <form>
      <input 
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        name="firstName"
        value={Registration.firstName}
      />
       <input 
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        name="secondName"
        value={Registration.secondName}

      />
      <input 
        type='text'
        placeholder='email'
        onChange={handleChange}
        name="email"
        value={Registration.email}

      />
      <textarea 
      name="comment" 
      placeholder="comment"
      onChange={handleChange}
      cols="30" 
      rows="10"
      value={Registration.comment}
      />
      <br />
      <br />
      <input 
        type="checkbox"
        name="isFriendly"
        checked={Registration.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly</label>
      <br />
      <br />
      <fieldset>
        <legend> Current employment status</legend>
        <input 
          type="radio"
          id="Unemployed"
        />
        <label htmlFor="Unemployed">Unemployed</label>
        <br />
        <input 
          type="radio"
          id="Part-time"
        />
        <label htmlFor="Part-time">Part-time</label>
        <br />
        <input 
          type="radio"
          id="Full-time"
        />
        <label htmlFor="Full-time">Full-time</label>
      </fieldset>
    </form>
  );
}

export default App;
