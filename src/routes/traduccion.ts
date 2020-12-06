import { Router } from 'express';
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const traduction = Router();

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

traduction.post('/', async (request, response)=>{
  const languageTranslator =  new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
        apikey: 'vCsQKycNTdlgFCM32gfZhfGic0YOkLd91CkXxwTRRh3B',
    }),
    serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/7eec1096-fc00-4d9d-9314-3748a3a7c020',
  });
  const {text} = request.body;
    const translateParams = {
    text: text,
    modelId: 'pt-en',
    };
      var valor: string;
      await languageTranslator.translate(translateParams, async function(){
        await sleep(5000);
     })
          .then(translationResult => {
             valor = translationResult.result.translations[0].translation;
              return response.status(200).json({"traduction": `${valor}` });
    })
    .catch(err => {
        return response.status(404).json({"erro": "erro"});
    });

});

export default traduction;

