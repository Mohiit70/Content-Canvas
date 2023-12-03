function generateContent() {
    const platform = document.getElementById('platform').value;
    const predefinedPrompt = document.getElementById('predefinedPrompts').value;
    const generatedContent = 'Your generated content will be here.';

    document.getElementById('output').innerHTML = generatedContent;
}
