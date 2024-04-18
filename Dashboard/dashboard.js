var ctx = document.getElementById('TAG').getContext('2d');

var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Monthly Percentage',
      backgroundColor: '#32D583',
      borderColor: '#32D583',
      borderWidth: 2,
      hoverBorderWidth: 4,
      hoverBorderColor: "yellow",
      data: [80,89,75,79,90,93,77]
    }]
};

var options = {
    responsive: true,
    maintainAspectRatio: false
};

var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

var ctx = document.getElementById('TAG1').getContext('2d');

var data = {
    labels: ['IT-A', 'IT-B', 'IT-C'],
    datasets: [{
        label: 'SEM Percentage',
        backgroundColor: '#32D583',
        borderColor: '#32D583',
        borderWidth: 0,
        hoverBorderWidth: 2,
        hoverBorderColor: "yellow",
        data: [93,87,89]
    }]
};

var options = {
    responsive: true,
    maintainAspectRatio: false
};

var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
