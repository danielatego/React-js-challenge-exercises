
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
  function d(event){
    event.preventDefault()
    if (user.password1===user.password2){
      console.log('successfully signed up')
      user.newsletter?
      console.log('Thanks for signing up'):console.log('')
    }
    else{console.log('Error: The password do not match')}
    
    
    

  }

  console.log(user)
  return(
    <form onSubmit={d}>
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
      type="password"
      placeholder="password"
      name="password1"
      value={user.password1}
      onChange={update}
    />
    <br />
    <br />
      <input 
      type="password"
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
    <br /><br />
    <button>Submitt</button>
    </form>

    
  )

}

export default App;
