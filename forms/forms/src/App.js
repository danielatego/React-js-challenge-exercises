import React from "react";

function App() {
  const [firstName,setFirstName]= React.useState(['',''])
  console.log(firstName)
  function handleChange(event){
    const mama=[];
    setFirstName([firstName[0],event.target.value])
  }
  function handlChange(event){
    setFirstName([event.target.value,firstName[1]])
  }
  return (
    <form>
      <input 
        type='text'
        placeholder='First Name'
        onChange={handleChange}
      />
       <input 
        type='text'
        placeholder='Last Name'
        onChange={handlChange}
      />
      
    </form>
  );
}

export default App;
