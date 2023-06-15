import React  from 'react';
import boxes from './boxes'
import Box from "./component/box";
import "./style.css";
function App(props) {
  const[box, setBox]= React.useState(boxes)
  function toggle(id){
    const v = id-1;
    setBox(boxi=>{
      var newBox= [];
      for (var i=0;i<boxi.length;i++){
        if (i===v){
          const ntewBox={id:id,on:!boxi[i].on}
          newBox.push(ntewBox)
        }
        else{
          newBox.push(boxi[i]);
        }
        
      }
      console.log(newBox)
      return newBox;
      
      
    }
    )
    
  }

  const boxesi = box.map(one=>(
  <Box 
    key={one.id}
    id={one.id}
    on={one.on}
    fn = {toggle}
  />
    ))
  return (
    <main >
      <h1>Boxes will go here</h1>
      {boxesi}
    </main>
  );
}

export default App;
