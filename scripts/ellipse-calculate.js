function calculateEllipseArea() {
    //get triangle base value
    const triangleBaseInput = document.getElementById("ellipse-base");
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
  
    //get triangle height value
    const triangleHeightInput = document.getElementById("ellipse-height");
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
  
    const area = 3.1416 * base * height;
    console.log(area);
  
    //display triangle area
    const triangleAreaSpan = document.getElementById("ellipse-area");
    triangleAreaSpan.innerText = area;
  }
  