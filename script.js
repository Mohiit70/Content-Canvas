async function generateContent() {
    const platform = document.getElementById('platform').value;
    const promptType = document.getElementById('promptType').value;
    let prompt;

    if (promptType === 'predefined') {
        prompt = document.getElementById('predefinedPrompts').value;
    } else {
        prompt = document.getElementById('customPrompt').value;
    }

    const requestBody = {
        platform,
        prompt
    };

    try {
        const response = await fetch('http://localhost:3000/generate-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const generatedContent = data.generatedContent;

        document.getElementById('output').innerHTML = generatedContent;
    } catch (error) {
        console.error('Error:', error);
    }
}
