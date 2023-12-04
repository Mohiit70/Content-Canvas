const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Set your GPT-4 API key here
const gptApiKey = "YOUR_GPT_API_KEY";

const openai = new OpenAI({ key: gptApiKey });

app.post('/generate-content', async (req, res) => {
    const { platform, prompt } = req.body;

    try {
        const gptResponse = await openai.complete({
            engine: 'text-davinci-002',
            prompt: prompt,
            max_tokens: 100
        });

        const generatedContent = gptResponse.data.choices[0].text.trim();

        res.json({ generatedContent });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
