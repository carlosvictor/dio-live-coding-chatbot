// importando a biblioteca do dialogflow
const dialogflow = require('dialogflow');

// importando o arquivo contendo as configs do dialogflow
const configs = require('./configs/agent.json');

// criando uma sessão para a aplicação de acordo com as credenciais
const sessionClient = new dialogflow.SessionsClient({
    projectId: configs.project_id,
    credentials: { private_key: configs.private_key, client_email: configs.client_email }
});

// funcao para encapsular o envio de mensagens do telegram para o dialogflow
async function sendMessage(chatId, message) {
    // criando ou recuperando a sessão do usuário
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);

    // objeto para montar o request para o dialogflow
    const request = {
        session: sessionPath,
        queryInput: {}
    };

    // request para tipo texto
    const textQueryInput = { text: { text: message, languageCode: 'pt-BR' } };

    // request para tipo evento
    const eventQueryInput = { event: { name: 'start', languageCode: 'pt-BR' } }

    // verificando se a mensagem enviada foi um start caso seja monta um evento chamando a action 'start'
    // lembrem-se que essa action precisa estar cadastrada no dialogflow para conseguirmos chamá-la
    request.queryInput = message === '/start' ?  eventQueryInput : textQueryInput;

    // respostas da requisição para o dialogflow
    const responses = await sessionClient.detectIntent(request);

    // resultado da resposta do dialogflow
    const result = responses[0].queryResult;

    // retornando objeto para ser utilizado no arquivo index.js
    return { text: result.fulfillmentText, intent: result.intent.displayName, fields: result.parameters.fields };
}

// exportando a função sendMessage
module.exports.sendMessage = sendMessage