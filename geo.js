function calculateTriangleArea() {
//  get triangle base value
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  console.log(base);
  // get triangle height value
  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  console.log(height);
  const area = 0.5 * base * height;
  console.log(area);
  // show triangle area
  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;
}
function calculaterectangleeArea() {
//  get rectangle width value
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);
   // validate width input

  
  // get rectangle length value
  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  console.log(length);
  // validate length input
if(isNaN(width) || isNaN(length)){
  alert('Please insert a number');
  return;
}
  
  area = width * length;
  console.log(area);
  // show rectangle area
  const rectangleareaSpan = document.getElementById('rectangle-area');
  rectangleareaSpan.innerText = area;

 

}



// Reusable function --- reduce duplicate code
function calculateParallelogrameArea() {
  const base = getInputValue('parallelogram-base');
 
  const height = getInputValue('parallelogram-height');
  // validation input
  if(isNaN(base) || isNaN(height)){
  alert('Please insert a number');
  return;
  }
  
  const area = base * height;
  console.log(area);
  setElementInnerText('parallelogram-area', area);
  addToCalculationEntry('Parallelogram:', area);
}
function calculateEllipseeArea() {
  const majoRadious = getInputValue('ellipse-major-radious');
  const minorRadious = getInputValue('ellipse-minor-radious');
  const area = 3.1416 * majoRadious * minorRadious;
  const areaTwoDecimal = area.toFixed(2);
  setElementInnerText('ellipse-area', areaTwoDecimal);
  addToCalculationEntry("Ellipse", areaTwoDecimal);
}
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}


// reusable set
function setElementInnerText(elementId, area) {
   const element = document.getElementById(elementId);
  element.innerText = area;

}


// add to calculation entry
/**
 * get the elemnet where you add the dynamic HTML
 * create a element you want to add
 *  if needed added some class
 * set inner HTML.it could be dynamic Template string
 * appened the created element as a child of the parent
 * */ 


function addToCalculationEntry(areaType, area) {
  console.log(areaType + ' ' + area);
  const caculationEntry = document.getElementById('calculation-id');
  const count = caculationEntry.childElementCount;
  const p = document.createElement('p');
  p.classList.add('my-4');
  p.innerHTML = ` ${count+1}  ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-primary btn-sm">Convert</button>`;
  caculationEntry.appendChild(p);
}
