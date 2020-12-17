import React from 'react'
import PropTypes from 'prop-types'
function Profile(props) {
    return (
        <div className="cardProfile">
          <h2 style={{color:"blue", padding:"20px"}}>My Name: {props.fullName} </h2> 
          <h2 style={{color:"red", padding:"20px"}}>My Bio: {props.bio}</h2>  
          <h2 style={{color:"green", padding:"20px"}}>My current profession: {props.profession} </h2>  
          {props.children}
          
          <button onClick={() => props.handleName(props.fullName)}>
            Alert !
          </button>
        </div>
    )
}
Profile.defaultProps = {
  fullName:'Faten Fadhlaoui',
  bio :'I am  food technology engineer',
  profession :'learning to be web developer', 
}
Profile.ProtoTypes = {
  fullName: PropTypes.string ,
  bio:PropTypes.string,
  profession : PropTypes.string
}

export default Profile