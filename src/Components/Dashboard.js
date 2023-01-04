import React from 'react'
import Card from './Card';


import { faBook,    faUserPlus, faPeopleLine, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import Visible from '../Visible';
import { style } from '@mui/system';



function DashBoard() {
 
  return (
    <>
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                     
                    </div>
                    <div class="row">

                     <Card title="Borrowed"  value="142" color="info" icon={faBook} cl="warning"/>
                     <Card title="Overdue" value="8"color="info" icon={faBookOpenReader} cl="warning"/>
                     <Card title="Visitors" value="532" color="info" icon={faPeopleLine} cl="warning"/>
                     <Card title="New member" value="42"color="info" icon={faUserPlus} cl="warning"/>
                     </div>
          
         
<Visible/>
                    
                    </>
                    
  )


  }


export default DashBoard
