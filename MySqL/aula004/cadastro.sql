-- Criação do banco de dados 'cadastro'
CREATE DATABASE cadastro
-- Define o conjunto de caracteres para 'utf8mb4' (que suporta emojis e caracteres especiais)
DEFAULT CHARACTER SET utf8mb4
-- Define a colação (ordem de comparação de caracteres) para 'utf8mb4_0900_ai_ci' (accent insensitive e case insensitive)
DEFAULT COLLATE utf8mb4_0900_ai_ci;

-- Seleciona o banco de dados 'cadastro' para ser usado nas operações subsequentes
USE cadastro;

CREATE TABLE pessoas (
	-- Coluna 'id' com incremento automático a cada novo registro
    id INT AUTO_INCREMENT,
    -- Coluna 'nome' do tipo texto com até 30 caracteres, não pode ser nula
    nome VARCHAR(30) NOT NULL,
    -- Coluna 'nascimento' para armazenar a data de nascimento
    nascimento DATE,
    -- Coluna 'sexo' que pode armazenar 'M' (masculino) ou 'F' (feminino)
    sexo ENUM('M', 'F'),
    -- Coluna 'peso' para armazenar números com até 5 dígitos no total e 2 casas decimais
    peso DECIMAL(5,2),
    -- Coluna 'altura' para armazenar números com até 3 dígitos no total e 2 casas decimais
    altura DECIMAL(3,2),
    -- Coluna 'pais' que armazena o nome do país, com valor padrão 'Brasil'
    pais VARCHAR(30) DEFAULT 'Brasil',
    -- Definindo a chave primária da tabela, sendo a coluna 'id'
    PRIMARY KEY (id)
)
-- Define o conjunto de caracteres da tabela como 'utf8mb4', para garantir compatibilidade com emojis e caracteres especiais
DEFAULT CHARSET = utf8mb4;