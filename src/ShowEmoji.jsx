import React from 'react'

export default function ShowEmoji(props) {
    let {x,y,z}=props
    if((x==y) && (y==z)){
      return(
        <>
          <h1>{x} {y} {z}</h1>
          <h1>This is matching!</h1>
          <hr />
        </>
      )
    }else{
      return(
        <>
          <h1>{x} {y} {z}</h1>
          <h1>This is not matching!</h1>
          <hr />
        </>
      )
    }
}
