export const data = {
    labels: [],
    datasets: [
      {
        backgroundColor: ['#d487e0', '#87c7f8', '#8aeaab', '#eeea88'],
        data: [40, 20, 80, 10]
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
          boxWidth: 15,
          boxHeight: 15,
          textAlign: 'left',
          font: {
            size: 8
          }
        } 
      },
    },
  maintainAspectRatio: false
  }
};
  