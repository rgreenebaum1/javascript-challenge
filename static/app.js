// from data.js
var tableData = data;

// button thing
var button = d3.select("#button");

// select tbody
var tbody = d3.select("tbody");
console.log(data);




// YOUR CODE HERE!
// function tableDisplay(data) {
function BuildTable(data) {

    tbody.html("");



    data.forEach((sighting) => {
        console.log(sighting);
        let row = tbody.append("tr");

        Object.values(sighting).forEach((ufo) => {
            let cell = row.append("td");
            cell.text(ufo);
        }
        );
    });
}


BuildTable(tableData);

function handleClick() {
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let filterData = tableData;



    if (date) {
        // Apply Filter to the Table Data **** Only Keeping Rows Where datetime Value Matches Filter 
        filterData = filterData.filter((row) => row.datetime === date);
    }


    // Build the Table with Filtered Data
    BuildTable(filterData);

    console.log(date)
}
// `on` Function 
d3.select("#filter-btn").on("click", handleClick);
// Build Table with data.js 
BuildTable(tableData);

//     var date = d3.select("#datetime").node().value;
//     console.log(date);




   // d3.select("#datetime").node().value = "";

    //     if (date !== "") {
    //         filteredData = filteredData.filter(data => data.date == date);
    //     }

    //     else {
    //         console.log("No input crieteria entered")
    //     }
    // };


    // function BuildTable(tableData) {

    //     var filteredData = [];

    //     var button = d3.select("#button");

    //     button.on("click", function () {


    //         // var inputElement = d3.select("datetime");
    //         // var inputValue = inputElement.property("value");

    //         // console.log(inputValue);
    //         // console.log(tableData);




    //         // Object.entries(filters).forEach(([key, datetime]) => {
    //         //     filteredData = filteredData.filter(row => row[key] == value);





    //         console.log(filteredData);

    //         // Create a new row for each set of filtered data
    //         filteredData.forEach((sighting) => {
    //             var row = tbody.append("tr");
    //             Object.entries(sighting).forEach(([key, value]) => {
    //                 var cell = row.append("td");
    //                 cell.text(value);


    //             });
    //         });
    //     });
    // };

   // d3.select(".filter-btn").on("click", handleSubmit);




