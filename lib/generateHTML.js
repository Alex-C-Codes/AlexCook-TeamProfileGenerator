function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Team</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
      </head>
      <body>
    
        <!-- Header -->
        <header>
          <h1><a href="./index.html">My Team</a></h1>
        </header>
    
        <!-- main body content -->
        <div>
            <div class="card" style="width: 18rem;">
            <div class="card-header">${data.managerName}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.managerID}</li>
                    <li class="list-group-item">${data.managerEmail}</li>
                    <li class="list-group-item">${data.officeNumber}</li>
                </ul>
            </div>
        </div>
    
        <!-- <script src="./assets/js/script.js"></script> -->
      </body>
    </html>
    `;
}

module.exports = generateHTML;