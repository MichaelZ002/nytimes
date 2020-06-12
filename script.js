// search btn
$("#search").on("click", function () {

var apiKey = "1XEpBKMALFCDOOevQ3PAViBsB7ReYxD1"

// set variable for all inputs
var searchTerm = $("#searchTerm").val()
var numRecords = $("#numRecords").val()
var startYear = $("#startYear").val()
var endYear = $("#endYear").val()

// ensure publications are between start and end years
if (startYear <= .pub_year >= endYear){

}

if (numRecord.isInteger){

}

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "fq=pub_year" "election&api-key=" + apiKey

$ajax.({
    url:queryURL;
    method: "GET"
}).then(function (response){
console.log(response)


else {
    alert ("No articles found in that year range")
}
    
})

})



// clear btn
$("#clear").on("click", function (){

})