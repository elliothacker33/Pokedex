const radarChartCanvas = document.getElementById('radarChart');
const ctx = radarChartCanvas.getContext('2d');

const data = {
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20, 30, 40, 50],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scale: {
    display: false, // Remove the scale labels
  },
  plugins: {
    legend: {
      display: false, // Remove the dataset labels
    },
  },
};

const radarChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: options,
});
