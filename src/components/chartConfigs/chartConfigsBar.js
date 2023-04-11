export const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
    ],
    datasets: [
      {
        label: 'Some Data',
        backgroundColor: '#d798d0',
        data: [ 15, 8, 25, 16, 12]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',
    borderWidth: 1,
    borderSkipped: false,
    borderRadius: 20,
    barThickness: 40,
    scales: {
      y: {
        grid: {
          lineWidth: 0.5,
        },
        stacked: true,
        ticks: {
          min: 0,
        }
      },
      x: {
        grid: {
          lineWidth: 0.5,
        },
        stacked: true,
        ticks: {
          stepSize: 1,
        }
      } 
    }
  }