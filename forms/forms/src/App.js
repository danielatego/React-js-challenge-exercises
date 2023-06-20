import React from "react";

function App() {
  const [Registration,setFirstName]= React.useState({
    firstName:'',
    secondName:'',
    email:'',
    comment:'',
    isFriendly: true,
    employment:'',
    favColor:''

  })
  function handleChange(event){
    const{name,value,type,checked}=event.target
    setFirstName({...Registration,[name]:type === 'checkbox'?checked:value})
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(Registration)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        name="firstName"
        value={Registration.firstName}
      />
      <br />
       <input 
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        name="secondName"
        value={Registration.secondName}
      />
      <br />
      <input 
        type='text'
        placeholder='email'
        onChange={handleChange}
        name="email"
        value={Registration.email}
      />
      <br />
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
        id="isFriendly"
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
          name="employment" 
          checked= {Registration.employment==='unemployed'}
          value='unemployed' 
          onChange={handleChange}
       />
        <label htmlFor="Unemployed">Unemployed</label>
        <br />
        <input 
          type="radio"
          id="Part-time"
          name="employment" 
          checked={Registration.employment==='part-time'}      
          value='part-time' 
          onChange={handleChange}
        />
        <label htmlFor="Part-time">Part-time</label>
        <br />
        <input 
          type="radio"
          id="Full-time"
          name="employment" 
          checked={Registration.employment==='full-time'} 
          value='full-time'
          onChange={handleChange}
        />
        <label htmlFor="Full-time">Full-time</label>
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your favourite color?</label>
      <br />
      <select 
        id="favColor"
        value={Registration.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />
      {/* <input type="submit" value='submit' /> */}
      <button>Submit</button>
    </form>
  );
}

export default App;
