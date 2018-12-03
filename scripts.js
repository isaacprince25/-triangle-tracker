var side = function() {

  var one = document.getElementById("one").value;
  var two = document.getElementById("two").value;
  var three = document.getElementById("three").value;
  var result = [];

  if (one === two && two === three && three === one) {
    result = "an equalateral triangle";
    alert(result);
    document.getElementById("one").innerHTML = result;
  } else if (one === two || one === three || two === three) {
    result = "an isosceles triangle";
    alert(result);
    document.getElementById("one").innerHTML = result;
  } else if ((one + two) <= three || (one + three) <= two || (two + three) <= one) {
    result = "Not a triangle";
    alert(result);
    document.getElementById("one").innerHTML = result;
  } else if (one !== two || two != three || three !== one) {
    result = "scalene triangle";
    alert(result);
    document.getElementById("one").innerHTML = result;
  }

};
