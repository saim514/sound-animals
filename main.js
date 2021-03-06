function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fPPKAC8XK/model.json" , modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}

var barking=0;
var meowing=0;
var chirping=0;

function gotResults(error,results)
{
    if(error)
    {
     console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

     document.getElementById("result_label").innerHTML = "Detected Voice Is " + results[0].label;
     document.getElementById("result_count").innerHTML = 'Detected Dog - '+ barking + 'Detected Cat - '+ meowing + 'Detected Bird - '+ chirping;
     document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    
     img = document.getElementById('ear.png');

     if (results[0].label == "barking")
     {
         img.src="giphy-downsized-large.gif"
         barking = barking + 1;
     } else if(results[0].label == "meowing")
     {
        img.src="cat-cute.gif";
        meowing = meowing + 1;
     } else
     {
        img.src="pigeon-vibes.gif";
     }
    }
    
}

