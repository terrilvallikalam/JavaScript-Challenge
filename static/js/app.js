var tableData = data;
var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
var tableBody = d3.select("tbody");
var searchDate = d3.select("#datetime");
var button = d3.select("#filter-btn");

var loadTable = (ufoData) => {
    
    tableBody.html("");

    ufoData.forEach(sightings => {
        var tableRow = tableBody.append("tr");
        tableColumns.forEach(column => tableRow.append("td").text(sightings[column]))
    });

}

loadTable(tableData);

button.on("click", () => {

    d3.event.preventDefault();

    userDate = searchDate.property("value");

    var filterDate = tableData.filter(tableData => tableData.datetime === userDate);

    tableBody.html("");
    
    if(filterDate.length !== 0) {
        loadTable(filterDate);
    }
        else {
            tableBody.append("tr").append("td").text("There were no sightings on this date.");
        }
});