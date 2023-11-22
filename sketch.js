let xValue, aValue, bValue, rValue;
let y1, y2;
let cirkelForskrift = '(2-1)^2+(y-2)^2=4^2';
let inputChanged = false;

function setup() {
  createCanvas(400, 400);
  stringInp = createInput(cirkelForskrift);
  stringInp.attribute('placeholder', 'Skriv forskrift og definer x: (x-a)^2+(y-b)^2=r^2');
  stringInp.size(310);
  stringInp.position(40, 10);
}

function draw() {
  background(220);
  strokeWeight(2);
  rect(35, 6, 330, 30, 2);

  if (keyIsPressed) {
    inputChanged = true;
  }

  if (inputChanged) {
    calculateY();
    console.log("y1 er " + y1);
    console.log("y2 er " + y2);
    inputChanged = false;
  }
}

function calculateY() {
  cirkelForskrift = stringInp.value();

  let currentNumber = "";

  for (let i = 0; i < cirkelForskrift.length; i++) {
    let currentChar = cirkelForskrift.charAt(i);

    if (/\d/.test(currentChar) && cirkelForskrift.charAt(i - 1) !== '^') {
      currentNumber += currentChar;
    } else {
      if (currentNumber !== "") {
        numCount = 1;
        switch (numCount) {
          case 1:
            xValue = parseInt(currentNumber);
            console.log(xValue);
            numCount++;
            break;
          case 2:
            aValue = parseInt(currentNumber);
            console.log(aValue);
            numCount++;
            break;
          case 3:
            bValue = parseInt(currentNumber);
            console.log(bValue);
            numCount++;
            break;
          case 4:
            rValue = parseInt(currentNumber);
            numCount++;
            console.log(rValue);
            break;
            default:
              numCount = 1;
              break;
        }
        currentNumber = "";
      }
    }
  }

  let discriminant = (sq(2 * bValue)) - (4 * (sq(bValue) + sq(xValue) + sq(aValue) - 2 * aValue * xValue + sq(rValue)));

  if (discriminant >= 0) {
    y1 = (-(2 * bValue) + sqrt(discriminant)) / 2;
    y2 = (-(2 * bValue) - sqrt(discriminant)) / 2;
    console.log("y1:" + y1);
    console.log("y2:" + y2);
  } else {
    console.log("No real solutions for y");
  }
}