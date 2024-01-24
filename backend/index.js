const express = require("express");

const server = express();

server.use(express.json());

const produtos = [
  {
    id: 1,
    nome: "Pizza de Calabresa",
    valor: 39.9,
    descricao: "Pizza com molho de tomate, calabresa e cebola.",
    imagem:
      "https://guiadacozinha.com.br/wp-content/uploads/2019/10/pizza-liquidificador-receita-768x619.jpg",
    categoria: "Pizzas",
  },
  {
    id: 2,
    nome: "Pizza de Frango",
    valor: 44.9,
    descricao: "Pizza com molho de tomate, frango e catupiry.",
    imagem:
      "https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_333724454.jpg",
    categoria: "Pizzas",
  },
];

server.get("/produtos", (req, res) => {
  return res.json(produtos);
});

server.get("/produtos/:id", (req, res) => {
  const { id } = req.params;

  let produto = produtos.find((produto) => produto.id == id);

  return res.json(produto);
});

server.listen(3000);
