var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Depending on Percentage",
        borderColor: "#32D583",
        borderWidth: 2,
        hoverBorderColor: "yellow",
        data: [65, 59, 20, 81, 56, 55, 40]
      }
    ]
  };
  
  var option = {
    responsive: false,
    scales: {
      y: {
        stacked: false,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  
  new Chart("TAG", {
    type: "line",
    options: option,
    data: data
  });

  var data = {
    labels: ["IT-A", "IT-B", "IT-C", "CSE", "AIML-A", "AIML-B", "BT"],
    datasets: [
      {
        label: "class strength",
        borderColor: "#32D583",
        borderWidth: 2,
        hoverBorderColor: "yellow",
        data: [65, 59, 20, 81, 56, 55, 40]
      }
    ]
  };
  
  var option = {
    responsive: false,
    scales: {
      y: {
        stacked: false,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  
  new Chart("TAG1", {
    type: "bar",
    options: option,
    data: data
  });
  
  