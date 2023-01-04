import React from "react"; 
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from "chart.js"; 

 import { Bar } from "react-chartjs-2";
ChartJS.register( 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
); 
 
export const options = { 
    responsive: true, 
    plugins: { 
        legend: { 
            position: "top" 
        }, 
        title: { 
            display: false, 
            text: "Chart.js Bar Chart" 
        } 
    } 
}; 
 
const labels = ["Tue","Wed","Thu","Fri","Sat","Sun","Mon"]; 
 
export const data = { 
    labels, 
    datasets: [ 
        { 
            label: "Visitors", 
            data: [79,100,55,76,92,80,70], 
            backgroundColor: "#03c9a9", 
            barPercentage: 0.4 
        } ,   { 
            label: "Borrowers", 
            data: [35,15,22,52,25,49,10], 
            backgroundColor: "#0db4b9", 
            barPercentage: 0.4 
        } 
    ] 
}; 
 
export function BarChart() { 
    return  <Bar options={options} data={data} /> 
}