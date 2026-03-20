function checkEmail() {
    let text = document.getElementById("emailText").value.toLowerCase();
    let score = 0;

    let keywords = ["urgent", "verify", "click here", "password", "bank", "login"];
    keywords.forEach(word => {
        if (text.includes(word)) score++;
    });

    if (text.includes("http://")) score += 2;

    if ((text.match(/!/g) || []).length > 3) score++;

    if (text === text.toUpperCase() && text.length > 20) score++;

    let resultText = "";
    let color = "";

    if (score <= 1) {
        resultText = "✅ Safe Email";
        color = "green";
    } else if (score <= 3) {
        resultText = "⚠️ Suspicious Email";
        color = "orange";
    } else {
        resultText = "🚨 Likely Phishing Email";
        color = "red";
    }

    let resultElement = document.getElementById("result");
    resultElement.innerText = resultText;
    resultElement.style.color = color;
}
