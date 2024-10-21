function generatePassword() {
    let passwordLength = document.getElementById('passwordLength').value;
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    
    do {
        let randomChar = characters[Math.floor(Math.random() * characters.length)];
        password += randomChar;
    } while (password.length < passwordLength);

    document.getElementById('passwordResult').innerHTML = `Generated Password: ${password}`;
}
