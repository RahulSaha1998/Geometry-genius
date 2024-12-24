function rhombusArea() {
  //get rhombus base value
  const rhombusD1Input = document.getElementById("rhombus-d1");
  const rhombusD1Text = rhombusD1Input.value;
  const base = parseFloat(rhombusD1Text);

  //get rhombus height value
  const rhombusD2Input = document.getElementById("rhombus-d2");
  const rhombusD2Text = rhombusD2Input.value;
  const height = parseFloat(rhombusD2Text);

  const area = 0.5 * base * height;
  console.log(area);

  //display rhombus area
  const rhombusAreaSpan = document.getElementById("rhombus-area");
  rhombusAreaSpan.innerText = area;
}
