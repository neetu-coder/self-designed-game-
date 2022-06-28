var gameState  ="maze";
var pc, cup 
var bg1
var block1 , block2 , block3, block4
var block5 , block6 , block7, block8
var block9 , block10 , block11, block12
var block13 , block14 , block15, block16
var block17 , block18 , block19, block20
var monster , mon_img
var rState = false

function preload(){

     bg1 = loadImage ("BGI1.jpg")
     mon_img = loadImage ("monster.png")
}

function setup(){

    createCanvas(windowWidth,windowHeight);
     
    pc = createSprite (1001,676,60,60)
    pc.visible = false

   monster = createSprite (652,543,40,40)
   monster.addImage ("obstacle",mon_img)
   monster.scale = 0.3

    
    block1 = createSprite (100,500,10,1000)
    block1.shapeColor = "yellow"
    block1.visible = false

    block2 = createSprite (1400,500,10,1000)
    block2.shapeColor = "yellow"
    block2.visible = false

    block3 = createSprite (520,715,850,10)
    block3.shapeColor = "yellow"
    block3.visible = false

    block4 = createSprite (1230,715,350,10)
    block4.shapeColor = "yellow"
    block4.visible = false

    
    block5 = createSprite (950,715,10,350)
    block5.shapeColor = "yellow"
    block5.visible = false

    block6 = createSprite (1000,540,110,10)
    block6.shapeColor = "yellow"
    block6.visible = false

    block7 = createSprite (1050,480,10,110)
    block7.shapeColor = "yellow"
    block7.visible = false

    
    block8 = createSprite (1150,680,10,250)
    block8.shapeColor = "yellow"
    block8.visible = false

    block9 = createSprite (1220,550,150,10)
    block9.shapeColor = "yellow"
    block9.visible = false

    block10 = createSprite (1000,420,250,10)
    block10.shapeColor = "yellow"
    block10.visible = false

    block11 = createSprite (1300,460,10,200)
    block11.shapeColor = "red"
    block11.visible = false

    block12 = createSprite (1050,680,10,110)
    block12.shapeColor = "yellow"
    block12.visible = false

    block13 = createSprite (1155,360,300,10)
    block13.shapeColor = "yellow"
    block13.visible = false

    
    block14 = createSprite (1004,315,10,100)
    block14.shapeColor = "yellow"
    block14.visible = false

    block15 = createSprite (1010,260,100,10)
    block15.shapeColor = "yellow"
    block15.visible = false

    
    block16 = createSprite (760,310,500,10)
    block16.shapeColor = "yellow"
    block16.visible = false

     
    block17 = createSprite (768,460,10,300)
    block17.shapeColor = "yellow"
    block17.visible = false

    block18 = createSprite (644,610,300,10)
    block18.shapeColor = "yellow"
    block18.visible = false

    block19 = createSprite (245,595,300,10)
    block19.shapeColor = "yellow"
    block19.visible = false

    block20 = createSprite (312,400,10,400)
    block20.shapeColor = "yellow"
    block20.visible = false

    block21 = createSprite (536,190,10,250)
    block21.shapeColor = "yellow"
    block21.visible = false

    block22 = createSprite (620,460,300,10)
    block22.shapeColor = "yellow"
    block22.visible = false
   
}

function draw(){


    if(gameState === "start"){
        background(bg1); 
        //title
        fill("white")
        textSize(90)
        text(" Magic Shop",500,200);

        //story;
        fill ("white")
        textSize(24);
        text("When you feel like disappearing and feel lonely, Magic shop is the place where you can feel happy. You can open the door of the magic shop I will be here waiting for you. But oh no, the magic shop has been invaded by the monsters and asks your help to get it back.",50,height/2)
        text("Please ENTER to start",width/2-180,height-200);

        
        if(keyCode === 13){
            gameState ="maze";
        }
    }


    if(gameState === "maze"){
        background("#aa80ff");
       // Camera.on ()
     //camera = new Camera (pc.x,pc.y,2)
        pc.visible = true
        
       block1.visible = true
       block2.visible = true 
       block3.visible = true 
       block4.visible = true 
       block5.visible = true
       block6.visible = true 
       block7.visible = true 
       block8.visible = true
       block9.visible = true
       block10.visible = true 
       block11.visible = true 
       block12.visible = true 
       block13.visible = true
       block14.visible = true 
       block15.visible = true 
       block16.visible = true
       block17.visible = true
       block18.visible = true
       block19.visible = true
       block20.visible = true
       block21.visible = true
       block22.visible = true

       if(keyDown (RIGHT_ARROW)){
        pc.x = pc.x+5
       }

       if(keyDown (LEFT_ARROW)){
        pc.x = pc.x-5
       }

       if(keyDown (UP_ARROW)){
        pc.y = pc.y-5
       }

       if(keyDown (DOWN_ARROW)){
        pc.y = pc.y+5
       }

       if(pc.isTouching (block1)){
        gameState = "end"
       }

       if (pc.collide(monster)){
         rState = riddle ()
         console.log (rState)
       }

       if (rState){
        monster.visible = false
       }
    }
  
    if(gameState === "end"){
     background("black")
    
        pc.visible = false
        cup.visible = false 
       block1.visible = false 
        
        textSize (50)
        text ("end",width/2,height/2)
    }
    
 drawSprites ()

 textSize(50)
 fill("black")
 text (mouseX+","+mouseY,150,50)
}

function riddle (){
    swal({
        title: "Riddle1",
        text: "4+3= ?",
        type : "input",
        inputPlaceholder : " Type your answer here",
        confirmButtonText: "Ok"
      }, function(inputValue){
        if(inputValue  === "7"){
         return true
        }
       if (inputValue !== 7) {
        swal.showInputError("Incorrect Answer")
            return false

        }
      });
}