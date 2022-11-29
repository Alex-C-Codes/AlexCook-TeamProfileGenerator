function generateHTML(str) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Team</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="../dist/style.css" />
    </head>
    <body>

      <!-- Header -->
      <header>
        <h1>My Team</h1>
      </header>

      <!-- main body content -->
      <div class="container">
        <div class="row justify-content-center mx-lg-4">
          ${str}
        </div>
      </div>

      <!-- <script src="./assets/js/script.js"></script> -->
    </body>
  </html>
  `;
}

module.exports = generateHTML;