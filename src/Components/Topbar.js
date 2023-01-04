import React from 'react'
import { Link } from 'react-router-dom'


function Topbar() {
  return (
  <>
    <nav className="navbar navbar-light " style={{backgroundColor:"#E3E9EE"}}>
             <div className="container-fluid">
           
                <div> 
               
                 
                    
        
                         <h6 className="mr-2 d-none d-lg-inline text-black-600 small d-flex-end"> Shanmuga priya </h6>
                    <Link className="btn btn-outline-dark btn-sm" to="/" style={{marginLeft:"55rem"}}>Logout</Link>
                </div>

            </div>
        </nav>
  </>
  )
}

export default Topbar
