import http from "node:http";
import { buffer } from "node:stream/consumers";

const server = http.createServer( async (request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/products") {
    return response.end("Lista de produtos!");
  }

  if (method === "POST" && url === "/products") {
    const buffers = []

    for await (const chunk of request) {
      buffers.push(chunk)
    }


    console.log(Buffer.concat(buffers).toString())

    return response.end("Produto cadastrado!");
  }


  return response.writeHead(404).end("Rota não encontrada!")
});

server.listen(3333);
