CREATE DATABASE dripstore;
USE dripstore;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL
);

CREATE TABLE clientes (
 id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    telefone VARCHAR(20)
);

INSERT INTO produtos (nome, preco, estoque) VALUES
('Tênis Nike Revolution 6 Nest Nature Masculino', 219.00,10),
('K-swiss V8 - Masculino', 219.00,15);

INSERT INTO clientes (nome, email, senha, telefone) VALUES
('Maria Silva', 'maria.silva@email.com', 'senha123','11999999999'),
('João Souza', 'joao.souza@email.com', 'joaosenha', '21988888888'),
('Ana Pereira', 'ana.pereira@email.com', 'ana2025', '31977777777');


SELECT * FROM clientes;
SELECT * FROM produtos;
