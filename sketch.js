const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
}

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=06 && hour<=19){
        var ampm = "PM";
   }
   else {
        ampm = "AM";
   };

   textSize(35);
   text("TIME : " + hour + ampm,50,50);
}




async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();

    //change the data in JSON format
    var datetime = responseJson.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour <= 8 && hour >= 6){
        bg = "sunrise1.png";
    }
    else if(hour <= 10 && hour >= 8){
        bg = "sunrise2.png";
    }
    else if(hour <= 14 && hour >= 12){
        bg = "sunrise5.png";
    }
    else if(hour <= 15 && hour >= 14){
        bg = "sunset7.png";
    }
    else if(hour <= 17 && hour >= 15){
        bg = "sunset10.png";
    }
    else if(hour <= 20 && hour >= 17){
        bg = "sunset11.png";
    }
    else {
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}   
