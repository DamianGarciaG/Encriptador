function convert(type) {
    let input, output;
    if (type === 'encrypt') {
        input = document.getElementById('message').value;
        output = encrypt(input);
        document.getElementById('encryptedMessage').textContent = output;
    } else if (type === 'decrypt') {
        input = document.getElementById('encryptedText').value;
        output = decrypt(input);
        document.getElementById('decryptedMessage').textContent = output;
    }
}

function encrypt(message) {
    return message.replace(/a/g, 'ai')
                  .replace(/e/g, 'enter')
                  .replace(/i/g, 'imes')
                  .replace(/o/g, 'ober')
                  .replace(/u/g, 'ufat');
}

function decrypt(encryptedMessage) {
    return encryptedMessage.replace(/ufat/g, 'u')
                           .replace(/ober/g, 'o')
                           .replace(/imes/g, 'i')
                           .replace(/enter/g, 'e')
                           .replace(/ai/g, 'a');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.result').forEach(function(result) {
        result.addEventListener('click', function() {
            const range = document.createRange();
            range.selectNodeContents(this);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            alert('Texto copiado al portapapeles');
        });
    });
});
