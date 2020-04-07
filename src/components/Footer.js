import React from 'react'

const Footer = ()=>{
    return (
        <div style ={{
            gridArea:'ftr',
            width:'100%',
            display:"flex",
            alignContent:"end",
            justifyContent:"center"

        }}>copyright {new Date().getMonth()+'/'+new Date().getDay()+'/'+ new Date().getFullYear()}</div>
    )
}

export default Footer