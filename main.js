function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    mymodel=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dZF-PpBUL/model.json',modelReady)
}
function modelReady(){
    mymodel.classify(gotResults)
}
function gotResults(error,results){

    if(error)
    {console.log(error)}
    else
    {
        document.getElementById("soundname").innerHTML="I can hear :"+results[0].label
        document.getElementById("accuracy").innerHTML="Accuracy :"+(results[0].confidence*100).toFixed(2)+" %"
        i1=document.getElementById("al1")
        i2=document.getElementById("al2")
        i3=document.getElementById("al3")
        i4=document.getElementById("al4")
    if(results[0].label=="Clap"){
        i1.src="aliens-01.gif"
        i2.src="aliens-02.png"
        i3.src="aliens-03.png"
        i4.src="aliens-04.png"
    }
    else if(results[0].label=="Snap"){
        i1.src="aliens-01.png"
        i2.src="aliens-02.gif"
        i3.src="aliens-03.png"
        i4.src="aliens-04.png"
    }
    else if(results[0].label=="Whistle"){
        i1.src="aliens-01.png"
        i2.src="aliens-02.png"
        i3.src="aliens-03.gif"
        i4.src="aliens-04.png"
    }
    else{i1.src="aliens-01.png"
    i2.src="aliens-02.png"
    i3.src="aliens-03.png"
    i4.src="aliens-04.gif"

    }










    }

}