// 초기 변수 선언
// let picWidth = 1440;
let picWidth = 800;
let moveNum = 0;
const totalNum = 3;

// 이미지 위치 셋팅
for(var i=0; i<totalNum; i++){ // i: 0,1,2
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
// document.getElementById("temp").innerText = moveNum;
document.getElementById("text0").classList.add("active");

// 동적으로 점 인디케이터 생성
let dotList = document.createElement("ul");
dotList.setAttribute("id", "dotList");
document.getElementById("ImgSet").appendChild(dotList);
// document.getElementById("section1").appendChild(dotList);

for(var i=0; i<totalNum; i++){
  var li = document.createElement("li");
  li.setAttribute("id", "li" + i);
  li.innerText = i;
  document.getElementById("dotList").appendChild(li);

  document.getElementById("li" + i).onclick = function(){
    // console.log(this.id);
    // console.log(this.id.substr(2,1));
    aniFunction();
    // moveNum = Number(this.id.substr(2,3));
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");
    moveNum = this.id.substr(2,1);
    moveFunction();
  }
}
document.getElementById("li" + moveNum).classList.toggle("active");

// 좌우 버튼 셋팅 prev_btn, next_btn
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
prev_btn.innerText = "◀";
document.getElementById("ImgSet").appendChild(prev_btn);

let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = "▶";
document.getElementById("ImgSet").appendChild(next_btn);

document.getElementById("text" + moveNum).classList.add("fadeIn");

// prev_btn.classList.add("disabled");


// 이미지 움직임 함수 선언
var aniFunction = function(){
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");

}

var moveFunction = function(){
  for(var i=0; i<totalNum; i++){
      document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
      document.getElementById("li"+ i).classList.remove("active");
  }
  document.getElementById("text" + moveNum).classList.remove("activeOut");
  document.getElementById("text" + moveNum).classList.add("active");

//   document.getElementById("temp").innerText = moveNum;
  for(var i=0; i<totalNum; i++){
      document.getElementById("li" + i).classList.remove("active");
  }
  document.getElementById("li" + moveNum).classList.toggle("active");
}

// 좌우 버튼 제어
document.getElementById("prev_btn").onclick = function(){
  aniFunction();
  if(moveNum > 0){
      moveNum--;
  }
  else {
      moveNum = 2;
  }
  moveFunction();
}

document.getElementById("next_btn").onclick = function(){
  aniFunction();
  if(moveNum < (totalNum-1)){
      moveNum++;
  }
  else {
      moveNum = 0;
  }
  moveFunction();
}