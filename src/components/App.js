import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SideBar from './SideBar'
import Body from './Body'
import Square from './Square'


const App = ()=>{
    return (
        <div style={{
            display:"grid",
            gridTemplateAreas: "hdr hdr hdr" +"sde bod bod"+ "sde bod bod" + "ftr ftr ftr",

        }} >
            <div><Header /> </div>
        
            <div> <SideBar/></div>
            
            <div> <Body/></div>

            <div> <Square name = 'square1'/></div>
            <div> <Square name = 'square2'/></div>
            <div> <Square name = 'square3'/></div>
            <div> <Square name = 'square4'/></div>

            <div> <Footer/></div>

        </div>
    )
}

export default App