prediction_1 = "";

Webcam.set({

 width:350,

 height:300,

 image_quality:"png",

 png_quality:100

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {

 Webcam.span(function(data_uri) {

  document.getElementById("result").innerHTML = "<img src="+data_uri+" id='captured_image'>";

 });

}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("/model.json", modelLoaded);

function modelLoaded() {

 console.log("Model Ready");

}


function speak() {

 var synth = window.speechSynthesis;

 speak_data_1 = "The first prediction is" + prediction_1;
 
 var utterThis = new SpeechSynthesisUtterance(speak_data_1);

 synth.speak(utterThis);

}