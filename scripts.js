var taglines = ["experimental embodied experiences", "games without screens", 
"it's kind of hard to explain", "only occasionally with real fire", "IRL games and game-adjacent happenings", 
"it's not VR, it's not AR, it's... R", "refresh for a better tagline", "meatspace games for curious humans",
"this site is full of secrets", "keeping Portland Weird since 2017"];
var idx = Math.floor(Math.random() * (taglines.length - 1));
document.getElementById("tagline").innerHTML = taglines[idx];


var input = "";
var key = "38384040373937396665"; 
var timer = 0;

document.addEventListener("keyup", event => {
    console.log(event.keyCode, event.key);
    input += event.keyCode;
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 2000);
    check_input();
});

document.getElementById("mce-EMAIL").addEventListener("blur", function() {
    dataLayer.push({'event': 'emailEntered'});
});

document.getElementById("mce-MMERGE2").addEventListener("blur", function(e) {
    if (e.target.value)
        dataLayer.push({'event': 'zipEntered'});
});
document.getElementById("mce-MMERGE2").addEventListener("blur", function(e) {
    if (e.target.value)
        dataLayer.push({'event': 'zipEntered'});
});
document.getElementById("mc-embedded-subscribe").addEventListener("click", function(e){
    dataLayer.push({'event': 'subscribe'});
});

function check_input() {
    if(input==key.slice(0,4)) {
        dataLayer.push({'event': 'keyStarted'});
    }
    if(input == key) {
        dataLayer.push({'event': 'keyEntered'});
        window.location.href = "./παροδος.html"
        var konami = document.getElementById("konami");
        konami.style.display = "inline-block";
        konami.innerHTML = "<div id='purple' style='background-color: violet; margin: auto; position: absolute; width: 50%; padding: 2rem;'>HAXXXX</div>"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log("Oh, hello there! I'm so happy to see you!");
    console.log("You'd be surprised how few visitors I get, down here in the console.");
    console.log("After all, most people just take websites at face value. But not you!")
    console.log("You knew I couldn't JUST build a website, you had a feeling there might be something just under the surface--");
    console.log("and I appreciate that. I appreciate your curiosity.");
    console.log("Tell you what - DM me on Twitter with the password 'pineapple pizza' and your address and I'll mail you a sticker!");
    console.log("(I promise not to do anything else with your address.)")
    setInterval(function() { document.getElementById('info').innerHTML = input; }, 100); 
});
