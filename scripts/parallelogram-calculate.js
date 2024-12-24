function calculateParallelogramArea() {
    //get parallelogram base value
    const parallelogramBaseInput = document.getElementById("parallelogram-base");
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
  
    //get parallelogram height value
    const parallelogramHeightInput = document.getElementById("parallelogram-height");
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
  
    const area = base * height;
    console.log(area);
  
    //display parallelogram area
    const parallelogramAreaSpan = document.getElementById("parallelogram-area");
    parallelogramAreaSpan.innerText = area;
  }
  