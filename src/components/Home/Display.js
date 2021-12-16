// background + react particles
import React from 'react'
import Typed from 'react-typed'
import Particles from 'react-particles-js';
import { Link } from "react-router-dom";
export const Display = () => {
    return (
        <>
        <div className="background d-flex flex-column justify-content-center align-items-center " >

            {/* 
            // React Particles --dangerous to use
            
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
            /> */}



            <div className="mb-0" style={{color:"white"}}>
            -Powered by Travetro
            </div>
            

                   
                
                    <p className="topic text-center ">Travel Tours</p>
                
                    <div className="react-typed  ">
                    <Typed 
                        className="typed"
                        strings = {["Monuments" , "Hotels","Flight","Holidays","Activities","Explore"]}
                        typeSpeed={40}
                        backspeed={60}
                        loop
                     />

            </div >  

            <div  >
                 <Link className="" to="/contact">
                 <button type="button" className="btn btn-lg btn-outline-danger fw-20 m-3">
              
                  Contact Us
                 
                 </button>  
                 </Link>
            </div>
        </div> 

</>
    )
}
