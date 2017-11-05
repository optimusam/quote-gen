var quote_area = document.querySelector("#quote");
var go = document.querySelector("#go");
var copybtn = document.querySelector("#copy");
var tweet = document.querySelector("#tweet");
var request = new XMLHttpRequest();
var thequote = "";
go.addEventListener("click", function() {
    request.open('GET', 'https://gist.githubusercontent.com/optimusam/95636c5b1ed00962e2c7ec7780d4df70/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520', true);
    request.onload = function() {
        if (request.status == 200) {
            thequote ="";
            quote_area.textContent="";
            var quotes = JSON.parse(request.responseText);
            var random_index = Math.floor(Math.random() * quotes.length);
            var random_quote = quotes[random_index];
            quote_area.insertAdjacentHTML('beforeend', "<span id='said'>" + random_quote.quote + "</span> <br><span id='person'>-" + random_quote.name + "</span>");
            thequote += random_quote.quote + ' - ' + random_quote.name;
        }
        else {
            console.log("error occured :(");
        }
    }

    request.onerror = function() {
        quote_area.textContent = "There was an error - Internet";
    }
    
    request.send();
});

tweet.addEventListener("click", function() {
    tweet.href = "https://twitter.com/intent/tweet?text=" + thequote;
});

copybtn.addEventListener("click", function() {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", thequote);
 
});