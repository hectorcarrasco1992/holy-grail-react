import React from 'react'

const Body = ()=>{
    return (
        <div style={{
            gridArea:"bod"
        }}>
            <div style={{gridArea:'bod'}}>
                <img src="./images/thumb_tag-a-mate-in-this-so-they-have-to-open-23102657.png" 
                style={{
                    width:600,
                    height:400

                }}
                ></img>
            </div>
            <div>
                <p>A picture</p>
            </div>
        </div>
    )
}

export default Body     