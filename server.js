var cheerio = require("cheerio");
var axios = require("axios");

axios.get("https://www.dischord.com").then(function(response){
    var $ = cheerio.load(response.data);
    var results = [];

    $("h2").each(function(i, element){
        var title = $(element).children().text();
        var link = $(element).find("a").attr("href");

        results.push({
            title: title,
            link: link
        });
    });

    console.log(results);
});