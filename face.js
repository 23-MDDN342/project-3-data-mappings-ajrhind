
// var DEBUG_MODE = true;
  var DEBUG_MODE = false;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 8;
//I would have only done six if I could, but it kept breaking if I changed it

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

  this.eyes =0;
  this.hair=0;
  this.skin =0;
  this.brows =0.02;
  this.highL =0;
  this.dimples =0;
  this.crosshatch =0;

  this.draw = function (positions) {

    //colours
  const landmark = color(255);
  let shadow = color(51, 166, 72);

  const lavender = color(199,125,242,100);
  const green = color(98,217,69,100);
  const cyan = color(78,255,239,100);
  const yellow = color(248, 243, 43,100);
  const red = color(239, 45,86,100);
  //darker for the nose and skn
  const greenD = color(24, 255, 24);
  const cyanD = color(3, 252, 232);
  const yellowD = color(248, 255, 3);
  const redD = color(255, 0, 0);
  
  this.colorOptions = [green, lavender,cyan,red,yellow]
strokeWeight(0.03)

//==================================================================================================================================

this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
       
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
//++++++++++++++++++++++++++++++++++++++++++++LIPS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
noFill();
if (this.skin>=0&&this.skin<=25){
  stroke(greenD);
}else if(this.skin>=26&&this.skin<=50){
  stroke(cyanD);
}else if(this.skin>=51&&this.skin<=75){
  stroke(yellowD);
}else if(this.skin>=76&&this.skin<=100){
  stroke(redD);
}

this.topLipR = positions.top_lip[0];//----------------------Top Lip------
this.cupidsL = positions.top_lip[2];
this.cupidsR = positions.top_lip[4];
this.topLipL = positions.top_lip[6];
this.cupidsBottom = positions.top_lip[9];

beginShape();
vertex(this.topLipR[0],this.topLipR[1]);
vertex(this.cupidsL[0],this.cupidsL[1]);
vertex(this.cupidsR[0],this.cupidsR[1]);
vertex(this.topLipL[0],this.topLipL[1]);
vertex(this.cupidsBottom[0],this.cupidsBottom[1]);
endShape(CLOSE);

this.bottomLipR = positions.bottom_lip[0];//----------------------Bottom Lip-------
this.BLipR = positions.bottom_lip[2];
this.BLipL = positions.bottom_lip[4];
this.bottomLipL = positions.bottom_lip[6];
this.BLtop = positions.bottom_lip[8];
this.BLtop2 = positions.bottom_lip[9];
this.BLtop3 = positions.bottom_lip[10];

beginShape();
vertex(this.bottomLipR[0],this.bottomLipR[1]);
vertex(this.BLipR[0],this.BLipR[1]);
vertex(this.BLipL[0],this.BLipL[1]);
vertex(this.bottomLipL[0],this.bottomLipL[1]);
vertex(this.BLtop[0],this.BLtop[1]);
vertex(this.BLtop2[0],this.BLtop2[1]);
vertex(this.BLtop3[0],this.BLtop3[1]);
endShape(CLOSE);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++NOSE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
push();
// this.noseHigh = positions.nose_bridge;//nose highlight line-------------------------
// beginShape();
// for(let i =0;i<this.noseHigh.length;i++){
//   vertex(this.noseHigh[i][0],this.noseHigh[i][1])
// }endShape(CLOSE);

this.noseShadowR = segment_average([positions.nose_bridge[0],positions.right_eye[0]]);
this.noseTBC = positions.nose_tip[4];
this.noseShadowL =segment_average([positions.nose_bridge[0],positions.left_eye[3]]);
this.noseTBCL = positions.nose_tip[0];
this.noseInnerT = positions.nose_bridge[0];
this.noseInnerB = positions.nose_bridge[3];

beginShape();//left shadow----------------------------
vertex(this.noseShadowL[0],this.noseShadowL[1]);
vertex(this.noseTBCL[0],this.noseTBCL[1]);
vertex(this.noseInnerB[0],this.noseInnerB[1]);
vertex(this.noseInnerT[0],this.noseInnerT[1]);
endShape(CLOSE);

beginShape();//right shadow---------------------------
vertex(this.noseShadowR[0],this.noseShadowR[1]);
vertex(this.noseTBC[0],this.noseTBC[1]);
vertex(this.noseInnerB[0],this.noseInnerB[1]);
vertex(this.noseInnerT[0],this.noseInnerT[1]);
endShape(CLOSE);

this.eyebrowsMid = segment_average([positions.left_eyebrow[4],positions.right_eyebrow[0]]);
this.EBCR = positions.right_eyebrow[0];
this.EBCL = positions.left_eyebrow[4];

beginShape();//middle-top------------------------------
vertex(this.EBCL[0],this.EBCL[1]);
vertex(this.noseShadowL[0],this.noseShadowL[1]);
vertex(this.noseInnerT[0],this.noseInnerT[1]);
vertex(this.noseShadowR[0],this.noseShadowR[1]);
vertex(this.EBCR[0],this.EBCR[1]);
vertex(this.eyebrowsMid[0],this.eyebrowsMid[1]);
endShape(CLOSE);

//nose tip---------------------------------------------
this.noseTip = positions.nose_bridge[3];
this.noseTH = positions.nose_tip;
beginShape();
vertex(this.noseTip[0],this.noseTip[1]);
for(i=0;i<this.noseTH.length ;i++){
  vertex(this.noseTH[i][0],this.noseTH[i][1])
}endShape(CLOSE);
pop();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++EYES++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//---------------------------------------LEFT----------------------------------
this.leftEyeBottom = positions.left_eye[4];
this.leftEyeB = segment_average([positions.left_eye[4],positions.left_eye[5]])
this.browBoneL = positions.left_eyebrow[1];
this.browBoneLE = positions.left_eyebrow[4];
this.eyeAverage = segment_average([positions.left_eye[0],positions.chin[0]])

beginShape();
vertex(this.eyeAverage[0],this.eyeAverage[1]);
vertex(this.browBoneL[0],this.browBoneL[1]);
vertex(this.browBoneLE[0],this.browBoneLE[1])
vertex(this.noseShadowL[0],this.noseShadowL[1]);
vertex(this.leftEyeB[0],this.leftEyeB[1]+0.1);

endShape(CLOSE);
//------------------------------------RIGHT-----------------------------------
this.rightEyeBottom = positions.right_eye[5];
this.rightEyeB = segment_average([positions.right_eye[4],positions.right_eye[5]])
this.browBoneR = positions.right_eyebrow[3];
this.browBoneRE = positions.right_eyebrow[0];
this.eyeAverageR = segment_average([positions.right_eye[3],positions.chin[16]]);

beginShape();
vertex(this.eyeAverageR[0],this.eyeAverageR[1]);
vertex(this.browBoneR[0],this.browBoneR[1]);
vertex(this.browBoneRE[0],this.browBoneRE[1]);
vertex(this.noseShadowR[0],this.noseShadowR [1]);
vertex(this.rightEyeB[0],this.rightEyeB[1]+0.1);
endShape(CLOSE);

//--------------------------------------TEMPLES
//--------------------left----------------------------
this.templeTopL = positions.chin[0];
this.templeITL = positions.left_eyebrow[1];
this.templelowerL = segment_average([positions.left_eye[0],positions.chin[0]])
this.cheekbEyeAV = segment_average([positions.left_eye[0],positions.chin[3]])

beginShape();
vertex(this.templeTopL[0],this.templeTopL[1]);
vertex(this.templeTopL[0],this.templeTopL[1]-0.6);
vertex(this.templeITL[0],this.templeITL[1]);
vertex(this.templelowerL[0],this.templelowerL[1]);
vertex(this.cheekbEyeAV[0],this.cheekbEyeAV[1]);
endShape(CLOSE);
//--------------------right-------------------------------
this.templeTopR = positions.chin[16];
this.templeITR = positions.right_eyebrow[3];
this.templelowerR =segment_average([positions.right_eye[3],positions.chin[16]]);
this.cheekbEyeAVR = segment_average([positions.right_eye[3],positions.chin[13]]);

beginShape();
vertex(this.templeTopR[0],this.templeTopR[1]);
vertex(this.templeTopR[0],this.templeTopR[1]-0.6);
vertex(this.templeITR[0],this.templeITR[1]);
vertex(this.templelowerR[0],this.templelowerR[1]);
vertex(this.cheekbEyeAVR[0],this.cheekbEyeAVR[1]);
endShape(CLOSE);

//darker highlight++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
this.avC1 = segment_average([positions.bottom_lip[3],positions.chin[7]]);
this.avC3 = segment_average([positions.bottom_lip[3],positions.chin[9]]);
//left--------------------------------------------------------------------------------------------------------------------
this.JawTopL = positions.chin[0];
this.JawBL = positions.chin[4];
this.JawChin = positions.chin[7];
this.JawMouth = positions.top_lip[0];
this.LCB = segment_average([positions.chin[2],positions.nose_tip[0]]);

beginShape();
vertex(this.JawTopL[0],this.JawTopL[1]);
vertex(this.JawTopL[0],this.JawTopL[1]);
vertex(this.JawBL[0],this.JawBL[1]);
vertex(this.JawChin[0],this.JawChin[1]);
vertex(this.avC1[0],this.avC1[1]);
vertex(this.JawMouth[0],this.JawMouth[1]);
vertex(this.LCB[0],this.LCB[1]);
vertex(this.LCB[0],this.LCB[1]);
endShape(CLOSE);
//right--------------------------------------------------------------------------------------------------------------------
this.JawTopR = positions.chin[16];
this.JawBR = positions.chin[12];
this.JawChinR = positions.chin[9];
this.JawMouthR = positions.top_lip[6];
this.RCB = segment_average([positions.chin[14],positions.nose_tip[4]]);

beginShape();
vertex(this.JawTopR[0],this.JawTopR[1]);
vertex(this.JawTopR[0],this.JawTopR[1]);
vertex(this.JawBR[0],this.JawBR[1]);
vertex(this.JawChinR[0],this.JawChinR[1]);
vertex(this.avC3[0],this.avC3[1]);
vertex(this.JawMouthR[0],this.JawMouthR[1]);
vertex(this.RCB[0],this.RCB[1]);
vertex(this.RCB[0],this.RCB[1]);
endShape(CLOSE);
//++++++++++++++++++++++++++++++++CHIN++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
this.midChin = positions.chin[8];

beginShape();
vertex(this.avC1[0],this.avC1[1]);
vertex(this.JawChin[0],this.JawChin[1]);
vertex(this.midChin[0],this.midChin[1]);
vertex(this.JawChinR[0],this.JawChinR[1]);
vertex(this.avC3[0],this.avC3[1]);
endShape(CLOSE);
//++++++++++++++++++++++++++++++++++++++DIMPLES++++++++++++++++++++++++++++++++++++++++++++++++++++++++
this.dimpleL = segment_average([positions.top_lip[6],positions.chin[13]]);
this.dimpleLB = segment_average([positions.top_lip[6],positions.chin[12]]);
this.dimpleR = segment_average([positions.top_lip[0],positions.chin[3]]);
this.dimpleRB = segment_average([positions.top_lip[0],positions.chin[4]]);

if(this.dimples>25){
  beginShape();
  vertex(this.dimpleL[0],this.dimpleL[1]);
  vertex(this.dimpleLB[0],this.dimpleLB[1]);
  endShape();
  beginShape();
  vertex(this.dimpleR[0],this.dimpleR[1]);
  vertex(this.dimpleRB[0],this.dimpleRB[1]);
  endShape();

}


}

/* set internal properties based on list numbers 0-100 */
this.setProperties = function(settings) {
  
    this.hair = map(settings[0],0,100,0,100);
    this.skin = map(settings[1],0,100,0,100);
    this.brows =map(settings[2],0,100,0.02,0.2);
    this.noseS =map(settings[3],0,100,0.5,1);
    this.dimples = map(settings[4],0,100,0,50);
    this.crosshatch = map(settings[5],0,100,120,255);
  }
  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
   
    settings[0]=map(this.hair,0,100,0,100);
    settings[1]=map(this.skin,0,100,0,100);
    settings[2]=map(this.brows,0.02,0.2,0,100);
    settings[3]=map(this.noseS,0.5,1,0,100);
    settings[4]=map(this.dimples,0,50,0,100);
    settings[5]=map(this.crosshatch,0,255,0,100);
    return settings;
  }
}

//-------------------------------RIGHT CHEEK-------------------------------
// stroke(shadow);
// this.cheekboneR = segment_average([positions.bottom_lip[0],positions.chin[14]]);
// this.lowCheekboneR = segment_average([positions.bottom_lip[0],positions.chin[9]])
// this.topCheekboneR = positions.chin[16];
// this.chinCheekR = positions.chin[9]
// this.rightCheek = positions.chin;//right
// this.chinChinR = positions.chin[10];

// this.differenceRight = this.chinChinR[0]-this.lowCheekboneR[0];
// // console.log(this.differenceRight);
// this.RightTrans = map(this.differenceRight,0,0.55,255,10);
// fill(100,this.crosshatch,100,this.RightTrans);

// beginShape(); 
// curveVertex(this.topCheekboneR[0],this.topCheekboneR[1]);
// curveVertex(this.topCheekboneR[0],this.topCheekboneR[1]);
// curveVertex(this.cheekboneR[0],this.cheekboneR[1]);
// curveVertex(this.lowCheekboneR[0],this.lowCheekboneR[1]);
// curveVertex(this.chinCheekR[0],this.chinCheekR[1]);
// curveVertex(this.chinCheekR[0],this.chinCheekR[1]);
// for(let i = 8; i<16; i++){
//   curveVertex(this.rightCheek[i][0],this.rightCheek[i][1]);
// }
// endShape(CLOSE);

//--------------------------------------LEFT CHEEK------------------------
// this.cheekboneL = segment_average([positions.bottom_lip[7],positions.chin[2]]);
// this.lowCheekboneL = segment_average([positions.bottom_lip[7],positions.chin[7]]);
// this.topCheekboneL = positions.chin[0];
// this.chinCheekL = positions.chin[7];
// this.chinChinL = positions.chin[6];

// this.differenceLeft = this.lowCheekboneL[0]-this.chinChinL[0];
// this.LeftTrans = map(this.differenceLeft,0,0.65,255,0);

// fill(100,this.crosshatch,100,this.LeftTrans);

// this.leftCheek = positions.chin;
// beginShape();
// curveVertex(this.chinCheekL[0],this.chinCheekL[1]);
// curveVertex(this.chinCheekL[0],this.chinCheekL[1]);
// curveVertex(this.lowCheekboneL[0],this.lowCheekboneL[1]);
// curveVertex(this.cheekboneL[0],this.cheekboneL[1]);
// curveVertex(this.topCheekboneL[0],this.topCheekboneL[1]);
// for(let i =0; i<9 ; i++){
// curveVertex(this.leftCheek[i][0],this.leftCheek[i][1]);
// }
// curveVertex(this.chinCheekL[0],this.chinCheekL[1]);
// endShape(CLOSE);

//dimple============================================================
//this.dimplePlaceL = segment_average([positions.chin[2],positions.nose_bridge[3]]);
// this.dimplePlaceR = segment_average([positions.chin[14],positions.nose_bridge[3]]);

//  if(this.dimples>25){
//   fill(255);
//   ellipse(this.dimplePlaceL[0],this.dimplePlaceL[1],0.5);
//   ellipse(this.dimplePlaceR[0],this.dimplePlaceR[1],0.5);

//  }  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++CLOWN LINES+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// this.eyePointL = positions.left_eye[3];
// this.eyeOutL = positions.left_eye[0];
// this.nosePointR = segment_average([positions.nose_bridge[3],positions.right_eye[4],positions.chin[14]])

// this.eyePointR = positions.right_eye[0];
// this.eyeOutR = positions.right_eye[3];
// this.nosePointL = segment_average([positions.nose_bridge[3],positions.left_eye[4],positions.chin[2]])

// this.clownLineL = positions.left_eyebrow[2];
// this.clownLineR = positions.right_eyebrow[2];

// if (this.hair>=0&&this.hair<=25){
//   fill(red);
// }else if(this.hair>=26&&this.hair<=50){
//   fill(cyan);
// }else if(this.hair>=51&&this.hair<=75){
//   fill(yellow);
// }else if(this.hair>=76&&this.hair<=100){
//   fill(green);
// }

// beginShape();//left 

// curveVertex(this.eyePointL[0],this.eyePointL[1]);
// curveVertex(this.eyePointL[0],this.eyePointL[1]);
// curveVertex(this.clownLineL[0],this.clownLineL[1]-0.25);
// curveVertex(this.eyeOutL[0],this.eyeOutL[1]);
// curveVertex(this.nosePointL[0],this.nosePointL[1]);

// endShape(CLOSE);

// // noFill();
// beginShape();//right
// curveVertex(this.eyePointR[0],this.eyePointR[1]);
// curveVertex(this.eyePointR[0],this.eyePointR[1]);
// curveVertex(this.clownLineR[0],this.clownLineR[1]-0.25);

// curveVertex(this.eyeOutR[0],this.eyeOutR[1]);
// curveVertex(this.nosePointR[0],this.nosePointR[1]);
// endShape(CLOSE);

// noFill();
// stroke(landmark);

//lips-----------------------------------------------------------
//change with skin colour
// if (this.skin>=0&&this.skin<=25){
//   fill(redD);
// }else if(this.skin>=26&&this.skin<=50){
//   fill(cyanD);
// }else if(this.skin>=51&&this.skin<=75){
//   fill(yellowD);
// }else if(this.skin>=76&&this.skin<=100){
//   fill(greenD);
// }
// for(let i=0;i<this.bottomLip.length; i++){
//   vertex(this.bottomLip[i][0],this.bottomLip[i][1])
// }
// push();
// stroke(0,200,0);
// strokeWeight(0.02)
// this.bottomLip = positions.bottom_lip;//----------------------Bottom Lip----
// beginShape();
// for(let i=0;i<this.bottomLip.length; i++){
//     curveVertex(this.bottomLip[i][0],this.bottomLip[i][1])
//   }endShape(CLOSE);
//   pop();




//+++++++++++++++++++++++++NOSE+++++++++++++++++++++++++++++++++++++
// this.topNoseB = positions.nose_bridge[0];
// this.leftNoseT = positions.nose_tip[0];
// this.rightNoseT = positions.nose_tip[4];
// this.middleNoseT = positions.nose_tip[2];
// this.clownNose = segment_average([positions.nose_tip[2],positions.nose_bridge[2]]);

// this.leftBrowRidge = segment_average([positions.nose_bridge[1],positions.nose_tip[0]]);
// this.rightBrowRidge = segment_average([positions.nose_bridge[1],positions.nose_tip[4]]);

// beginShape();
// curveVertex(this.topNoseB[0],this.topNoseB[1]);
// curveVertex(this.leftBrowRidge[0],this.leftBrowRidge[1]);
// curveVertex(this.leftNoseT[0],this.leftNoseT[1]);
// curveVertex(this.middleNoseT[0],this.middleNoseT[1]);
// curveVertex(this.rightNoseT[0],this.rightNoseT[1]);
// curveVertex(this.rightBrowRidge[0],this.rightBrowRidge[1]);
// endShape(CLOSE);

// fill(lavender);
// ellipse(this.clownNose[0],this.clownNose[1],this.noseS);
// noFill();

// noFill();
// strokeWeight(0.02);
// stroke(landmark);

//+++++++++++++++++++++++++++++++++++++EYES+++++++++++++++++++++++++++++++++++++
// this.leftEye = positions.left_eye;//------------------
//   beginShape();
//   for(let i =0; i<this.leftEye.length; i++){
//   curveVertex(this.leftEye[i][0],this.leftEye[i][1]);// far far left
// }
// endShape(CLOSE);

// this.rightEye = positions.right_eye;//------------------
//   beginShape();
//   for(let i =0; i<this.rightEye.length; i++){
//   curveVertex(this.rightEye[i][0], this.rightEye[i][1]);
// }
// endShape(CLOSE);

// //++++++++++++++++++++++++++++++EYEBROWS++++++++++++++++++++++++++++++
// this.fixbrow = map(this.brows, 0, 100, 0.02, 0.2)
// strokeWeight(this.brows);

// this.leftEB = positions.left_eyebrow[0];//---------------left
// this.leftEBOne = positions.left_eyebrow[1];
// this.leftEBMid = positions.left_eyebrow[2];
// this.leftEBthree = positions.left_eyebrow[3];
// this.leftEBend = positions.left_eyebrow[4];

// beginShape();
//   curveVertex(this.leftEB[0],this.leftEB[1]);
//   curveVertex(this.leftEB[0],this.leftEB[1]);
//   curveVertex(this.leftEBOne[0],this.leftEBOne[1]);
//   curveVertex(this.leftEBMid[0], this.leftEBMid[1]);
//   curveVertex(this.leftEBthree[0],this.leftEBthree[1]);
//   curveVertex(this.leftEBend[0],this.leftEBend[1]);
//   curveVertex(this.leftEBend[0],this.leftEBend[1]);
// endShape();

// this.rightEB = positions.right_eyebrow[0];//-----------------right
// this.rightEBOne = positions.right_eyebrow[1];
// this.rightEBMid = positions.right_eyebrow[2];
// this.rightEBthree = positions.right_eyebrow[3];
// this.rightEBend = positions.right_eyebrow[4];

// beginShape();
//   curveVertex(this.rightEB[0],this.rightEB[1]);
//   curveVertex(this.rightEB[0],this.rightEB[1]);
//   curveVertex(this.rightEBOne[0],this.rightEBOne[1]);
//   curveVertex(this.rightEBMid[0], this.rightEBMid[1]);
//   curveVertex(this.rightEBthree[0],this.rightEBthree[1]);
//   curveVertex(this.rightEBend[0],this.rightEBend[1]);
//   curveVertex(this.rightEBend[0],this.rightEBend[1]);
// endShape();

// noStroke();
