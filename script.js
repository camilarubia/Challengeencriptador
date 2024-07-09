document.addEventListener('DOMContentLoaded', (event) => {
  const textarea = document.querySelector('textarea');
  const encryptBtn = document.getElementById('encrypt-btn');
  const decryptBtn = document.getElementById('decrypt-btn');
  const outputSection = document.querySelector('.output-section .card');
  const outputTitle = outputSection.querySelector('h2');
  const outputText = outputSection.querySelector('p');
  const outputImage = outputSection.querySelector('img');
  const copyBtn = document.getElementById('copy-btn');

  const encryptionKeys = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
  };

  const decryptKeys = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
  };

  const encrypt = (text) => {
      return text.replace(/[eioua]/g, (match) => encryptionKeys[match]);
  };

  const decrypt = (text) => {
      return text.replace(/enter|imes|ai|ober|ufat/g, (match) => decryptKeys[match]);
  };

  const updateOutput = (text) => {
      if (text && text.trim() !== '') {
          outputTitle.textContent = "Mensaje procesado";
          outputText.textContent = text;
          outputImage.style.display = 'none';
          copyBtn.style.display = 'block';
      } else {
          resetOutput();
      }
  };

  const resetOutput = () => {
      outputTitle.textContent = "Ningún mensaje fue encontrado";
      outputText.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
      outputImage.style.display = 'block';
      copyBtn.style.display = 'none';
  };

  const copyToClipboard = () => {
      const textToCopy = outputText.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
          // Opcional: Mostrar algún feedback al usuario
      }).catch((err) => {
          console.error('Error al copiar el texto: ', err);
      });
  };

  encryptBtn.addEventListener('click', () => {
      const text = textarea.value.trim();
      if (text) {
          const encryptedText = encrypt(text);
          updateOutput(encryptedText);
      } else {
          resetOutput();
      }
  });

  decryptBtn.addEventListener('click', () => {
      const text = textarea.value.trim();
      if (text) {
          const decryptedText = decrypt(text);
          updateOutput(decryptedText);
      } else {
          resetOutput();
      }
  });

  copyBtn.addEventListener('click', copyToClipboard);
});
