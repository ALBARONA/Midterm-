

function play1() {

  var nums = [1,2,3,4,5,6,7,8,9],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}


document.getElementById("t1").innerHTML= ranNums[0].valueOf();
document.getElementById("t2").innerHTML= ranNums[1].valueOf();
document.getElementById("t3").innerHTML= ranNums[2].valueOf();
document.getElementById("t4").innerHTML= ranNums[3].valueOf();
document.getElementById("t5").innerHTML= ranNums[4].valueOf();
document.getElementById("t6").innerHTML= ranNums[5].valueOf();
document.getElementById("t7").innerHTML= ranNums[6].valueOf();
document.getElementById("t8").innerHTML= ranNums[7].valueOf();
document.getElementById("t9").innerHTML= ranNums[8].valueOf();




var color = [ "red" ,"orange" ,"yellow" ,"green" ,"lightblue" ,"blue" ,"white" ,"gray" ,"pink"],
  ranNumc = [],
  o = color.length,
  k = 0;

while (o--) {
  k = Math.floor(Math.random() * (o+1));
  ranNumc.push(color[k]);
  color.splice(k,1);

}
document.getElementById("t1").style.backgroundColor= ranNumc[0].valueOf();
document.getElementById("t2").style.backgroundColor= ranNumc[1].valueOf();
document.getElementById("t3").style.backgroundColor= ranNumc[2].valueOf();
document.getElementById("t4").style.backgroundColor= ranNumc[3].valueOf();
document.getElementById("t5").style.backgroundColor= ranNumc[4].valueOf();
document.getElementById("t6").style.backgroundColor= ranNumc[5].valueOf();
document.getElementById("t7").style.backgroundColor= ranNumc[6].valueOf();
document.getElementById("t8").style.backgroundColor= ranNumc[7].valueOf();
document.getElementById("t9").style.backgroundColor= ranNumc[8].valueOf();


}




function load(){
  var nums = [1,2,3,4,5,6,7,8,9],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}


document.getElementById("t1").innerHTML= ranNums[0].valueOf();
document.getElementById("t2").innerHTML= ranNums[1].valueOf();
document.getElementById("t3").innerHTML= ranNums[2].valueOf();
document.getElementById("t4").innerHTML= ranNums[3].valueOf();
document.getElementById("t5").innerHTML= ranNums[4].valueOf();
document.getElementById("t6").innerHTML= ranNums[5].valueOf();
document.getElementById("t7").innerHTML= ranNums[6].valueOf();
document.getElementById("t8").innerHTML= ranNums[7].valueOf();
document.getElementById("t9").innerHTML= ranNums[8].valueOf();



}

//


//

var missed=[];
var i=0;
var value;
function play2(id){

document.getElementById(id).classList.add("invisible");
// document.getElementById(id).style.visibility="hidden";

value = document.getElementById(id).innerHTML;
missed.push(value);

if (i==8){
alert( "The order in which the numbers disapeared is:"+missed);}
i++;

}
