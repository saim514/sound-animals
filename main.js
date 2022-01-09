function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fPPKAC8XK/model.json" , modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    console.log('got result');
}