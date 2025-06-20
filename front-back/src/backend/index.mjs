import express from "express";
import cors from "cors";
import mysql from "mysql2";
import jwt from "jsonwebtoken";

const senhaJWT = "A21022006*"; // Senha para o JWT, deve ser mantida em segredo

// Configuração do servidor Express

const app = express();
app.use(cors());
app.use(express.json());

const porta = 3306;

// Conexão com o MySql
const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "A21022006*",
  database: "dripstore",
});

// Rotas com banco de dados
conexao.connect((erro) => {
  if (erro) {
    console.log(`Erro ao conectar com o banco: ${erro}`);
  } else {
    console.log("Banco conectado com sucesso!");
  }
});

// Rota de autenticação

function autenticarUsuario(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ msg: "Token não fornecido" });
  }

  try {
    const usuario = jwt.verify(token, senhaJWT);
    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(403).json({ msg: "Token inválido" });
  }
}
// Rota de login
app.post(
  "/login",
  (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ msg: "Email e senha são obrigatórios" });
    }

    const query = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
    conexao.query(query, [email, senha], (erro, resultados) => {
      if (erro) {
        return res
          .status(500)
          .json({ msg: "Erro ao consultar o banco de dados" });
      }

      if (resultados.length === 0) {
        return res.status(401).json({ msg: "Email ou senha inválidos" });
      }

      const usuario = resultados[0];
      const token = jwt.sign({ id: usuario.id }, senhaJWT, { expiresIn: "1h" });

      res.json({ token });
    });
  },

  // Rota protegida

  app.get("/protegida", autenticarUsuario, (req, res) => {
    res.json({
      msg: "Rota protegida acessada com sucesso!",
      usuario: req.usuario,
    });
  })
);

// Rota para obter todos os produtos
app.get("/produtos", (req, res) => {
  const query = "SELECT * FROM produtos";
  conexao.query(query, (erro, resultados) => {
    if (erro) {
      return res
        .status(500)
        .json({ msg: "Erro ao consultar o banco de dados" });
    }
    res.json(resultados);
  });
});
// Rota para obter um produto específico
app.get("/produtos/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM produtos WHERE id = ?";
  conexao.query(query, [id], (erro, resultados) => {
    if (erro) {
      return res
        .status(500)
        .json({ msg: "Erro ao consultar o banco de dados" });
    }
    if (resultados.length === 0) {
      return res.status(404).json({ msg: "Produto não encontrado" });
    }
    res.json(resultados[0]);
  });
});

app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

app.listen(porta, () => {
  console.log(`O servidor está rodando na porta ${porta}`);
});
