function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZGWoyQd2c/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResult);
}