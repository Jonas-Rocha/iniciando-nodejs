import http from "node:http"

const server = http.createServer((request, response) => {
    return response.end("Teste4")//uma resposta é obrigatória, se não fica procurando eternamente.
})

server.listen(3333);

