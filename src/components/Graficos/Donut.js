import ApexCharts from "react-apexcharts"

const options = {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        
    }


export default function Donut(props) {

    const series = [44, 55, 41, 17, 15]

  return (
   
      <ApexCharts
        options={options}
        series={series}
        type="donut"
        width="100%"
        height="100%"
        
      />

  )
}