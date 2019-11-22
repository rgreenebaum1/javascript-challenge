// from data.js
var tableData = data;

// button thing
var button = d3.select("#button");

// select tbody
var tbody = d3.select("tbody");
console.log(data);




// YOUR CODE HERE!
// function tableDisplay(data) {
function BuildTable(tabletest) {

    tbody.html("");

    data.forEach((sighting) => {
        console.log(sighting);
        var row = tbody.append("tr");

        Object.values(sighting).forEach((ufo) => {
            var cell = row.append("td");
            cell.text(ufo);
        }
        );
    });
}

BuildTable(tableData);


var button = d3.select("#button");

button.on("click", function () {


    var inputElement = d3.select("datetime");
    var inputValue = inputElement.property("button");

    console.log(inputValue);
    console.log(tableData);


    var filteredData = [];

    Object.entries(filters).forEach(([button, datetime]) => {
        filteredData = filteredData.filter(row => row[button] == value);


        if (date !== "") {
            filteredData = sightings.filter(sighting => sighting.datetime == date);
        }
        else {
            filteredData = sightings;
        };


        console.log(filteredData);

        BuildTable(filteredData);
        d3.select(".filter-btn").on("click", datetime);
    });
});




//         let filteredData = tableData;




//     BuildTable(filteredData);
//     d3.select(".filter-btn").on("click", datetime);

//     BuildTable(tableData);

// });



//////////////////////////

//thank you @github's DaveG-P for help with the filtering code
