const button = document.getElementById('calculate')

button.addEventListener('click', function calculateBMI(){

  const height = document.getElementById('height-input').value;
  const weight = document.getElementById('weight-input').value;

  if(height == '' || weight == '') {
    alert('Please fill out the input fields!');
    return;
  }

  const heightM = height / 100
  const height2 = heightM ** 2

  let BMI = weight / height2 

  BMI = BMI.toFixed(2)

  document.querySelector('.total-bmi').innerHTML = BMI;

  let status = ''
  let statusColor = ''

  if(BMI < 18.5){
    status = "Underweight"
    statusColor = "red"
  }

   else if(BMI >= 18.5 && BMI < 25){
    status = "Healthy"
    statusColor = "green"
  }

  if(BMI >= 25 && BMI < 30){
    status = "Overweight"
    statusColor = "orange"
  }

  if(BMI >= 30){
    status = "Obese"
    statusColor = "red"
  }

  document.querySelector('.person-status').innerHTML = 
  `You are <span id="status" style="color: ${statusColor}">${status}</span>`  

  document.body.style.backgroundColor = statusColor;
  
});