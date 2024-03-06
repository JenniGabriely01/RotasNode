/* importar a biblioteca axios */
const axios = require('axios');

/* url api que queremos acessar */
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

/* requisicao HTTP GET API usando o axios */
axios.get(apiUrl)
.then ((response) => {
    /* exiba os dados retornados no console */
    console.log("dados do api", response.data);
})
.catch((error) => {
    /* em caso de erro, exiba o erro no console */
    console.error('erro')
})