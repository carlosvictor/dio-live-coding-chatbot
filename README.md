
## Live Coding - Instruções e auxílios para rodar o projeto

### 1) Para instalar o NodeJS
- [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) (Linux e Mac) - Mais fácil para gerenciar as versões do NodeJS na máquina
- [https://nodejs.org/en/](https://nodejs.org/en/) (Windows, Linux e Mac)

### 2) IDE para desenvolvimento
- [https://code.visualstudio.com/](https://code.visualstudio.com/)

### 3) NPM (Gerenciador de pacotes do NodeJS)
- [https://www.npmjs.com](https://www.npmjs.com)

### 4) Telegram
- [https://web.telegram.org/](https://web.telegram.org/)
#### Criando o bot
- Se inscreva no Telegram (Você pode usar o cliente web, desktop ou mobile)
- Abra o aplicativo ou acesse o website
- Pesquise por @BotFather e inicie a conversa
- Envie o comanndo /newbot e execute as instruções
- Armazene o token enviado pelo @BotFather (Vamos usá-lo no código)
### 5) Bibliotecas utilizadas no projeto
- [https://www.npmjs.com/package/youtube-node](https://www.npmjs.com/package/youtube-node) (Buscas no Youtube)
- [https://www.npmjs.com/package/dialogflow](https://www.npmjs.com/package/dialogflow) (Comunicação com o Dialogflow)
- [https://www.npmjs.com/package/node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api) (Comunicação com o Telegram)

### 6) Criando o fluxo de conversa no Dialogflow
- [https://dialogflow.com/](https://dialogflow.com/)
- Crie um novo agent
- Escolha um projeto já existente ou crie um projeto novo
- Clique na engrenagem para configurar o agent
- Clique no service id, você será redirecionado para o painel do GCP, clique nos 3 pontinhos abaixo de ações e crie uma chave to tipo json
- Após o download da chave, substitua o conteúdo do arquivo agent.json pelo conteúdo da sua chave
- Crie uma nova intenção chamada "Treino específico"
- Adicione frases de treinamento com algumas partes do corpo
- Defina entidades do tipo "corpo" e seus sinônimos

### 7) Para gerar credenciais
- [https://console.developers.google.com/start/api?id=youtube](https://console.developers.google.com/start/api?id=youtube) (Youtube)
- [https://console.cloud.google.com/iam-admin/serviceaccounts](https://console.cloud.google.com/iam-admin/serviceaccounts) (Dialogflow) Lembrar de ir na conta de serviço criada pelo Dialogflow e gerar seu arquivo json com as credenciais

### 8) Para rodar o projeto
- Efetuar o clone do repositório em uma pasta do sistema operacional
- Executar o comando `npm install` dentro da pasta raiz do projeto para baixar as dependências
- Substituir os arquivos de credenciais do agent e do youtube
- Executar o comando `npm start` dentro da pasta raiz do projeto para executar o código