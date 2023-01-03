import ApexCharts from "react-apexcharts"



const options = {
    chart: {
      height: 350,
      type: 'area',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
     dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth' //smooth, straight, stepline
    },
    title: {
      text: 'Area Installed',
      align: 'left'
    },
   
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'], 
      labels:{
        show: false
      }
    },

    yaxis: {
        labels: {
            show: false
        }
    },

      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: false
            },
            
        },  
        row: {
            colors: undefined,
            opacity: 0.5
        },  
        column: {
            colors: undefined,
            opacity: 0.5
        },  
        padding: {
            top: 0,
            right: 10,
            bottom: 0,
            left: 0
        },  
    }
   
  }


   /* grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },  */




export default function Line(props) {

    const series = [
        {
            name: "High - 2013",
            data: [28, 29, 33, 36, 32, 32, 33]
          },
          {
            name: "Low - 2013",
            data: [12, 11, 14, 18, 17, 13, 13]
          }
      ]
    

  return (
   
      <ApexCharts
        options={options}
        series={series}
        type="area"
        width="100%"
        height="100%"
        
      />

  )
}