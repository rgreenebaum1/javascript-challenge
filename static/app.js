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


    // Build the Table with Filtered Data @!!!@@E@#$#@%R NO IDEA HOW I JUST GOT THIS WAHOOOOOOOOO !!! 
    BuildTable(filterData);

    console.log(date)
}
// `on` Function 
d3.select("#filter-btn").on("click", handleClick);
// Build Table with data.js 
BuildTable(tableData);




