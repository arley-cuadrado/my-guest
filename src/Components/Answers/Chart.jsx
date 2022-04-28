import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],   
        }
    ]
}

function DoughnutChart() {
    return (
        <div style={{width: "500px", margin: "0 auto"}}>
            <Doughnut data={data} />     
        </div>
    )
}

export default DoughnutChart