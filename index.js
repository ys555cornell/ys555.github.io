const generateButton = document.getElementById('generate-button');
const sentenceDiv = document.getElementById('sentence');

function generateSentence() {
    fetch('gx.json')
      .then(response => response.json())
      .then(data => {
        const noun = data.nouns[Math.floor(Math.random() * data.nouns.length)];
        const verb = data.verbs[Math.floor(Math.random() * data.verbs.length)];
        const adjective = data.adjectives[Math.floor(Math.random() * data.adjectives.length)];
        sentenceDiv.innerHTML = `${noun}${verb}${adjective}`;
      });
  }

generateButton.addEventListener('click', generateSentence);
