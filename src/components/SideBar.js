import React from 'react'

const SideBar = ()=>{
    return (
        <div>
            <ul style={{
                width:"20%",
                // display:"flex",
                // flexDirection:"column",
                gridArea:'sde'
                

                
            }}>
                <li>Dominican Food</li>
                <li>Pizza</li>
                <li>Mexican</li>
                <li>BBQ</li>
                <li>Seafood</li>
            </ul>
        </div>
    )
}

export default SideBar