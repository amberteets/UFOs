// import data from data.js
const tableData = data ;

// Reference the HTML table using d3
// Tells JavaScript to look for <tbody> tags in the HTML
var tbody = d3.select("tbody")

// Function to build data table
function buildTable(data) {

    // Clear existing data
    tbody.html("") ;

    // Build the table by looping through each object in data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // Append a row to table body
        let row = tbody.append("tr");

        // Loop through each field in dataRow and add each value as table cell <td>
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// Function to handle user clicks on filter button
function handleClick() {

    // Look for and store data values from webpage 
    let date = d3.select("#datetime").property("value");

    // Set default filter as original table data
    let filteredData = tableData;
}