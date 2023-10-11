const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
const generateBtn = document.getElementById("generate-btn")

//FUNCTION FOR GENERATING RANDOM PASSWORD
function generatePasswords(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

//FUNCTION TO COPY RANDOM PASSWORD VIA COPY ICON
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

generateBtn.addEventListener('click', function() {
    const password1 = generatePasswords(15);
    const password2 = generatePasswords(15);

    passwordOne.innerHTML = `${password1} <i class="fa fa-copy" id="copy-password-one"></i>`;
    passwordTwo.innerHTML = `${password2} <i class="fa fa-copy" id="copy-password-two"></i>`;

    // Add event listener for copying password
    const copyIconOne = document.getElementById('copy-password-one');
    const copyIconTwo = document.getElementById('copy-password-two');

    copyIconOne.addEventListener('click', function() {
        copyToClipboard(password1);
        alert('Password 1 copied to clipboard!');
    });

    copyIconTwo.addEventListener('click', function() {
        copyToClipboard(password2);
        alert('Password 2 copied to clipboard!');
    });
});




