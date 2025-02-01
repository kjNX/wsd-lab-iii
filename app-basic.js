const http = require('http');

const HTTP_PORT = 8080

http.createServer((req, res) => {
    console.log(req)
    // res.writeHead(201)
    // res.write('404|page not found')

    // res.writeHead(200, {'Content-Type': 'application/csv'})
    // res.setHeader('Content-Disposition', 'attachment;filename=lista.csv')

    // res.write("id,nombre\n")
    // res.write("1,Fernando\n")
    // res.write("2,Marisa\n")
    // res.write("3,Gladys\n")

    res.write('Hello World!')
    res.end()
})
    .listen(HTTP_PORT)
console.log('Escuchando en http://localhost:' + HTTP_PORT)
