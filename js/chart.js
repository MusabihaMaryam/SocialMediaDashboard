const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Twitter', 'Facebook', 'Instagram', 'Youtube'], //bar values
    datasets: [{
      label: 'Metrics Stats',
      data: [99, 210, 243, 144], //bar data



      backgroundColor: [      //bar charts color
        'rgba(255, 99, 132, 0.5)',
        'rgba(2, 24, 49, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
         'rgba(153, 102, 255, 0.5)'
       ],
    
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(2, 24, 49, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
