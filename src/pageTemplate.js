const managerCard = (manager) => {
    return
`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">${manager.name}</div>
<div class="card-body">
  <h5 class="card-title">${manager.employeeID}</h5>
  <p class="card-text">${manager.email} ${manager.officeNumber}}</p>
</div>
</div>`};


const engineerCard = (engineer) => {
    return
`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">${engineer.name}</div>
<div class="card-body">
  <h5 class="card-title">${engineer.employeeID}</h5>
  <p class="card-text">${engineer.email} ${engineer.officeNumber}}</p>
</div>
</div>`};


const internCard = (intern) => {
    return
`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header">${intern.name}</div>
<div class="card-body">
  <h5 class="card-title">${intern.employeeID}</h5>
  <p class="card-text">${intern.email} ${intern.officeNumber}}</p>
</div>
</div>`}

const teamPage = (managerCard, engineerCard, internCard)
    return

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Team Generator</title>
</head>
<body>
${managerCard}
${engineerCard}
${internCard}
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
</html>`


module.exports = pageTemplate;