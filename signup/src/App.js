import React from "react";


function App() {
  const[user,setUser]=React.useState(
    {
      email:'',
      password1:'',
      password2:'',
      newsletter:false,
    }
  )
  function update(event){
    const {name,type,value,checked}=event.target
    setUser(nuser=>({...nuser,[name]:type==='checkbox'?checked: value}))

  }
  console.log(user)
  return(
    <div>
      <input 
      type="text"
      placeholder="email address"
      name="email"
      value={user.email}
      onChange={update}
    />
    <br />
    <br />
      <input 
      type="text"
      placeholder="password"
      name="password1"
      value={user.password1}
      onChange={update}
    />
    <br />
    <br />
      <input 
      type="text"
      placeholder="confirm password"
      name="password2"
      value={user.password2}
      onChange={update}
    />
    <br />
    <br />
    <input 
      type="checkbox" 
      id="radio"
      name="newsletter"
      checked={user.newsletter}
      onChange={update}
    />
    <label htmlFor="radio">I want to join the newsletter</label>
    </div>
    
  )

}

export default App;
