function calculatePentagonArea() {
    //get pentagon base value
    const triangleBaseInput = document.getElementById("pentagon-base");
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
  
    //get pentagon height value
    const triangleHeightInput = document.getElementById("pentagon-height");
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
  
    const area = 0.5 * base * height;
    console.log(area);
  
    //display pentagon area
    const triangleAreaSpan = document.getElementById("pentagon-area");
    triangleAreaSpan.innerText = area;
  }
  