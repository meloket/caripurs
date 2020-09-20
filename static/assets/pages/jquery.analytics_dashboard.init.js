/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Dashboard Js
 */


  //colunm-1
  
var options = {
  chart: {
      height: 340,
      type: 'bar',
      toolbar: {
          show: false
      }
  },
  plotOptions: {
      bar: {
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: '25%',
      },
  },
  dataLabels: {
      enabled: false
  },
 
  stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
  },
  colors: ["#4d79f6", "#394b7b"],
  series: [{
      name: 'New Visitors',
      data: [68, 44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
      name: 'Unique Visitors',
      data: [51, 76, 85, 101, 98, 87, 105, 91, 114, 94]
  },],
  xaxis: {
      categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      axisBorder: {
        show: true,
        color: '#28365f',
      },  
      axisTicks: {
        show: true,
        color: '#28365f',
      },    
  },
  legend: {
    offsetY: -10,
  },
  yaxis: {
      title: {
          text: 'Visitors'
      },      
  },
  fill: {
      opacity: 1

  },
  // legend: {
  //     floating: true
  // },
  grid: {
      row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.2
      },
      borderColor: '#f1f3fa'
  },
  tooltip: {
    theme: "dark",   
      y: {
          formatter: function (val) {
              return "" + val + "k"
          }
      }
  }
}

var chart = new ApexCharts(
  document.querySelector("#ana_dash_1"),
  options
);

chart.render();


// traffice chart


var optionsCircle = {
    chart: {
      type: 'radialBar',
      height: 240,
      offsetY: -30,
      offsetX: 20
    },
    plotOptions: {
      radialBar: {
        inverseOrder: true,      
        hollow: {
          margin: 5,
          size: '55%',
          background: 'transparent',
        },
        track: {
          show: true,
          background: '#3c4a82',
          strokeWidth: '10%',
          opacity: 1,
          margin: 5, // margin is in pixels
        },
  
        dataLabels: {
          name: {
              fontSize: '18px',
          },
          value: {
              fontSize: '16px',
              color: '#b9c2d6',
          },          
        }
      },
    },
    series: [71, 63],
    labels: ['Domestic', 'International'],
    legend: {
      show: true,
      position: 'bottom',
      offsetX: -40,
      offsetY: -10,
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        gradientToColors: ['#40e0d0', '#ff8c00', '#ff0080']
      }
    },
    stroke: {
      lineCap: 'round',
      colors: ["#515988"]
    },
  }
  
  var chartCircle = new ApexCharts(document.querySelector('#circlechart'), optionsCircle);
  chartCircle.render();
  
  
  
  var iteration = 11
  
  function getRandom() {
    var i = iteration;
    return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
  }
  
  function getRangeRandom(yrange) {
    return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  }
  
  window.setInterval(function () {
  
    iteration++;
  
    chartCircle.updateSeries([getRangeRandom({ min: 10, max: 100 }), getRangeRandom({ min: 10, max: 100 })])
  
  
  }, 3000)


// saprkline chart


var dash_spark_1 = {
    
  chart: {
      type: 'area',
      height: 85,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 0.05,
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  tooltip: {
    theme: "dark",
  },
  colors: ['#f3c74d'],
}
new ApexCharts(document.querySelector("#dash_spark_1"), dash_spark_1).render();

var dash_spark_2 = {
    
  chart: {
      type: 'area',
      height: 85,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 0.05,
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  tooltip: {
    theme: "dark",
  },
  colors: ['#f3c74d'],
}
new ApexCharts(document.querySelector("#dash_spark_2"), dash_spark_2).render();

var dash_spark_3 = {
    
  chart: {
      type: 'area',
      height: 85,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 0.05,
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  tooltip: {
    theme: "dark",
  },
  colors: ['#f3c74d'],
}
new ApexCharts(document.querySelector("#dash_spark_3"), dash_spark_3).render();


var dash_spark_4 = {
    
  chart: {
      type: 'area',
      height: 85,
      sparkline: {
          enabled: true
      },
  },
  stroke: {
      curve: 'smooth',
      width: 2
    },
  fill: {
      opacity: 0.05,
  },
  series: [{
    data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]
  }],
  yaxis: {
      min: 0
  },
  tooltip: {
    theme: "dark",
  },
  colors: ['#f3c74d'],
}
new ApexCharts(document.querySelector("#dash_spark_4"), dash_spark_4).render();
//Device-widget


var options = {
  chart: {
      height: 250,
      type: 'donut',
  }, 
  plotOptions: {
    pie: {
      donut: {
        size: '85%'
      }
    }
  },
  dataLabels: {
    enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
  },
 
  series: [10, 65, 25,],
  legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: -13
  },
  labels: [ "Tablet", "Desktop", "Mobile"],
  colors: ["#394b7b", "#4d79f6", "#4ac7ec"],
 
  responsive: [{
      breakpoint: 600,
      options: {
        plotOptions: {
            donut: {
              customScale: 0.2
            }
          },        
          chart: {
              height: 240
          },
          legend: {
              show: false
          },
      }
  }],

  tooltip: {
    theme: 'dark',
    y: {
        formatter: function (val) {
            return   val + " %"
        }
    }
  }
  
}

var chart = new ApexCharts(
  document.querySelector("#ana_device"),
  options
);

chart.render();