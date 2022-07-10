// import data from data.js
const tableData = data;

// reference HTMLtable using d3
// tbody: telling javascript what type of element data wil be displayed in (table), and "tbody" means table
// D3: this is a javascript library that produces graphics on an html webpage (used for dashboards, graphs/maps, etc)
// d3.select tells javascript to look for <tbody> tags in html
var tbody = d3.select("tbody");

// function to build table to display ufo sightings,
// iterate through array of objects in data file and append them to a table row
// 1. start function out by clearing data from existing data (since this table will be repopulated with another search)
// 2. iterate through datarows with forEach (since it lets you have a function in the loop)
// 3. find the tbody tag in html, and add a table row (tr) (using let because we don't care if this variable is global)
// 4. for each individual ufo sighting object (object.values), put them in the datarow (datarow), forEach((val))  says we want one object per row
// 5: make a variable (cell) to append data to a table
// 6: apppend each value of the object to a cell in the table ("td")
function buildTable(data) {
    //clear out existing data
    tbody.html("");

    // Next, loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append row to table body
        let row = tbody.append("tr");
        // loop through each field in dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}


//add functionality to let users click to filter by date using d3 library
function handleClick() {
    //d3 will find the #datetime id from html tags, then property("value") will grab info from tag and put it in "date" variable
    let date = d3.select("#datetime").property("value");
    
    //set default filter and save to new variable (default is original table data)
    let filteredData = tableData;
    
    //check for date filter using if statement. Show only rows where the rows'datetime = filtered date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //call function to rebuild table with filtered data
    ///If no date is entered, table is original tableData
    buildTable(filteredData);
}


//telling d3 to listen for event (button click) and .on says to run handleClick function when it is clicked
//#filter-btn is telling d3 to look for the button element tag in the HTML
d3.selectAll("#filter-btn").on("click", handleClick);

//makes sure the table loads as soon as the page loads:
buildTable(tableData);