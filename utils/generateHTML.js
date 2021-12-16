const fs = require('fs');

generateHTML = data => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=M+PLUS+1+Code&family=Oswald&family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>

<body>
<header>
        <h1 class= "header"> My Team </h1>
    </header>
<div class="container">
<div class="card" style="max-width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.managerName}</h5>
            <h5>Manager</h5>
            <h5 class="card-subtitle"> ID: ${data.managerID}</h5>
            <a href="mailto: ${data.managerEmail}" target="_blank" class="card-subtitle" >Email</a>
            <h5 class="card-subtitle"> Office Number: ${data.managerOfficeNumber}</h5>
        </div>
    </div>
</div>

    
</body>
</html>
`
};

module.exports = generateHTML;



