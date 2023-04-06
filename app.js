/* bar */
let ctxB = document.getElementById("barChart").getContext('2d');
let myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [{
        label: 'REPORT',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            '#6b7fd7',
            '#6b7fd7',
            '#6b7fd7',
            '#6b7fd7',
            '#6b7fd7',
            '#6b7fd7'
        ],
        borderColor: [
            '#4c2a85',
            '#4c2a85',
            '#4c2a85',
            '#4c2a85',
            '#4c2a85',
            '#4c2a85'
        ],
        borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
        }
    }
});
/* bar */


/* doughnut */
let ctxD = document.getElementById("doughnutChart").getContext('2d');
let myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
        labels: ["Personal", "Shopping", "Phone", "Other"],
        datasets: [{
        data: [300, 50, 100, 40],
        backgroundColor: ["#6b7fd7", "#bcedf6", "#ddfbd2", "#4c2a85"],
        }]
    },
    options: {
        responsive: true
    }
});
/* doughnut */