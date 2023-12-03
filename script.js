function togglePrompt() {
    const predefinedPromptSection = document.getElementById('predefinedPromptSection');
    const customPromptSection = document.getElementById('customPromptSection');
    const promptType = document.getElementById('promptType').value;

    if (promptType === 'predefined') {
        predefinedPromptSection.style.display = 'block';
        customPromptSection.style.display = 'none';
    } else {
        predefinedPromptSection.style.display = 'none';
        customPromptSection.style.display = 'block';
    }
}

function generateContent() {
    const platform = document.getElementById('platform').value;
    const promptType = document.getElementById('promptType').value;
    let prompt;

    if (promptType === 'predefined') {
        prompt = document.getElementById('predefinedPrompts').value;
    } else {
        prompt = document.getElementById('customPrompt').value;
    
    const generatedContent = 'Your generated content will be here.';

    document.getElementById('output').innerHTML = generatedContent;
}
