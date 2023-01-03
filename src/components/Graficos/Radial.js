import ApexCharts from "react-apexcharts"

const options = {
    chart: {
        type: "radialBar",
         fontFamily: 'system-ui'
      },
      colors: ['#61F3F3'],
      //series: [67],
      
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%"
          },
          track: {
            background: "#17749E",
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.05
            }
          },
         
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: false,
              color: "#888",
              fontSize: "13px",
            },
            value: {
              color: "#fff",
              fontSize: "100%",
              show: true,
              fontWeight: 800,
              align: 'center',
              offsetY: 5,
            }
          }
        }
      },
    
      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"],

      grid: {
        padding: {
            top: -15,
            right: -15,
            bottom: -15,
            left: -15
        },  
    }
        
    }


export default function Radial(props) {

    const series = [70]

  return (
   
      <ApexCharts
        options={options}
        series={series}
        type="radialBar"
        width="100%"
        height="100%"
        
      />

  )
}