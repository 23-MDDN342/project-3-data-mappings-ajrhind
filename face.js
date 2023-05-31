/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = false;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 8;

// other variables can be in here too
// here's some examples for colors used


// const stroke_color = [95, 52, 8];

// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}



// This where you define your own face object
function Face(eyes,hair,skin,brows,highL,dimples,crosshatch, crosshatchL) {


  // this.cheek = 0;
  // this.nose = 0;
  // this.eyes = 0;
  // this.temples = 0;
  // this.mouth = 0;
  // this.sideRight = 0;

  this.eyes =0;
  this.hair=0;
  this.skin =0;
  this.brows =0;
  this.highL =0;
  this.dimples =0;
  this.crosshatch =0;

  // these are state variables for a face
  // (your variables should be different!)
  // this.detailColour = [204, 100, 170 ];
  // this.mainColour = [51, 119, 153];
  // this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  // this.eye_shift = -1;   // range is -10 to 10
  // this.mouth_size = 1;  // range is 0.5 to 8

  // this.chinColour = [153, 153, 51]
  // this.lipColour = [100, 200, 68]
  // this.eyebrowColour = [119, 85, 17]

  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   * */
  
  // scale(1.25);
  this.draw = function (positions) {
    // console.log()

    // colorMode(HSL);
  
  const landmark = color(255);
  // const highlight = color(80,100,200);//250, 182, 182
  // const highlightS  =color(80,100,201);//250, 252, 121
  // const shadow = color(100,100,200);//rgb

  const highlight = color(107, 255, 134);
  let highlightS = color(107, 255, 134);
  let shadow = color(51, 166, 72);

  const lavender = color(199,125,242);

  //hair
  const green = color(98,217,69);
  const cyan = color(78,255,239);
  const yellow = color(248, 243, 43);
  const red = color(239, 45,86);
  

  // this.uhhGre = lerp(highlightS, shadow, 0.2);


  this.colorOptions = [green, lavender,cyan,red,yellow]



strokeWeight(0.01)

//=======================================================================================================================================





// this.draw_segmentMess = function(segment) {//this makes a cool effect//it looks like cross hatching
//   for(let i=9; i<segment.length; i++) {
//       let px = segment[i][0];
//       let py = segment[i][1];

//       if(i < segment.length - 1) {
//         let nx = segment[16][0];
//         let ny = segment[0][1];
//         line(px, py, nx, ny);
//       }
//   }
// }
// this.draw_segmentMess2 = function(segment) {//this makes a cool effect//it looks like cross hatching
//   for(let i=9; i<segment.length; i++) {
//       let px = segment[i][0];
//       let py = segment[i][1];

//       if(i < segment.length - 1) {
//         let nx = segment[9][0];
//         let ny = segment[5][1];
//         line(px, py, nx, ny);
//       }
//   }
// }


this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        // ellipse(px, py, 0.1);



        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
  };
fill(255);
stroke(255);




// this.draw_segmentbottomLip(positions.bottom_lip);
// this.draw_segment(positions.left_eye)
// this.draw_segment(positions.right_eye);
// this.draw_segment(positions.nose_bridge);
// this.draw_segment(positions.nose_tip);
// this.draw_segment(positions.top_lip);

//cool code i can use============================================================================================
// this.pointsAvarage = segment_average([positions.left_eye[4],positions.left_eye[5]]);
// console.log(this.pointsAvarage )
// ellipse(this.pointsAvarage[0],this.pointsAvarage[1],0.3,0.3 )


noFill();


stroke(landmark)
//=======================DEBUG==============================

//=======================================================


//++++++++++++++++++++++++++++++++++++++++++++CHEEKS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//right chin_____________________________________________
// this.draw_segmentRight = function(segment) {
//   for(let i=9; i<segment.length; i++) {
//       let px = segment[i][0];
//       let py = segment[i][1];
//       // ellipse(px, py, 0.1);
//       if(i < segment.length - 1) {
//         let nx = segment[i+1][0];
//         let ny = segment[i+1][1];
//         line(px, py, nx, ny);
//       }
    
//   }
// };

// //left__________________________________________________
// this.draw_segmentLeft = function(segment) {
//   for(let i=0 ; i<7; i++) {
//       let px = segment[i][0];
//       let py = segment[i][1];
//       // ellipse(px, py, 0.1);
//       if(i < segment.length - 1) {
//         let nx = segment[i+1][0];
//         let ny = segment[i+1][1];
//         line(px, py, nx, ny);
//       }
//   }
// };

// this.draw_segmentRight(positions.chin);
// this.draw_segmentLeft(positions.chin);

//-----left---------
//   beginShape();
//   curveVertex(this.leftCheek[0][0],this.leftCheek[0][1]);
//   for(let i =0; i<9 ; i++){
//   curveVertex(this.leftCheek[i][0],this.leftCheek[i][1]);
//   }
// endShape();


// beginShape();
// for(let i = 8; i<16; i++){
//   curveVertex(this.rightCheek[i][0],this.rightCheek[i][1]);
// }
// curveVertex(this.rightCheek[16][0],this.rightCheek[16][1]);
// curveVertex(this.rightCheek[16][0],this.rightCheek[16][1]);

// endShape();

//CROSS HATCH--------------------------------
// this.draw_segmentMess(positions.chin);// cool code mess for the cross hatching
// this.draw_segmentMess2(positions.chin);// cool code mess for the cross hatching

//-------------------------------RIGHT CHEEK-------------------------------
stroke(shadow);
this.cheekboneR = segment_average([positions.bottom_lip[0],positions.chin[14]]);
this.lowCheekboneR = segment_average([positions.bottom_lip[0],positions.chin[9]])
this.topCheekboneR = positions.chin[16];
this.chinCheekR = positions.chin[9]
this.rightCheek = positions.chin;//right
this.chinChinR = positions.chin[10];

this.differenceRight = this.chinChinR[0]-this.lowCheekboneR[0];
// console.log(this.differenceRight);
this.RightTrans = map(this.differenceRight,0,0.55,255,10);

fill(100,this.crosshatch,100,this.RightTrans);

beginShape(); 
curveVertex(this.topCheekboneR[0],this.topCheekboneR[1]);
curveVertex(this.topCheekboneR[0],this.topCheekboneR[1]);
curveVertex(this.cheekboneR[0],this.cheekboneR[1]);
curveVertex(this.lowCheekboneR[0],this.lowCheekboneR[1]);
curveVertex(this.chinCheekR[0],this.chinCheekR[1]);
curveVertex(this.chinCheekR[0],this.chinCheekR[1]);
for(let i = 8; i<16; i++){
  curveVertex(this.rightCheek[i][0],this.rightCheek[i][1]);
}
endShape(CLOSE);

noFill();
//--------------------------------------LEFT CHEEK------------------------
this.cheekboneL = segment_average([positions.bottom_lip[7],positions.chin[2]]);
this.lowCheekboneL = segment_average([positions.bottom_lip[7],positions.chin[7]]);
this.topCheekboneL = positions.chin[0];
this.chinCheekL = positions.chin[7];
this.chinChinL = positions.chin[6];

this.differenceLeft = this.lowCheekboneL[0]-this.chinChinL[0];
this.LeftTrans = map(this.differenceLeft,0,0.65,255,00);


// fill(100,100,this.crosshatch,this.LeftTrans);
fill(100,this.crosshatch,100,this.LeftTrans);


this.leftCheek = positions.chin;
beginShape();
curveVertex(this.chinCheekL[0],this.chinCheekL[1]);
curveVertex(this.chinCheekL[0],this.chinCheekL[1]);
curveVertex(this.lowCheekboneL[0],this.lowCheekboneL[1]);
curveVertex(this.cheekboneL[0],this.cheekboneL[1]);
curveVertex(this.topCheekboneL[0],this.topCheekboneL[1]);
for(let i =0; i<9 ; i++){
curveVertex(this.leftCheek[i][0],this.leftCheek[i][1]);
}
curveVertex(this.chinCheekL[0],this.chinCheekL[1]);
endShape(CLOSE);



//++++++++++++++++++++++++++++++++++++++++++DIMPLES++++++++++++++++++++++++++++++++++++++++
this.dimplePlaceL = segment_average([positions.chin[2],positions.nose_bridge[3]]);
this.dimplePlaceR = segment_average([positions.chin[14],positions.nose_bridge[3]]);


 if(this.dimples>25){
  fill(red);
  ellipse(this.dimplePlaceL[0],this.dimplePlaceL[1],0.5);
  ellipse(this.dimplePlaceR[0],this.dimplePlaceR[1],0.5);

 }  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++CLOWN LINES+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//change colour with eyes

// fill(this.crosshatch,100,100,this.LeftTrans);



// stroke(highlightS);
// this.eyePointL = segment_average([positions.left_eye[3],positions.nose_bridge[2]]);
this.eyePointL = positions.left_eye[3];
// this.eyeOutL = segment_average([positions.chin[1],positions.left_eye[5]]);
this.eyeOutL = positions.left_eye[0];
this.nosePointR = segment_average([positions.nose_bridge[3],positions.right_eye[4],positions.chin[14]])

// this.nosePoint2l = segment_average([this.]);
// this.eyePointR = segment_average([positions.right_eye[0],positions.nose_bridge[2]]);
// this.eyeOutR = segment_average([positions.chin[15],positions.right_eye[4]]);
this.eyePointR = positions.right_eye[0];
this.eyeOutR = positions.right_eye[3];
this.nosePointL = segment_average([positions.nose_bridge[3],positions.left_eye[4],positions.chin[2]])

this.clownLineL = positions.left_eyebrow[2];
this.clownLineR = positions.right_eyebrow[2];


// this.bridgebottom = positions.nose_bridge[2];
// this.bridgetop = positions.nose_bridge[1];

if (this.eyes>=0&&this.eyes<=25){
  fill(red);
}else if(this.eyes>=26&&this.eyes<=50){
  fill(cyan);
}else if(this.eyes>=51&&this.eyes<=75){
  fill(yellow);
}else if(this.eyes>=76&&this.eyes<=100){
  fill(green);
}

// fill(150,this.highL,150,100);
// fill(this.crosshatch,100,100,this.RightTrans);
beginShape();//left 
// curveVertex(this.eyeOutL[0],this.eyeOutL[1]);
// curveVertex(this.nosePointL[0],this.nosePointL[1]);
curveVertex(this.eyePointL[0],this.eyePointL[1]);
curveVertex(this.eyePointL[0],this.eyePointL[1]);
curveVertex(this.clownLineL[0],this.clownLineL[1]-0.25);
curveVertex(this.eyeOutL[0],this.eyeOutL[1]);
curveVertex(this.nosePointL[0],this.nosePointL[1]);
endShape(CLOSE);


// noFill();
beginShape();//right
curveVertex(this.eyePointR[0],this.eyePointR[1]);
curveVertex(this.eyePointR[0],this.eyePointR[1]);
curveVertex(this.clownLineR[0],this.clownLineR[1]-0.25);

curveVertex(this.eyeOutR[0],this.eyeOutR[1]);
curveVertex(this.nosePointR[0],this.nosePointR[1]);
endShape(CLOSE);


//sunnies B)
// beginShape();//left 
// curveVertex(this.eyePointL[0],this.eyePointL[1]);
// curveVertex(this.eyePointL[0],this.eyePointL[1]);
// curveVertex(this.eyeOutL[0],this.eyeOutL[1]);
// curveVertex(this.nosePointL[0],this.nosePointL[1]);
// // endShape(CLOSE);
// curveVertex(this.bridgebottom[0],this.bridgebottom[1]);



// // beginShape();//right
// // curveVertex(this.eyePointR[0],this.eyePointR[1]);
// // curveVertex(this.eyePointR[0],this.eyePointR[1]);
// curveVertex(this.nosePointR[0],this.nosePointR[1]);
// curveVertex(this.eyeOutR[0],this.eyeOutR[1]);
// curveVertex(this.bridgetop[0],this.bridgetop[1]);
// curveVertex(this.bridgetop[0],this.bridgetop[1]);

// endShape(CLOSE);

noFill();
stroke(landmark);
//++++++++++++++++++++++++++++++++LIPS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//lip colour change with skin?
if (this.skin>=0&&this.skin<=25){
  fill(red);
}else if(this.skin>=26&&this.skin<=50){
  fill(cyan);
}else if(this.skin>=51&&this.skin<=75){
  fill(yellow);
}else if(this.skin>=76&&this.skin<=100){
  fill(green);
}


this.bottomLip = positions.bottom_lip;//----------------------Bottom Lip----
beginShape();
for(let i =0;i<this.bottomLip.length; i++){
  curveVertex(this.bottomLip[i][0],this.bottomLip[i][1])
}endShape(CLOSE);

this.topLip = positions.top_lip;//----------------------Top Lip------
beginShape();
for(let i =0;i<this.topLip.length; i++){
  curveVertex(this.topLip[i][0],this.topLip[i][1])
}endShape(CLOSE);



stroke(landmark);

//+++++++++++++++++++++++++NOSE+++++++++++++++++++++++++++++++++++++
//nose_tip, (31-35)
//Nose_bridge (27-30)
this.topNoseB = positions.nose_bridge[0];
this.leftNoseT = positions.nose_tip[0];
this.rightNoseT = positions.nose_tip[4];
this.middleNoseT = positions.nose_tip[2];
this.clownNose = segment_average([positions.nose_tip[2],positions.nose_bridge[2]]);

// this.leftBrowRidge = segment_average([positions.nose_bridge[1],positions.left_eye[3]]);
// this.rightBrowRidge = segment_average([positions.nose_bridge[1],positions.right_eye[0]]);
this.leftBrowRidge = segment_average([positions.nose_bridge[1],positions.nose_tip[0]]);
this.rightBrowRidge = segment_average([positions.nose_bridge[1],positions.nose_tip[4]]);

beginShape();
curveVertex(this.topNoseB[0],this.topNoseB[1]);
curveVertex(this.leftBrowRidge[0],this.leftBrowRidge[1]);
curveVertex(this.leftNoseT[0],this.leftNoseT[1]);
curveVertex(this.middleNoseT[0],this.middleNoseT[1]);
curveVertex(this.rightNoseT[0],this.rightNoseT[1]);
curveVertex(this.rightBrowRidge[0],this.rightBrowRidge[1]);
// curveVertex(this.rightBrowRidge[0],this.rightBrowRidge[1]);
endShape(CLOSE);

fill(red);
ellipse(this.clownNose[0],this.clownNose[1],this.noseS);
noFill();

noFill();
strokeWeight(0.02);
stroke(landmark);

//+++++++++++++++++++++++++++++++++++++EYES+++++++++++++++++++++++++++++++++++++
this.leftEye = positions.left_eye;//------------------
  beginShape();
  for(let i =0; i<this.leftEye.length; i++){
  curveVertex(this.leftEye[i][0],this.leftEye[i][1]);// far far left
}
endShape(CLOSE);

this.rightEye = positions.right_eye;//------------------
  beginShape();
  for(let i =0; i<this.rightEye.length; i++){
  curveVertex(this.rightEye[i][0], this.rightEye[i][1]);
}
endShape(CLOSE);

//++++++++++++++++++++++++++++++EYEBROWS++++++++++++++++++++++++++++++
//left_eyebrow 17-21  ,,  right_eyebrow 22-26
//colour change with hair colour too??

strokeWeight(this.brows);

this.leftEB = positions.left_eyebrow[0];//---------------left
this.leftEBOne = positions.left_eyebrow[1];
this.leftEBMid = positions.left_eyebrow[2];
this.leftEBthree = positions.left_eyebrow[3];
this.leftEBend = positions.left_eyebrow[4];

beginShape();
  curveVertex(this.leftEB[0],this.leftEB[1]);
  curveVertex(this.leftEB[0],this.leftEB[1]);
  curveVertex(this.leftEBOne[0],this.leftEBOne[1]);
  curveVertex(this.leftEBMid[0], this.leftEBMid[1]);
  curveVertex(this.leftEBthree[0],this.leftEBthree[1]);
  curveVertex(this.leftEBend[0],this.leftEBend[1]);
  curveVertex(this.leftEBend[0],this.leftEBend[1]);
endShape();

this.rightEB = positions.right_eyebrow[0];//-----------------right
this.rightEBOne = positions.right_eyebrow[1];
this.rightEBMid = positions.right_eyebrow[2];
this.rightEBthree = positions.right_eyebrow[3];
this.rightEBend = positions.right_eyebrow[4];

beginShape();
  curveVertex(this.rightEB[0],this.rightEB[1]);
  curveVertex(this.rightEB[0],this.rightEB[1]);
  curveVertex(this.rightEBOne[0],this.rightEBOne[1]);
  curveVertex(this.rightEBMid[0], this.rightEBMid[1]);
  curveVertex(this.rightEBthree[0],this.rightEBthree[1]);
  curveVertex(this.rightEBend[0],this.rightEBend[1]);
  curveVertex(this.rightEBend[0],this.rightEBend[1]);
endShape();

noStroke();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++HAIR+++++++++++++++++++++++++++++++++++++++++++
// this.clownHair = segment_average([positions.chin[0],positions.chin[15],positions.nose_bridge[0]]);
this.clownHair = positions.nose_bridge[0]
this.clownHairL = positions.left_eyebrow[3];
this.clownHairR = positions.right_eyebrow[2];
this.clownRed = positions.right_eyebrow[3];
this.clownCyan = positions.left_eyebrow[2];
this.clownYellow = positions.chin[0];
this.clownGreen = positions.chin[15];



// strokeWeight(0.02);
// stroke(100,100,200);
// ellipse(this.clownHair[0],this.clownHair[1]-2,1);
// ellipse(this.clownHairL[0],this.clownHairL[1]-1.5,1);
// ellipse(this.clownHair[0]+0.5,this.clownHairR[1]-1.5,0.7);
// ellipse(this.clownHairR[0]+0.3,this.clownHairL[1]-1.3,1);
// ellipse(this.clownHairR[0],this.clownHairR[1]-1.5,1);




  }

  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  // this.draw_segment = function(segment, do_loop) {
  //   for(let i=0; i<segment.length; i++) {
  //       let px = segment[i][0];
  //       let py = segment[i][1];
  //       ellipse(px, py, 0.1);



  //       if(i < segment.length - 1) {
  //         let nx = segment[i+1][0];
  //         let ny = segment[i+1][1];
  //         line(px, py, nx, ny);
  //       }
  //       else if(do_loop) {
  //         let nx = segment[0][0];
  //         let ny = segment[0][1];
  //         line(px, py, nx, ny);
  //       }
  //   }
  // };

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    // this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    // this.eye_shift = map(settings[1], 0, 100, -2, 2);
    // this.mouth_size = map(settings[2], 0, 100, 0.5, 8);
  
    this.eyes = map(settings[0],0,100,0,100);
    this.hair = map(settings[1],0,100,0,100);
    this.skin = map(settings[2],0,100,0,100);
    this.brows =map(settings[3],0,100,0.02,0.2,);
    this.noseS =map(settings[4],0,100,0.5,1);
    this.dimples = map(settings[5],0,100,0,50);
    this.crosshatch = map(settings[6],0,100,120,255);

  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    // settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    // settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    // settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);


    settings[0]=map(this.eyes,0,100,0,100);
    settings[1]=map(this.hair,0,100,0,100);
    settings[2]=map(this.skin,0,100,0,100);
    settings[3]=map(this.brows,1,5,0,100);
    settings[4]=map(this.noseS,0.5,1,0,100);
    settings[5]=map(this.dimples,0,50,0,100);
    settings[6]=map(this.crosshatch,0,255,0,100);

    return settings;
  }
}
