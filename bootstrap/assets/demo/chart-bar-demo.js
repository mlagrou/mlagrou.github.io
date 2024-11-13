

function countCats(tag) {
    return fetch(`https://cataas.com/api/cats?tags=${tag}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch the count");
            }
            return response.json();
        })
        .then(data => data.length);
}


Promise.all([
    countCats("cute"),   
    countCats("smug"),  
    countCats("fat"),  
    countCats("elegant"), 
    countCats("playful"), 
    countCats("silly")   
])
    .then(([janCount, febCount, marCount, aprCount, mayCount, junCount]) => {
        var ctx = document.getElementById("myBarChart");
        var myLineChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Cute", "Smug", "Fat", "Elegant", "Playful", "Silly"],
                datasets: [{
                    label: "Revenue",
                    backgroundColor: "rgba(2,117,216,1)",
                    borderColor: "rgba(2,117,216,1)",
                    data: [janCount, febCount, marCount, aprCount, mayCount, junCount],
}],
            },
            options: {
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'month'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 6
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 20,
                            maxTicksLimit: 5
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        });
    })
        .catch (error => {
    console.error("Error fetching cat count:", error);
});










