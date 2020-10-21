import React from 'react'

function component(props) {
    const { fullName,bio,profession }=props;
    return (
        <div>
          <h2>
              {fullName+bio+profession} </h2> 
        </div>
    )
}

export default component
 