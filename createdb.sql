CREATE TABLE IF NOT EXISTS usuario (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS atividade (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT NOT NULL,
  data DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS usuario_atividade (
  usuario_id INTEGER NOT NULL,
  atividade_id INTEGER NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuario(id),
  FOREIGN KEY (atividade_id) REFERENCES atividade(id)
);