const express = require('express'); // Importa o framework Express.js
const axios = require('axios'); // Importa o módulo Axios para fazer requisições HTTP
const app = express(); // Inicializa o aplicativo Express
const PORT = 3000; // Define a porta em que o servidor irá escutar

// Middleware para permitir o parsing do corpo das requisições
app.use(express.json());

// Rota para obter todos os posts
app.get('/posts', async (req, res) => {
  try {
    // Faz uma requisição GET para obter todos os posts
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // Retorna os dados obtidos como resposta
    res.json(response.data);
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro com status 500
    res.status(500).json({ error: 'Erro ao obter os posts' });
  }
});

// Rota para obter um post específico
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Faz uma requisição GET para obter um post específico com base no ID fornecido
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // Retorna os dados obtidos como resposta
    res.json(response.data);
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro com status 500
    res.status(500).json({ error: 'Erro ao obter o post' });
  }
});

// Rota para obter os comentários de um post específico
app.get('/posts/:id/comments', async (req, res) => {
  const { id } = req.params;
  try {
    // Faz uma requisição GET para obter os comentários de um post específico com base no ID fornecido
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    // Retorna os dados obtidos como resposta
    res.json(response.data);
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro com status 500
    res.status(500).json({ error: 'Erro ao obter os comentários' });
  }
});

// Rota para obter comentários com base no ID do post
app.get('/comments', async (req, res) => {
  const { postId } = req.query;
  try {
    // Faz uma requisição GET para obter os comentários com base no ID do post fornecido como parâmetro de consulta
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    // Retorna os dados obtidos como resposta
    res.json(response.data);
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro com status 500
    res.status(500).json({ error: 'Erro ao obter os comentários' });
  }
});

// Rota para criar um novo post
app.post('/posts', async (req, res) => {
  try {
    // Faz uma requisição POST para criar um novo post com base nos dados fornecidos no corpo da requisição
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body);
    // Retorna os dados do novo post criado como resposta
    res.json(response.data);
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro com status 500
    res.status(500).json({ error: 'Erro ao criar o post' });
  }
});

// Rota para atualizar um post existente
app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Faz uma requisição PUT para atualizar um post existente com base no ID fornecido
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, req.body);
    // Retorna os dados do post atualizado como resposta
    res.json(response.data);
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro com status 500
    res.status(500).json({ error: 'Erro ao atualizar o post' });
  }
});

// Rota para atualizar parcialmente um post existente
app.patch('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Faz uma requisição PATCH para atualizar parcialmente um post existente com base no ID fornecido
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, req.body);
    // Retorna os dados do post atualizado parcialmente como resposta
    res.json(response.data);
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro com status 500
    res.status(500).json({ error: 'Erro ao atualizar parcialmente o post' });
  }
});

// Rota para deletar um post
app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Faz uma requisição DELETE para deletar um post existente com base no ID fornecido
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // Retorna uma resposta de sucesso
    res.json({ success: true });
  } catch (error) {
    // Em caso de erro, envia uma resposta de erro com status 500
    res.status(500).json({ error: 'Erro ao deletar o post' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
