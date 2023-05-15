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

// This where you define your own face object
function Face(cheek,nose,eyes,temples,mouth,sideRight, evilness) {

  this.cheek = 0;
  this.nose = 0;
  this.eyes = 0;
  this.temples = 0;
  this.mouth = 0;
  this.sideRight = 0;
  this.evilness =0;

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

  
    const baseC = 115;
    const high = 130;
    const midd = 80;
    const dark = 60;
    const redEyes = color(171, 14, 3);

    this.colorOptions = [baseC,high,midd,dark,redEyes]


    scale(0.25);

  strokeWeight(0.1);
  fill(baseC);
  noStroke();
  ellipse(0,-3,13,12);
  stroke(baseC);
  beginShape();
  vertex(6,-3); 
  curveVertex(-5,-3);
  curveVertex(-6.7,-1.5);
  curveVertex(-5.5,6);
  curveVertex(0,10);
  curveVertex(5.5,6);
  curveVertex(6.7,-1.5);
endShape(CLOSE);


//-----------------------------------------------------------HIGHLIGHT-----------------------------

fill(high);
noStroke();
beginShape();//nose forehead thing
vertex(-0.3,1);
curveVertex(-0.3,1);
curveVertex(-0.5,3.5);//bottom left
curveVertex(0.5,3.5);//bottom right
curveVertex(0.3,1);
curveVertex(-sideRight/2+1,-1.6);//left top
curveVertex(-sideRight/2,-3);//top mid 
curveVertex(-sideRight/2-1,-1.6);//top right
endShape(CLOSE);

beginShape();//cheek left
curveVertex(-1,1);
curveVertex(-1.8,4);
curveVertex((-sideRight/2)-4,0);
curveVertex(-2,0);
endShape(CLOSE);

beginShape();//cheek right
curveVertex(1,1);
curveVertex(1.8,4);
curveVertex((-sideRight/2)+4,0);
curveVertex(2,0);
endShape(CLOSE);


// --------------------SHADOWS-----------------------------MID-------------------------------

fill(midd);
stroke(midd);
strokeWeight(0.05);
beginShape();//left cheek____________
  vertex(-6.8,0);
  curveVertex(-6.8,0);
  curveVertex(-5.7,6);
  vertex(-2.2,9.2);
  curveVertex(-cheek-sideRight/1.5,4);
endShape(CLOSE);

beginShape();//right cheek___________
  vertex(6.8,0);
  curveVertex(6.8,0);
  curveVertex(5.7,6);
  vertex(2.2,9.2);
  curveVertex(cheek-sideRight/1.5,4);
endShape(CLOSE);

beginShape();//nose_______________
  vertex(0,4);//mid
  curveVertex(0,4);
  curveVertex(1.5,4);
  curveVertex(1.5+sideRight/2,5);
  curveVertex(sideRight+0.7,nose)//====================================================================================================
  curveVertex(sideRight-0.7,nose);//mid
  curveVertex(-1.5+sideRight/3,5);
  curveVertex(-1.5,4);
  curveVertex(0,4)
endShape(CLOSE);

beginShape();//eye left_______________
  vertex(-3.5,-1);
  curveVertex(-4,-1);
  curveVertex(-5,-0);
  curveVertex(-4.5+sideRight/2,1.5);//mid
  curveVertex(-1.75,eyes-0.1);
  curveVertex(-1,1.5); 
  curveVertex(-1.5,-0.5);
endShape(CLOSE);

beginShape();//eye right_______________
  vertex(3.5,-1);
  curveVertex(4,-1);
  curveVertex(5,0);
  curveVertex(4.5+sideRight/2,1.5)//mid
  curveVertex(1.75,eyes-0.1);
  curveVertex(1,1.5);
  curveVertex(1.5,-0.5);
endShape(CLOSE);

beginShape();//temple left_________________
  vertex(-6.85,-1);
  curveVertex(-6.85,-1);
  curveVertex(-temples-sideRight/2,-4);
  curveVertex(-5.4,-6);
  curveVertex(-6.4,-4.3);
endShape(CLOSE);

beginShape();//temple right___________________
  vertex(6.85,-1);
  curveVertex(6.85,-1);
  curveVertex(temples-sideRight/2,-4);
  curveVertex(5.4,-6);
  curveVertex(6.4,-4.3);
endShape(CLOSE);

beginShape();//mouf__________________
  curveVertex(-1,6.5);
  curveVertex(1,6.5);
  vertex(1.9,7.2);
  curveVertex(sideRight,mouth);//===================================================================================================
  curveVertex(-1.9 ,7.2);
endShape(CLOSE);

//--------------------------------------------------------------DARK---------------------------
fill(dark);
stroke(dark);
strokeWeight(0.05);
beginShape();//left cheek____________
  vertex(-6.6,2);
  curveVertex(-6.6,2);
  curveVertex(-5.7,6);
  vertex(-4,7.8);
  curveVertex(-(cheek*1.3)-sideRight/1.5,4);
endShape(CLOSE);

beginShape();//right cheek___________
  vertex(6.6,2);
  curveVertex(6.6,2);
  curveVertex(5.7,6);
  vertex(4,7.8);
  curveVertex((cheek*1.3)-sideRight/1.5,4);
endShape(CLOSE);

beginShape();//nose_______________
  vertex(0,4.8);//mid
  curveVertex(1,4.5);
  curveVertex(1+sideRight/2,5);
  curveVertex(sideRight+0.4,nose-0.1)
  curveVertex(sideRight-0.4,nose-0.1);//mid
  curveVertex(-1+sideRight/3,5);
  curveVertex(-1,4.5);
  curveVertex(0,4.8)
endShape(CLOSE);
if(evilness){
  fill(redEyes);
}
else(
  fill(dark)
)
beginShape();//eye left_______________
  vertex(-3,-0.4);
  curveVertex(-3,-0.4);
  curveVertex(-3.8,0);
  curveVertex(-3+sideRight/2,0.8);//mid
  curveVertex(-1.9,(eyes/1.3)-1);
  curveVertex(-1.7,-0.1);
endShape(CLOSE);

beginShape();//eye right_______________
  vertex(3,-0.4);
  curveVertex(3,-0.4);
  curveVertex(3.8,0);
  curveVertex(3+sideRight/2,0.8)//mid
  curveVertex(1.9,(eyes/1.3)-1);
  curveVertex(1.7,-0.1);
endShape(CLOSE);

fill(dark);
beginShape();//temple left_________________
  vertex(-6.8,-1.5);
  curveVertex(-6.8,-1.5);
  curveVertex((-temples-1)-sideRight/2,-4);
  curveVertex(-6.3,-4.5);
endShape(CLOSE);

beginShape();//temple right___________________
  vertex(6.8,-1.5);
  curveVertex(6.8,-1.5);
  curveVertex((temples+1)-sideRight/2,-4);
  curveVertex(6.3,-4.5);
endShape(CLOSE);

beginShape();//mouf__________________
  curveVertex(-1,6.6);
  curveVertex(1,6.6);
  vertex(1.9,7.2);
  curveVertex(0,7);
  curveVertex(-1.9 ,7.2);
endShape(CLOSE);


    // head
  //   ellipseMode(CENTER);
  //   stroke(stroke_color);
  //   fill(this.mainColour);
  //   ellipse(segment_average(positions.chin)[0], 0, 3, 4);
  //   noStroke();

  //   // mouth
  //   fill(this.detailColour);
  //   ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);

  //   // eyebrows
  //   fill( this.eyebrowColour);
  //   stroke( this.eyebrowColour);
  //   strokeWeight(0.08);
  //   this.draw_segment(positions.left_eyebrow);
  //   this.draw_segment(positions.right_eyebrow);

  //   // draw the chin segment using points
  //   fill(this.chinColour);
  //   stroke(this.chinColour);
  //   this.draw_segment(positions.chin);

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
  }

  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
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

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    this.eye_shift = map(settings[1], 0, 100, -2, 2);
    this.mouth_size = map(settings[2], 0, 100, 0.5, 8);

    this.cheek = map(settings[3],0,100,3.5,4.2);
    this.nose = map(settings[4],0,100,5.5,6);
    this.eyes = map(settings[5],0,100,1.8,3);
    this.temples =map(settings[6],0,100,4,5,);
    this.mouth =map(settings[7],0,100,7.2,8);
    this.sideRight = map(settings[8],0,100,-1,1);
    // this.redEyes = map(settings[9],0,100,0,300);

    
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    // settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    // settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    // settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);


    settings[3] = map(this.cheek,3.5,4.2,0,100);
    settings[4]=map(this.nose,5.5,6,0,100);
    settings[5]=map(this.eyes,1.8,3,0,100);
    settings[6]=map(this.temples,4,5,0,100);
    settings[7]=map(this.mouth,7.2,8,0,100);
    settings[8]=map(this.sideRight,-1,1,0,100);
    // settings[9]=map(this.redEyes,0,300,0,100);

    return settings;
  }
}
