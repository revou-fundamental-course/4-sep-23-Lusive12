function countarea() {
  const AreaSide = document.getElementById("area-side");
  const AreaResult = document.getElementById("area-result");
  if (AreaSide.value < 0) {
    AreaResult.innerText = "Nilai sisi berupa angka dan harus positif";
    return;
  }
  AreaResult.innerText =
    "Luas Persegi = " + AreaSide.value * AreaSide.value + " cm²";
}

function countperimeter() {
  const PerimeterSide = document.getElementById("perimeter-side");
  const PerimeterResult = document.getElementById("perimeter-result");
  if (PerimeterSide.value < 0) {
    PerimeterResult.innerText = "Nilai sisi berupa angka dan harus positif";
    return;
  }
  PerimeterResult.innerText =
    "Keliling Persegi = " + 4 * PerimeterSide.value + " cm²";
}

function reset() {
  const AreaResult = document.getElementById("area-result");
  AreaResult.innerText = "";

  const PerimeterResult = document.getElementById("perimeter-result");
  PerimeterResult.innerText = "";
}
