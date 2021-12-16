// background + react particles (part just below Navbar)
import React from 'react'
import Typed from 'react-typed'
import Particles from 'react-particles-js';

export const Display = () => {
    return (
        <>
            

        <div className="background d-flex flex-column justify-content-center align-items-center ">

            <Particles 
                params={{
                    particles: {
                        number:{
                          value:30,
                            destiny:{
                            enable:true,
                            value_area:1000
                            }
                        },

                          shape:{
                            type:"star",
                            stroke:{
                              width:6,
                              color:"#ececec"
                            }
                          }
                          

                    }
     
                    
                }}
            />



            <div className="mb-0" style={{color:"white"}}>
            this is a Display
            </div>
            

                   
                
                    <p className="topic text-center ">this is a tag </p>
                
                    <div className="react-typed  ">
                    <Typed 
                        className="typed "
                        strings = {["web design" , "web dev","google","facebook"]}
                        typeSpeed={40}
                        backspeed={60}
                        loop
                     />

            </div >  

            <div  >
                 <button type="button" className="btn btn-lg btn-outline-danger  m-3">Contact Us</button>  
            </div>



        
        </div> 

</>
    )
}
