import React from 'react'

 function notfound() {
    return (
        <div>
            <h1 style={{marginLeft:200,marginTop:100,fontSize:50}}> PAGE NOT FOUND!</h1>
            <h2 style={{fontSize:300,marginLeft:400,color:'grey'}}>404</h2>
            <h1 style={{marginLeft:500,fontSize:40,textTransform:'uppercase',marginTop:30}}>We could not find the above page on our servers.</h1>
        </div>
    )
}
export default notfound;