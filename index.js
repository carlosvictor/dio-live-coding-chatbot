// importando a biblioteca de api do telegram 
const TelegramBot = require('node-telegram-bot-api');

// importando nosso arquivo que faz a chamada para o dialogflow
const dialogflow = require('./dialogflow');

// importando nosso módulo que faz a busca no youtube
const youtube = require('./youtube');

// token recebido pelo bot father
const token = 'COLOQUE O SEU TOKEN AQUI';

// nova instância do telegram
const bot = new TelegramBot(token, { polling: true });

// escuta mensagens enviadas pelos usuários
bot.on('message', async (msg) => {
    
    // id do chat do usuário
    const chatId = msg.chat.id;

    // resposta do dialogflow
    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

    // texto a partir da resposta do dialogflow
    let textResponse = dfResponse.text;
    
    // verifica a intenção a partir da resposta do dialogflow
    if (dfResponse.intent === 'Treino específico') {
        // modifica o texto para os dados retornados a partir da busca realizada no youtube
        // lembre-se que para acessar o campo corpo dentro de fields ele teve que ser definido como uma entidade no dialogflow
        textResponse = await youtube.searchVideoURL(textResponse, dfResponse.fields.corpo.stringValue);
    }
    
    // envio da mensagem para o usuário do telegram
    bot.sendMessage(chatId, textResponse);
});