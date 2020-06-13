// importando a biblioteca de api do youtube
const YouTube = require('youtube-node');

// importando as configurações para serem usadas pela biblioteca do youtube
const config = require('./configs/youtube.json');

// criando uma instância do youtube
const youtube = new YouTube();

// setando a key na instância do youtube para conseguirmos fazer as pesquisas
youtube.setKey(config.key);

// função para busca de vídeos
function searchVideoURL(message, queryText) {
  // encapsulando função de search em uma promise para conseguirmos retornar os resultados do callback
    return new Promise((resolve, _) => {
      // realizando a busca baseada na concatenação da sring e do queryText
        youtube.search(`Exercício em casa para ${queryText}`, 2, function(error, result) {
            if (error) {
              // caso ocorra algum erro essa mensagem será retornada
              // lembrem-se que a melhor prática seria rejeitar essa promise nesse ponto
              resolve('Não foi possível encontrar um vídeo no momento, por favor tente mais tarde');
            } else { 
              // gerando um array de videoIds
              const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);

              // gerando um array de links do youtube
              const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`).join(', ');

              // retornando a mensagem inicial concatenadas com os links do youtube para o arquivo index.js
              resolve(`${message} ${youtubeLinks}`);
            }
          });
    });
}

// exportando a função de busca de vídeos
module.exports.searchVideoURL = searchVideoURL;
