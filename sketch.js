let xValue, aValue, bValue, rValue;

function setup() {
  createCanvas(400, 400);
  stringInp = createInput('');
  stringInp.attribute('placeholder', 'Skriv forskrift og definer x: (x-a)^2+(y-b)^2=r^2');
  stringInp.size(310);
  stringInp.position(40,10);
  stringInp.input(circleFunction);
}

function draw() {
  background(220);
  strokeWeight(2);
  rect(35, 6, 330, 30, 2);
}

function circleFunction()
{
  cirkelForskrift = stringInp.value();

  let currentNumber = "";

  for (let i = 0; i <cirkelForskrift.length; i++)
  {
    let currentChar = cirkelForskrift.charAt(i);

    if (/\d/.test(currentChar) && cirkelForskrift.charAt(i-1) !== '^')
    {
      currentNumber += currentChar;
    } else {
      if (currentNumber !== "")
      {
        numCount = 1;
        switch (numCount)
        {
          case 1:
            xValue = parseInt(currentNumber);
            numCount++
            break;
          case 2:
            aValue = parseInt(currentNumber);
            numCount++
            break;
          case 3:
            bValue = parseInt(currentNumber);
            numCount++
            break;
          case 4:
            rValue = parseInt(currentNumber);
            numCount = 1
            break;
        }
        currentNumber = "";
      }
    }
  }
  console.log(xValue);
  console.log(aValue);
  console.log(bValue);
  console.log(rValue);
}

function calculateY()
{
  y1 = (-(2*bValue)+sqrt(sq(2*bValue)-4*(sq(bValue)+sq(xValue)+sq(aValue)-2*aValue*xValue+sq(rValue))))/2
  y1 = (-(2*bValue)-sqrt(sq(2*bValue)-4*(sq(bValue)+sq(xValue)+sq(aValue)-2*aValue*xValue+sq(rValue))))/2
}