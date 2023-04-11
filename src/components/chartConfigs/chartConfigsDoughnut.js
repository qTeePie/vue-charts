export const data = {
    labels: [],
    datasets: [
      {
        backgroundColor: ['#d487e0', '#87c7f8', '#8aeaab', '#eeea88'],
        data: []
      }
    ]
  }

export const config = {
  type: 'doughnut',
  data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          textAlign: 'left',
          font: {
            size: 12
          }
        } 
      },
    },
  maintainAspectRatio: false
  }
};
  