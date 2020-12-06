import { Router } from 'express';

const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const traduction = Router();

var subscriptionKey = "df94334950dc4824899e0bfc1e928833";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "brazilsouth";

traduction.post('/', async (request, res)=>{
  const {text} = request.body;

axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        'from': 'pt',
        'to': ['en']
    },
    data: [{
        'text': text
    }],
    responseType: 'json'
}).then(function(response){
    console.log(JSON.stringify(response.data, null, 4));
    console.log("PPPPP" + response.data);
    return res.status(200).json(response.data);
})

});
export default traduction;
