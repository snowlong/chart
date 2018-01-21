const Chart = require('../node_modules/chart.js/dist/Chart.js')

var myChart1 = new Chart(document.getElementById("chart-1"), {
  "type": "radar",
  "data": {
    "labels": ["正確性", "技術性", "安心性", "信頼性", "人間性"],    
    "datasets": [{
      "label": "あなたの評価",
      "data": [3.1, 4.3, 2.4, 3.7, 2.1],
      "fill": true,
      "backgroundColor": "rgba(255, 99, 132, 0.2)",
      "borderColor": "rgb(255, 99, 132)",
      "pointBackgroundColor": "rgb(255, 99, 132)",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "rgb(255, 99, 132)"
    }, {
      "label": "平均",
      "data": [3.8, 3.8, 4.0, 3.9, 3.6],
      "fill": true,
      "backgroundColor": "rgba(54, 162, 235, 0.2)",
      "borderColor": "rgb(54, 162, 235)",
      "pointBackgroundColor": "rgb(54, 162, 235)",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "rgb(54, 162, 235)"
    }]
  },
  "options": {
    "elements": {
      "line": {
        "tension": 0,
        "borderWidth": 3
      }
    },
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5
      }
    },
    responsive: true,
  }
});

var myChart2 = new Chart(document.getElementById("chart-2"), {
  "type": "radar",
  "data": {
    "labels": ["正確性", "技術性", "安心性", "信頼性", "人間性"],
    "datasets": [{
      "label": "あなたの評価",
      "data": [3.5, 5.0, 4.0, 3.7, 4.2],
      "fill": true,
      "backgroundColor": "rgba(255, 99, 132, 0.2)",
      "borderColor": "rgb(255, 99, 132)",
      "pointBackgroundColor": "rgb(255, 99, 132)",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "rgb(255, 99, 132)"
    }, {
      "label": "平均",
      "data": [3.8, 3.8, 4.0, 3.9, 3.6],
      "fill": true,
      "backgroundColor": "rgba(54, 162, 235, 0.2)",
      "borderColor": "rgb(54, 162, 235)",
      "pointBackgroundColor": "rgb(54, 162, 235)",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "rgb(54, 162, 235)"
    }]
  },
  "options": {
    "elements": {
      "line": {
        "tension": 0,
        "borderWidth": 3
      }
    },
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5
      }
    }
  }
});