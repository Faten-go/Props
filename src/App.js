import React from 'react';
import Profile from './profile/Profile'

function App() {
  const handleName = fullName => alert(fullName);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      
      <Profile 
        fullName='Faten Fadhlaoui' 
        bio='I am a food tech engineer' 
        profession='Learning to be a web dev'  
        handleName={handleName}>
      
        <img src='/image.jpg' alt='' width="150px" />
      
      </Profile>
      
      
    </div>
  );
} 

export default App;
