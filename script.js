function encrypt() {
    var inputText = document.getElementById("input").value;
    var encryptedText = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        encryptedText += String.fromCharCode(charCode + 1);
    }

    document.getElementById("output").value = encryptedText;
}

function decrypt() {
    var inputText = document.getElementById("input").value;
    var decryptedText = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        decryptedText += String.fromCharCode(charCode - 1);
    }

    document.getElementById("output").value = decryptedText;
}

