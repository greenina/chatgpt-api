import { userAgent } from 'next/server';
const axios = require('axios');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


export default async function handler(req, res) {
  console.log("executed");
  // console.log("req.body.userInput");
  let userInput = req.body.userInput;
  const url = "https://api.openai.com/v1/completions"
  const response = await axios.post(url, {
    model: "text-davinci-003",
    prompt: userInput,
    max_tokens: 100,
    n:1,
    stop: null,
    temperature: 1.0,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    }
  })
  console.log("-----");
  console.log("RES: ", response.data.choices[0].text);

  res.status(200).json({result: response.data.choices[0].text});
}


