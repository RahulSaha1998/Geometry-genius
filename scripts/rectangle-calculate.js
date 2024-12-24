function calculateRectangleArea() {
    //get rectangle base value
    const rectangleWidthInput = document.getElementById("rectangle-width");
    const rectangleWidthText = rectangleWidthInput.value;
    const width  = parseFloat(rectangleWidthText);
  
    //get rectangle length value
    const rectangleLengthInput = document.getElementById("rectangle-length");
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
  
    const area = width * length;
    console.log(area);
  
    //display rectangle area
    const rectangleAreaSpan = document.getElementById("rectangle-area");
    rectangleAreaSpan.innerText = area;
  }
  