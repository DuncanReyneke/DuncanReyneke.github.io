document.querySelector('#tip-form').oninput = function(){

  var bill = Number(document.getElementById('billTotal').value);
  var tip = document.getElementById('tipInput').value;
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
  var tipValue = bill * (tip/100)
  var finalBill = bill + tipValue
console.log(finalBill)
var tipAmount = document.querySelector('#tipAmount')
var totalBillWithTip = document.querySelector('#totalBillWithTip')

tipAmount.value = tipValue.toFixed(2);
 totalBillWithTip.value =finalBill.toFixed(2);

 //Show Results

  document.getElementById('results').style.display='block'
}


  var quoteOptions = [{
    quote: "“One cannot think well, love well, sleep well, if one has not dined well.”",
    name: "Virginia Woolf"
  }, {
    quote: "“After a good dinner one can forgive anybody, even one's own relations.”",
    name: "Oscar Wilde"
  }, {
    quote: "“There is no love sincerer than the love of food.”",
    name: "George Bernard Shaw"
  }, {
    quote: "Let food be thy medicine and medicine thy food.”",
    name: "Hippocrates"
  }, {
    quote: "“Part of the secret of success in life is to eat what you like and let the food fight it out inside.”",
    name: "Mark Twain"
  }, {
    quote: "“All sorrows are less with bread.”",
    name: "Miguel de Cervantes Saavedra"
  }, {
    quote: "“People who love to eat are always the best people.”",
    name: "Julia Child"
  }, {
    quote: "“Life is a combination of magic and pasta.”",
    name: "Federico Fellini"
  }, {
    quote: "“I cook with wine. Sometimes I even add it to the food.”",
    name: "W.C. Fields"
  }, {
    quote: "“Food is common ground, a universal experience.”",
    name: "James Beard"
  }, ];
  
  function initialize_generate() {
    var sweetspot = Math.floor((Math.random() * quoteOptions.length));
    for (var i = 0; i <= quoteOptions.length; i++) {
  
      if (i === sweetspot) {
        var quoteHtml = generate_html(quoteOptions[i]);
        $(".quote").empty().append(quoteHtml);
        //console.log("test");
        var tweet_code = generate_tweet(quoteOptions[i]);
        console.log(tweet_code);
        $("#tweet_sect").empty().append(tweet_code); //only include tweet link when button pressed, doesn't make sense for anyone to tweet my placeholder quote that only makes sense within the scope of this app.
      }
    }
  }
  
  function generate_html(quoteObj) {
  
    var quoteHtml = "<i> " + quoteObj["quote"] + " </i> <br> <b> - " + quoteObj["name"] + " </b>";
    return quoteHtml
  }
  
  function generate_tweet(quoteObj) {
    
      var tweetHtml = '<a href="https://twitter.com/intent/tweet?button_hashtag=Quotes&text=' + quoteObj["quote"] + '%20-%20' + quoteObj["name"] + '"' + 'class="twitter-hashtag-button">Tweet </a> <script> !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');';
    
    return tweetHtml
  }