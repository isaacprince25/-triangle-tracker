document.getElementById("submit").addEventListener("click", side);

var side = function() {

  var one = document.getElementById("one").value;
  var two = document.getElementById("two").value;
  var three = document.getElemntById("three").value;
  var result =[];

  if (one === two && two === three && three === one) {
    result = "an equalateral triangle";
    console.log(result);
    document.getElemntById("one").innerHTML = result;
  } else if (one === two || one === three || two === three) {
    result = "an isosceles triangle";
    console.log(result);
    document.getElemntById("one").innerHTML = result;
  } else if ((one + two) <= (three) || (one + three) <= (two) || (two + three) <= (one)) {
    result = "Not a triangle";
    console.log(result);
    document.getElemntById("one").innerHTML = result;
  } else if(one !== two || two !=three || three !== one){
    result = "scalene triangle";
    console.log(result);
    document.getElemntById("one").innerHTML = result;
  }else (none)

};
