/* import */
const http = require('http');
const axios = require('axios');

/* funcao para lidar com as requisicoes */
const requestMain = (request, response) => {
    /* url da api que queremos acessar */
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    /* Fazendo uma requisicao http get api */
    axios.getAdapter(apiUrl)
    .then((apiResponse) => {
        /* config o canecalho da resposta */
        response.writeHead(200, {'Content-Type': 'text/plain'});

        /* exibindo os dados retornados */
        response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
    })
    .catch((error) => {
        console.log('erro ao acessar a api')
    })
}

/* criando o servidor */
const server = http.createServer(requestMain);

/* definindo a porta  */
const PORT = 3000;

/* iniciando o servidor e ouvindo a porta definida */
server.listen(PORT, () => {
    console.log(`servidor rodando em https://localhost:${PORT}`);
})