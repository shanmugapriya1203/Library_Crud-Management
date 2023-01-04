import React from 'react'
import { BarChart } from './Components/Bar'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,

  ArcElement,
} from 'chart.js';
ChartJS.register(
  ArcElement,
 
);


function Visible() {
  return (
<div className='row'>
                     <div class="col-xl-8 col-lg-7">
                     <h4>Visitors & Borrowers Statistics</h4>
                        <div class="card shadow mb-4">
                       
                        <div class="card-body">
                          
                                    <div class="chart-area">

                                   <BarChart/>
                                        </div>
                            </div>
                            </div>

</div>

<div className='col-lg-4'>
  <h4>Visitors By Age</h4>
                      <div class="card shadow mb-4">
              
                      <Doughnut data={{
                                   labels: ["11-20","20-30","31-40","Others"],
                                   datasets: [
                                       {
                                           label: " ",
                                           data: [40, 20, 15,25],
                                           backgroundColor: [
                                               "rgba(3, 201, 169)",
                                               "rgba(13, 180, 185)",
                                               "rgba(183, 244, 216)",
                                               "rgba(22, 160, 133)"
                                           ],
                                          
                                           borderwidth: 500,
                                           cutout: "83%"
                                       }
                                   ]
                              }}/>
                            </div>
                            </div>
                        </div>
  )
}

export default Visible
