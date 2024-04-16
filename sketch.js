var canvas;
var bgImg;
var s1,s2,s3,s4,s5;
var c1w0,c1w1,c1w2,c1w3,c1w4,c1w5,c1w6,c1w7,c1w8,c1w9;
var c2w0,c2w1,c2w2,c2w3,c2w4,c2w5,c2w6,c2w7,c2w8,c2w9,c2w10;
var c3w0,c3w1,c3w2,c3w3,c3w4,c3w5,c3w6,c3w7,c3w8,c3w9,c3w10,c3w11;
var c4w0,c4w1,c4w2,c4w3,c4w4,c4w5,c4w6,c4w7,c4w8,c4w9,c4w10;
var c5w0,c5w1,c5w2,c5w3,c5w4,c5w5,c5w6,c5w7,c5w8,c5w9,c5w10,c5w11;
var c6w0,c6w1,c6w2,c6w3,c6w4,c6w5,c6w6,c6w7;
var c7w0,c7w1,c7w2,c7w3,c7w4,c7w5,c7w6,c7w7,c7w8,c7w9;
var c8w0,c8w1,c8w2,c8w3,c8w4,c8w5,c8w6,c8w7;


function preload(){
bgImg = loadImage("assets/background.jpg")


}

function setup(){

  canvas = createCanvas(1200,600);
  s1 = createSprite(5,300,10,600);
  s2 = createSprite(600,5,1200,10);
  s3 = createSprite(600,595,1200,10);
  s4 = createSprite(1195,60,10,120);
  s5 = createSprite(1195,390,10,420);

  c1w0 = createSprite(30,325,40,10);//
  c1w1 = createSprite(50,285,80,10);//
  c1w2 = createSprite(30,85,40,10);//
  c1w3 = createSprite(30,165,40,10);//
  c1w4 = createSprite(30,485,40,10);//
  c1w5 = createSprite(45,60,10,40);
  c1w6 = createSprite(45,140,10,40);
  c1w7 = createSprite(45,225,10,50);
  c1w8 = createSprite(45,405,10,90);
  c1w9 = createSprite(45,500,10,40);
  
  
  c2w0 = createSprite(70,45,40,10);//
  c2w1 = createSprite(70,125,40,10);//
  c2w2 = createSprite(70,245,40,10);//
  c2w3 = createSprite(70,365,40,10);//
  c2w4 = createSprite(70,445,40,10);//
  c2w5 = createSprite(100,565,120,10);//
  c2w6 = createSprite(85,100,10,40);
  c2w7 = createSprite(85,180,10,40);
  c2w8 = createSprite(85,340,10,40);
  c2w9 = createSprite(85,440,10,80);
  c2w10 = createSprite(85,540,10,40);



  c3w0 = createSprite(105,165,50,10);//
  c3w1 = createSprite(105,205,50,10);//
  c3w2 = createSprite(110,325,40,10);//
  c3w3 = createSprite(110,405,40,10);//
  c3w4 = createSprite(105,485,50,10);//
  c3w5 = createSprite(110,525,40,10);//
  c3w6 = createSprite(125,60,10,40);
  c3w7 = createSprite(125,140,10,40);
  c3w8 = createSprite(125,220,10,40);
  c3w9 = createSprite(125,320,10,80);
  c3w10 = createSprite(125,420,10,40);
  c3w11 = createSprite(125,500,10,40);

  
  c4w0 = createSprite(160,45,80,10);//
  c4w1 = createSprite(145,85,50,10);//
  c4w2 = createSprite(145,245,50,10);//
  c4w3 = createSprite(150,285,40,10);//
  c4w4 = createSprite(145,365,50,10);//
  c4w5 = createSprite(145,445,50,10);//
  c4w6 = createSprite(165,100,10,40);
  c4w7 = createSprite(165,180,10,40);
  c4w8 = createSprite(165,260,10,40);
  c4w9 = createSprite(165,500,10,40);
  c4w10 = createSprite(165,580,10,40);

  
  c5w0 = createSprite(200,120,80,10);//
  c5w1 = createSprite(185,165,50,10);//
  c5w2 = createSprite(200,205,80,10);//
  c5w3 = createSprite(220,325,120,10);//
  c5w4 = createSprite(185,405,50,10);//
  c5w5 = createSprite(185,485,50,10);//
  c5w6 = createSprite(185,525,50,10);//
  c5w7 = createSprite(205,30,10,40);
  c5w8 = createSprite(205,120,10,80);
  c5w9 = createSprite(205,240,10,80);
  c5w10 = createSprite(205,420,10,120);
  c5w11 = createSprite(205,540,10,40);
  

  c6w0 = createSprite(240,285,80,10);//
  c6w1 = createSprite(225,365,50,10);//
  c6w2 = createSprite(225,445,50,10);//
  c6w3 = createSprite(220,565,40,10);//
  c6w4 = createSprite(245,102.5,10,45);
  c6w5 = createSprite(245,320,10,80);
  c6w6 = createSprite(245,420,10,40);
  c6w7 = createSprite(245,545,10,50);


  c7w0 = createSprite(305,45,130,10);//
  c7w1 = createSprite(265,85,50,10);//
  c7w2 = createSprite(305,165,130,10);//
  c7w3 = createSprite(265,245,50,10);//
  c7w4 = createSprite(260,405,40,10);//
  c7w5 = createSprite(260,485,40,10);//
  c7w6 = createSprite(285,60,10,40);
  c7w7 = createSprite(285,140,10,40);
  c7w8 = createSprite(285,220,10,40);
  c7w9 = createSprite(285,520,10,80);


  c8w0 = createSprite(305,125,50,10);//
  c8w1 = createSprite(305,205,50,10);//
  c8w2 = createSprite(305,365,50,10);//
  c8w3 = createSprite(300,445,40,10);//
  c8w4 = createSprite(300,565,40,10);//
  c8w5 = createSprite(325,100,10,40);
  c8w6 = createSprite(325,180,10,40);
  c8w7 = createSprite(325,420,10,360);


  c9w0 = createSprite(340,85,40,10);//
  c9w1 = createSprite(345,245,50,10);//
  c9w2 = createSprite(365,100,10,40);
  c9w3 = createSprite(365,420,10,280);
  

  c10w0 = createSprite(380,125,40,10);//
  c10w1 = createSprite(380,205,40,10);//
  c10w2 = createSprite(380,325,40,10);//
  c10w3 = createSprite(380,485,40,10);//
  c10w4 = createSprite(580,565,440,10);//
  c10w5 = createSprite(405,205,10,250);
  c10w6 = createSprite(405,385,10,50);
  c10w7 = createSprite(405,465,10,50);
  c10w8 = createSprite(405,540,10,40);

  
  c11w0 = createSprite(440,45,80,10);//
  c11w1 = createSprite(420,85,40,10);//
  c11w2 = createSprite(420,245,40,10);//
  c11w3 = createSprite(420,405,40,10);//
  c11w4 = createSprite(445,65,10,50);
  c11w5 = createSprite(445,165,10,90);
  c11w6 = createSprite(445,345,10,210);
  c11w7 = createSprite(445,505,10,50);
  

  c12w0 = createSprite(460,165,40,10);//
  c12w1 = createSprite(460,485,40,10);//
  c12w2 = createSprite(485,65,10,50);
  c12w3 = createSprite(485,345,10,370);


  c13w0 = createSprite(505,85,50,10);//
  c13w1 = createSprite(500,245,40,10);//
  c13w2 = createSprite(505,525,50,10);//
  c13w3 = createSprite(565,125,170,10);//
  c13w4 = createSprite(525,40,10,80);
  c13w5 = createSprite(525,260,10,120);
  c13w6 = createSprite(525,420,10,120);
  

  c14w0 = createSprite(565,165,90,10);//
  c14w0 = createSprite(565,205,90,10);//
  c14w0 = createSprite(685,325,330,10);//
  c14w0 = createSprite(565,480,90,10);//
  c14w0 = createSprite(565,65,10,50);
  c14w0 = createSprite(565,225,10,50);
  c14w0 = createSprite(565,385,10,50);
  c14w0 = createSprite(565,460,10,40);
  c14w0 = createSprite(565,545,10,50);

  c15w0 = createSprite(660,45,200,10);//
  c15w1 = createSprite(590,85,40,10);//
  c15w2 = createSprite(605,105,10,40);
  c15w3 = createSprite(605,185,10,40);
  c15w4 = createSprite(620,285,120,10);//
  c15w5 = createSprite(620,365,120,10);//
  c15w6 = createSprite(605,265,10,40);
  c15w7 = createSprite(605,465,10,130);

  c16w0 = createSprite(645,165,10,90);
  c16w1 = createSprite(622,245,44,10);//
  c16w2 = createSprite(725,405,250,10);//
  c16w3 = createSprite(625,525,40,10);//
  c16w4 = createSprite(645,485,10,90);

  c17w0 = createSprite(685,85,80,10);//
  c17w1 = createSprite(685,145,10,50);
  c17w2 = createSprite(725,205,160,10);//
  c17w3 = createSprite(685,225,10,50);
  c17w4 = createSprite(685,305,10,50);
  c17w5 = createSprite(665,445,50,10);//
  c17w6 = createSprite(685,465,10,40);
  c17w7 = createSprite(685,545,10,50);

  c18w0 = createSprite(725,105,10,50);
  c18w1 = createSprite(725,185,10,50);
  c18w2 = createSprite(705,165,50,10);//
  c18w3 = createSprite(705,245,50,10);//
  c18w4 = createSprite(705,485,50,10);//
  c18w5 = createSprite(725,425,10,50);
  c18w6 = createSprite(725,505,10,50);
    
  c19w0 = createSprite(765,65,10,50);
  c19w1 = createSprite(765,125,90,10);//
  c19w2 = createSprite(765,285,90,10);//
  c19w3 = createSprite(765,365,90,10);//
  c19w4 = createSprite(745,445,40,10);//
  c19w5 = createSprite(745,525,40,10);//
  c19w6 = createSprite(765,265,10,50);
  
  c20w0 = createSprite(805,65,10,120);
  c20w1 = createSprite(845,165,160,10);//
  c20w2 = createSprite(785,245,50,10);//
  c20w3 = createSprite(805,345,10,40);
  c20w4 = createSprite(805,505,10,130);
  c20w5 = createSprite(785,485,50,10);//

  c21w0 = createSprite(845,185,10,280);
  c21w1 = createSprite(845,505,10,200);

  c22w0 = createSprite(865,85,40,10);//
  c22w1 = createSprite(885,285,80,10);//
  c22w2 = createSprite(885,365,80,10);//
  c22w3 = createSprite(865,445,40,10);//
  c22w4 = createSprite(885,105,10,50);
  c22w5 = createSprite(885,265,10,50);
  c22w6 = createSprite(885,365,10,90);
  c22w4 = createSprite(885,500,10,120);

  c23w0 = createSprite(945,45,120,10);//
  c23w1 = createSprite(905,125,40,10);//
  c23w2 = createSprite(925,205,80,10);//
  c23w3 = createSprite(905,245,40,10);//
  c23w4 = createSprite(925,325,80,10);//
  c23w5 = createSprite(905,525,40,10);//
  c23w6 = createSprite(925,105,10,50);
  c23w7 = createSprite(925,305,10,50);
  c23w8 = createSprite(925,425,10,130);
  c23w9 = createSprite(925,585,10,50);

  c24w0 = createSprite(945,85,40,10);//
  c24w1 = createSprite(965,65,10,50);
  c24w2 = createSprite(965,145,10,50);
  c24w3 = createSprite(965,225,10,50);
  c24w4 = createSprite(965,420,10,280);

  c25w0 = createSprite(985,125,40,10);//
  c25w1 = createSprite(1005,165,80,10);//
  c25w2 = createSprite(1005,245,80,10);//
  c25w3 = createSprite(985,285,40,10);//
  c25w4 = createSprite(985,405,40,10);//
  c25w5 = createSprite(1005,185,10,40);
  c25w6 = createSprite(1005,325,10,90);
  c25w7 = createSprite(1005,480,10,160);

  c26w0 = createSprite(1025,85,40,10);//
  c26w1 = createSprite(1025,365,40,10);//
  c26w2 = createSprite(1070,560,140,10);//
  c26w3 = createSprite(1045,105,10,50);
  c26w3 = createSprite(1045,262.5,10,45);
  c26w3 = createSprite(1045,362,10,80);
  c26w3 = createSprite(1045,485,10,90);

  c27w0 = createSprite(1065,45,50,10);//
  c27w1 = createSprite(1065,205,50,10);//
  c27w2 = createSprite(1065,285,50,10);//
  c27w3 = createSprite(1065,445,50,10);//
  c27w4 = createSprite(1085,285,10,490);

  c28w0 = createSprite(1105,85,50,10);//
  c28w1 = createSprite(1135,105,10,50);
  c28w2 = createSprite(1135,370,10,380);

  c29w0 = createSprite(1165,45,50,10);//
  c29w1 = createSprite(1165,125,70,10);//
  c29w0 = createSprite(1165,175,70,10);//


}

function draw() {
  
  background(bgImg);
  drawSprites();
        
}