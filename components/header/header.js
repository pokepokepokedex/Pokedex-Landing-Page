
var words = [
    "catch",
    "win",
    "find",
    "track",
    "know"
];
let i = 0;
const ticker = document.getElementById("rotating-word");

const wordRotator = setInterval(function(){    
if(i > words.length-1) {
        i = 0;
    }
    ticker.innerHTML = '<div class="animated fadeOutDown word-showing">' +  (words[i-1] || words[words.length-1]) + '</div>' +
    '<div class="animated fadeInDown word-showing">' + words[i] + '</div>';
    i++;            

}, 2000);