/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 8;

// other variables can be in here too
// here's some examples for colors used


const stroke_color = [95, 52, 8];

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

// function stipple() {
//   // createCanvas(800, 800);
  
//   // Design a pattern, this one just puts random dots 
//   p = createGraphics(width, height);
//   p.background(150,0,255);
//   p.fill(255,0,255);
//   p.noStroke();
//   for (let i = 0.2; i < 500; i++){
//     let x = i;
//     let y = i;
//     p.ellipse(x, y, 0.05);
//   }
//     buf = createGraphics(width, height);
// }
// // image(buf,0,0);

// function createPattern(p, buf=this){
//   return buf.drawingContext.createPattern(p.canvas, 'repeat');
// }

// function setFill(arg, buf=this) {
//   buf.fill(0);
//   buf._renderer._setFill(arg);
// }

// This where you define your own face object
function Face(eyes,hair,skin,brows,teeth,dimples,crosshatchR, crosshatchL) {


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
  this.teeth =0;
  this.dimples =0;
  this.crosshatchR =0
  this.crosshatchL =0
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

  
  const landmark = color(100,200,100);
  const highlight = color(250, 182, 182,125);
  const highlightS = color(200,100,100);
  const shadow = color(100,100,200);
    this.colorOptions = [landmark,highlight,shadow]



strokeWeight(0.01)

//=======================================================================================================================================





this.draw_segmentMess = function(segment) {//this makes a cool effect//it looks like cross hatching
  for(let i=9; i<segment.length; i++) {
      let px = segment[i][0];
      let py = segment[i][1];

      if(i < segment.length - 1) {
        let nx = segment[16][0];
        let ny = segment[0][1];
        line(px, py, nx, ny);
      }
  }
}
this.draw_segmentMess2 = function(segment) {//this makes a cool effect//it looks like cross hatching
  for(let i=9; i<segment.length; i++) {
      let px = segment[i][0];
      let py = segment[i][1];

      if(i < segment.length - 1) {
        let nx = segment[9][0];
        let ny = segment[5][1];
        line(px, py, nx, ny);
      }
  }
}


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

this.stipple = function(){

  for(i = 0;i<50;i++){
      x=i/2;
      y=0;
      ellipse(x,y,0.05);
  }
}


//-------------------------------RIGHT CHEEK-------------------------------
stroke(shadow);
this.cheekboneR = segment_average([positions.bottom_lip[0],positions.chin[14]]);
this.lowCheekboneR = segment_average([positions.bottom_lip[0],positions.chin[9]])
this.topCheekboneR = positions.chin[16];
this.chinCheekR = positions.chin[9]
this.rightCheek = positions.chin;//right
this.chinChinR = positions.chin[10];


this.differenceRight = this.chinChinR[0]-this.lowCheekboneR[0];
console.log(this.differenceRight);
this.RightTrans = map(this.differenceRight,0,0.55,255,100);


fill(100,100,200,this.RightTrans);




// ellipse(this.lowCheekboneR[0],this.lowCheekboneR[1],0.1);

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

//--------------------------------------LEFT CHEEK------------------------
this.cheekboneL = segment_average([positions.bottom_lip[7],positions.chin[2]]);
this.lowCheekboneL = segment_average([positions.bottom_lip[7],positions.chin[7]]);
this.topCheekboneL = positions.chin[0];
this.chinCheekL = positions.chin[7];
this.chinChinL = positions.chin[6];

this.differenceLeft = this.lowCheekboneL[0]-this.chinChinL[0];
this.LeftTrans = map(this.differenceLeft,0,0.65,255,100);


fill(100,100,200,this.LeftTrans);

// console.log(this.lowCheekboneL);
// console.log(this.chinChinL);
// ellipse(this.lowCheekboneL[0],this.lowCheekboneL[1],0.1);


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


// get([positions.chin[6]]-this.lowCheekboneL);
// this.differenceLeft = this.lowCheekboneL[0]-this.chinChinL[0];
// console.log(this.differenceLeft);
// if(this.differenceLeft<);



//-------------------------HIGHLIGHT------------------
noFill();

stroke(highlightS);
this.eyePointL = segment_average([positions.left_eye[3],positions.nose_bridge[2]]);
this.eyeOutL = segment_average([positions.chin[1],positions.nose_bridge[1]]);
this.nosePointL = segment_average([positions.top_lip[0],positions.nose_tip[2],positions.chin[2]])
// this.nosePoint2l = segment_average([this.]);

beginShape();//left 
curveVertex(this.eyePointL[0],this.eyePointL[1]);
curveVertex(this.eyePointL[0],this.eyePointL[1]);
curveVertex(this.eyeOutL[0],this.eyeOutL[1]);
curveVertex(this.nosePointL[0],this.nosePointL[1]);
endShape(CLOSE);

this.eyePointR = segment_average([positions.right_eye[0],positions.nose_bridge[2]]);
this.eyeOutR = segment_average([positions.chin[15],positions.nose_bridge[1]]);
this.nosePointR = segment_average([positions.top_lip[7],positions.nose_tip[0],positions.chin[13]])
// this.nosePoint2l = segment_average([this.]);

beginShape();//left 
curveVertex(this.eyePointR[0],this.eyePointR[1]);
curveVertex(this.eyePointR[0],this.eyePointR[1]);
curveVertex(this.eyeOutR[0],this.eyeOutR[1]);
curveVertex(this.nosePointR[0],this.nosePointR[1]);
endShape(CLOSE);



stroke(landmark);
//++++++++++++++++++++++++++++++++LIPS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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

//shadow
stroke(shadow);
strokeWeight(0.02);
beginShape();//bottom part------------------
curveVertex(this.bottomLip[1][0],this.bottomLip[1][1]);
for(let i = 2; i<5; i++){
  curveVertex(this.bottomLip[i][0],this.bottomLip[i][1]);
 }
 curveVertex(this.bottomLip[5][0],this.bottomLip[5][1]);
endShape();

beginShape();
curveVertex(this.topLip[9][0],this.topLip[9][1]);
for(let i =8;i<11;i++){
  curveVertex(this.topLip[i][0],this.topLip[i][1])
}
curveVertex(this.topLip[10][0],this.topLip[10][1]);
endShape();


//highlight
stroke(highlightS);
  beginShape();//Bottom
  for(let i = 7; i<12; i++){
    curveVertex(this.bottomLip[i][0],this.bottomLip[i][1]);
   }
endShape();

beginShape();//Top
  curveVertex(this.topLip[2][0],this.topLip[2][1]);
for(let i =1;i<6; i++){
  curveVertex(this.topLip[i][0],this.topLip[i][1])
}
curveVertex(this.topLip[5][0],this.topLip[5][1]);
endShape();

stroke(landmark);

//+++++++++++++++++++++++++NOSE+++++++++++++++++++++++++++++++++++++
//nose_tip, (31-35)
//Nose_bridge (27-30)
this.topNoseB = positions.nose_bridge[0];
this.leftNoseT = positions.nose_tip[0];
this.rightNoseT = positions.nose_tip[4];
this.middleNoseT = positions.nose_tip[2];

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

//-------------SHADOW---------------------


//---------------HIGHLIGHT-------------------
// stroke(highlight);
noStroke();
this.noseHighlight = positions.nose_bridge;//HIGHLIGHT
this.noseHLR = segment_average([positions.nose_bridge[3],positions.nose_tip[1]]);
this.noseHLL = segment_average([positions.nose_bridge[3],positions.nose_tip[3]]);

fill(highlight,50);
beginShape();
curveVertex(this.noseHighlight[0][0],this.noseHighlight[0][1])
curveVertex(this.noseHighlight[0][0],this.noseHighlight[0][1])
// curveVertex(this.noseHighlight[1][0],this.noseHighlight[1][1])
// curveVertex(this.noseHighlight[2][0],this.noseHighlight[2][1])
curveVertex(this.noseHLR[0],this.noseHLR[1])
curveVertex(this.noseHLL[0],this.noseHLL[1])
endShape(CLOSE);


noFill();
strokeWeight(0.02);
stroke(landmark);
//++++++++++++++++++++++++++++++EYEBROWS++++++++++++++++++++++++++++++
//left_eyebrow 17-21  ,,  right_eyebrow 22-26

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
    
    this.eyes = map(settings[0],0,100,1.8,3);
    this.hair = map(settings[1],0,100,3.5,4.2);
    this.skin = map(settings[2],0,100,5.5,6);
    this.brows =map(settings[3],0,100,4,5,);
    this.teeth =map(settings[4],0,100,7.2,8);
    this.dimples = map(settings[5],0,100,-1,1);
    this.crosshatch = map(settings[6],0,100,150,255);

    
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    // settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    // settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    // settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);


    settings[0]=map(this.eyes,1.8,3,0,100);
    settings[1] = map(this.hair,3.5,4.2,0,100);
    settings[2]=map(this.skin,5.5,6,0,100);
    settings[3]=map(this.brows,4,5,0,100);
    settings[4]=map(this.teeth,7.2,8,0,100);
    settings[5]=map(this.dimples,-1,1,0,100);
    settings[6]=map(this.crosshatch,150,255,0,100);

    return settings;
  }
}



    // head
    // ellipseMode(CENTER);
    // stroke(stroke_color);
    // fill(this.mainColour);
    // ellipse(segment_average(positions.chin)[0], 0, 3, 4);
    // noStroke();

    // // mouth
    // fill(this.detailColour);
    // ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);

    // // eyebrows
    // fill( this.eyebrowColour);
    // stroke( this.eyebrowColour);
    // strokeWeight(0.08);
    // this.draw_segment(positions.left_eyebrow);
    // this.draw_segment(positions.right_eyebrow);

  //   // draw the chin segment using points
    // fill(this.chinColour);
    // stroke(this.chinColour);
    // this.draw_segment(positions.chin);

  //   fill(100, 0, 100);
  //   stroke(100, 0, 100);
  //   this.draw_segment(positions.nose_bridge);
  //   this.draw_segment(positions.nose_tip);

  //   strokeWeight(0.03);

  //   fill(this.lipColour);
  //   stroke(this.lipColour);
  //   this.draw_segment(positions.top_lip);
  //   this.draw_segment(positions.bottom_lip);

  //   let left_eye_pos = segment_average(positions.left_eye);
  //   let right_eye_pos = segment_average(positions.right_eye);

  //   // eyes
  //   noStroke();
  //   let curEyeShift = 0.04 * this.eye_shift;
  //   if(this.num_eyes == 2) {
  //     fill(this.detailColour);
  //     ellipse(left_eye_pos[0], left_eye_pos[1], 0.5, 0.33);
  //     ellipse(right_eye_pos[0], right_eye_pos[1], 0.5, 0.33);

  //     // fill(this.mainColour);
  //     // ellipse(left_eye_pos[0] + curEyeShift, left_eye_pos[1], 0.18);
  //     // ellipse(right_eye_pos[0] + curEyeShift, right_eye_pos[1], 0.18);
  //   }
  //   else {
  //     let eyePosX = (left_eye_pos[0] + right_eye_pos[0]) / 2;
  //     let eyePosY = (left_eye_pos[1] + right_eye_pos[1]) / 2;

  //     fill(this.detailColour);
  //     ellipse(eyePosX, eyePosY, 0.45, 0.27);

  //     fill(this.mainColour);
  //     ellipse(eyePosX - 0.1 + curEyeShift, eyePosY, 0.18);
  //   }
  //  // fill(0)
  //  //ellipse(0,0, 0.5,0.5) center point
  //  //rect(-2,-2,4.5,4) sizing debug 














  
// this.bottomlipLeft = positions.bottom_lip[5];
// this.bottomlipRight = positions.bottom_lip[1];

// beginShape();
// curveVertex(this.bottomlipLeft[0],this.bottomlipLeft[1]);
// curveVertex(this.bottomlipRight[0],this.bottomlipRight[1]);
// endShape(CLOSE);


//-----------------------------------------------------------HIGHLIGHT-----------------------------
// push();
// noFill();
// stroke(100,200,100);//green
// beginShape();//nose forehead thing
// vertex(-0.3,1);
// curveVertex(-0.3,1);
// curveVertex(-0.5,3.5);//bottom left
// curveVertex(0.5,3.5);//bottom right
// curveVertex(0.3,1);
// curveVertex(-this.sideRight/2+1,-1.6);//left top
// curveVertex(-this.sideRight/2,-3);//top mid 
// curveVertex(-this.sideRight/2-1,-1.6);//top right
// endShape(CLOSE);

// beginShape();//cheek left
// curveVertex(-1,1);
// curveVertex(-1.8,4);
// curveVertex((-this.sideRight/2)-4,0);
// curveVertex(-2,0);
// endShape(CLOSE);

// beginShape();//cheek right
// curveVertex(1,1);
// curveVertex(1.8,4);
// curveVertex((-this.sideRight/2)+4,0);
// curveVertex(2,0);
// endShape(CLOSE);

// // --------------------SHADOWS-----------------------------MID-------------------------------

// noFill();
// stroke(200,100,100);//pink
// strokeWeight(0.05);
// beginShape();//left cheek____________
//   vertex(-6.8,0);
//   curveVertex(-6.8,0);
//   curveVertex(-5.7,6);
//   vertex(-2.2,9.2);
//   curveVertex(-this.cheek-this.sideRight/1.5,4);
// endShape(CLOSE);

// beginShape();//right cheek___________
//   vertex(6.8,0);
//   curveVertex(6.8,0);
//   curveVertex(5.7,6);
//   vertex(2.2,9.2);
//   curveVertex(this.cheek-this.sideRight/1.5,4);
// endShape(CLOSE);

// beginShape();//nose_______________
//   vertex(0,4);//mid
//   curveVertex(0,4);
//   curveVertex(1.5,4);
//   curveVertex(1.5+this.sideRight/2,5);
//   curveVertex(this.sideRight+0.7,this.nose)//=======
//   curveVertex(this.sideRight-0.7,this.nose);//mid
//   curveVertex(-1.5+this.sideRight/3,5);
//   curveVertex(-1.5,4);
//   curveVertex(0,4)
// endShape(CLOSE);

// beginShape();//eye left_______________
//   vertex(-3.5,-1);
//   curveVertex(-4,-1);
//   curveVertex(-5,-0);
//   curveVertex(-4.5+this.sideRight/2,1.5);//mid
//   curveVertex(-1.75,this.eyes-0.1);
//   curveVertex(-1,1.5); 
//   curveVertex(-1.5,-0.5);
// endShape(CLOSE);

// beginShape();//eye right_______________
//   vertex(3.5,-1);
//   curveVertex(4,-1);
//   curveVertex(5,0);
//   curveVertex(4.5+this.sideRight/2,1.5)//mid
//   curveVertex(1.75,this.eyes-0.1);
//   curveVertex(1,1.5);
//   curveVertex(1.5,-0.5);
// endShape(CLOSE);

// beginShape();//temple left_________________
//   vertex(-6.85,-1);
//   curveVertex(-6.85,-1);
//   curveVertex(-this.temples-this.sideRight/2,-4);
//   curveVertex(-5.4,-6);
//   curveVertex(-6.4,-4.3);
// endShape(CLOSE);

// beginShape();//temple right___________________
//   vertex(6.85,-1);
//   curveVertex(6.85,-1);
//   curveVertex(this.temples-this.sideRight/2,-4);
//   curveVertex(5.4,-6);
//   curveVertex(6.4,-4.3);
// endShape(CLOSE);

// beginShape();//mouf__________________
//   curveVertex(-1,6.5);
//   curveVertex(1,6.5);
//   vertex(1.9,7.2);
//   curveVertex(this.sideRight,this.mouth);//
//   curveVertex(-1.9 ,7.2);
// endShape(CLOSE);

// //--------------------------------------------------------------DARK---------------------------
// noFill();
// stroke(100,100,200);//blue
// strokeWeight(0.05);
// beginShape();//left cheek____________
//   vertex(-6.6,2);
//   curveVertex(-6.6,2);
//   curveVertex(-5.7,6);
//   vertex(-4,7.8);
//   curveVertex(-(this.cheek*1.3)-this.sideRight/1.5,4);
// endShape(CLOSE);

// beginShape();//right cheek___________
//   vertex(6.6,2);
//   curveVertex(6.6,2);
//   curveVertex(5.7,6);
//   vertex(4,7.8);
//   curveVertex((this.cheek*1.3)-this.sideRight/1.5,4);
// endShape(CLOSE);

// beginShape();//nose_______________
//   vertex(0,4.8);//mid
//   curveVertex(1,4.5);
//   curveVertex(1+this.sideRight/2,5);
//   curveVertex(this.sideRight+0.4,this.nose-0.1)
//   curveVertex(this.sideRight-0.4,this.nose-0.1);//mid
//   curveVertex(-1+this.sideRight/3,5);
//   curveVertex(-1,4.5);
//   curveVertex(0,4.8)
// endShape(CLOSE);

// // if(evilness){
// //   fill(redEyes);
// // }
// // else(
// //   fill(dark)
// // )
// //////////////////////////////////////////////////////////////////////////////////////FIRST///////////////////////////////////////////////////////////////////////////////////
// this.leftEyeFar = positions.left_eye[0];// far left - 36
// this.leftEyeOne = positions.left_eye[1];
// this.leftEyeTwo = positions.left_eye[2]
// this.leftEyeClose = positions.left_eye[3];//far right - 39
// this.leftEyeFour = positions.left_eye[4]
// this.leftEyeBM = positions.left_eye[5];//left eye bottom middle - 41

// beginShape();//eye left_______________
// curveVertex(this.leftEyeFar[0],this.leftEyeFar[1]);// far far left
//   // vertex(-3,-0.4);
//   curveVertex(-this.leftEyeOne[0],this.leftEyeOne[1]);
//   // curveVertex(-3+this.sideRight/2,0.8);//mid point bottom-
//   curveVertex(this.leftEyeTwo[0],this.leftEyeTwo[1]);
//   curveVertex(this.leftEyeClose[0],this.leftEyeClose[1]);//far far right
//   curveVertex(this.leftEyeFour[0],this.leftEyeFour[1])
//   curveVertex(this.leftEyeBM[0],this.leftEyeBM[1]);//mid point bottom-
// endShape(CLOSE);

// beginShape();//eye right_______________
//   vertex(3,-0.4);
//   curveVertex(3,-0.4);
//   curveVertex(3.8,0);
//   curveVertex(3+this.sideRight/2,0.8)//mid
//   curveVertex(1.9,(this.eyes/1.3)-1);
//   curveVertex(1.7,-0.1);
// endShape(CLOSE);

// // fill(dark);
// beginShape();//temple left_________________
//   vertex(-6.8,-1.5);
//   curveVertex(-6.8,-1.5);
//   curveVertex((-this.temples-1)-this.sideRight/2,-4);
//   curveVertex(-6.3,-4.5);
// endShape(CLOSE);

// beginShape();//temple right___________________
//   vertex(6.8,-1.5);
//   curveVertex(6.8,-1.5);
//   curveVertex((this.temples+1)-this.sideRight/2,-4);
//   curveVertex(6.3,-4.5);
// endShape(CLOSE);

// beginShape();//mouf__________________
//   curveVertex(-1,6.6);
//   curveVertex(1,6.6);
//   vertex(1.9,7.2);
//   curveVertex(0,7);
//   curveVertex(-1.9 ,7.2);
// endShape(CLOSE);

// // this.rightEyex = positions.right_eye[0][0];
// // this.rightEyey = positions.right_eye[0][1];

// // fill(255)
// // ellipse(this.rightEyex,this.rightEyey,1);

// pop();
