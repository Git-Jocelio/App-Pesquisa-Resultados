# 🎰 MegaSena - Consulta de Resultados

Aplicação Full Stack desenvolvida para consulta de resultados da Mega-Sena. Este projeto foi construído com foco em **boas práticas de desenvolvimento**, utilizando uma arquitetura organizada, tipagem estática e persistência de dados em um banco de dados relacional.

---

## 🚀 Tecnologias e Ferramentas

### **Backend (Servidor)**
* **Runtime:** Node.js
* **Framework:** Express
* **Linguagem:** TypeScript / JavaScript (ES6+)
* **Banco de Dados:** PostgreSQL
* **Gerenciamento de Banco:** pgAdmin 4
* **Driver de Conexão:** `pg` (node-postgres) com suporte a **Connection Pool**
* **Segurança:** CORS (Cross-Origin Resource Sharing)

### **Frontend (Interface)**
* **Biblioteca:** React 19
* **Linguagem:** TypeScript
* **Consumo de API:** Axios
* **Gerenciamento de Estado:** React Hooks (`useState`, `useEffect`, `useCallback`)

---

## 🏗️ Arquitetura do Sistema

O backend segue o padrão de arquitetura em camadas inspirado no **MVC (Model-View-Controller)**, garantindo que o código seja escalável e fácil de manter:

* **Models:** Camada de acesso a dados. Contém as queries SQL e a lógica de comunicação com o PostgreSQL.
* **Controllers:** Responsáveis por receber as requisições HTTP, processar a lógica de negócio e enviar a resposta ao cliente.
* **Routes:** Define os endpoints da API (ex: `/api/resultados`).
* **Database Config:** Centraliza a configuração do `Pool` de conexões para otimizar a performance do banco.

---

## 🛠️ Configuração e Instalação

### **1. Banco de Dados (PostgreSQL)**
1.  Abra o **pgAdmin** ou seu terminal SQL.
2.  Crie um banco de dados chamado `megasena`.
3.  Execute o script abaixo para criar a tabela de resultados:

```sql
• Comando SQL para criar a tabela no SGBD PostgreSQL
DROP TABLE IF EXISTS megasena;
CREATE TABLE megasena (
concurso INTEGER NOT NULL,
data_do_sorteio DATE NOT NULL,
bola1 INTEGER NOT NULL,
bola2 INTEGER NOT NULL,
bola3 INTEGER NOT NULL,
bola4 INTEGER NOT NULL,
bola5 INTEGER NOT NULL,
bola6 INTEGER NOT NULL,
ganhadores_6_acertos INTEGER NOT NULL,
cidade_uf VARCHAR(510) NULL,
rateio_6_acertos DECIMAL NOT NULL,
ganhadores_5_acertos INTEGER NOT NULL,
rateio_5_acertos DECIMAL NOT NULL,
ganhadores_4_acertos INTEGER NOT NULL,
rateio_4_acertos DECIMAL NOT NULL,
acumulado_6_acertos DECIMAL NOT NULL,
arrecadacao_total DECIMAL NOT NULL,
estimativa_premio DECIMAL NOT NULL,
acumulado_sorteio_especial_mega_da_virada DECIMAL NOT NULL,
observacao VARCHAR(255) NULL,
PRIMARY KEY(concurso)
);
• Comando para carregar o arquivo megasena.csv na tabela megasena do BD:
COPY megasena
FROM '/megasena.csv'
WITH (
FORMAT csv,
DELIMITER ';',
HEADER,
NULL 'NULL',
ENCODING 'UTF8'
);

