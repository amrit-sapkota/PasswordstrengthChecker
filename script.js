document.getElementById("submit").onclick = function checkPassword() {
    const password = document.getElementById("password").value;
    const lowercase = /[a-z]/.test(password);
    const uppercase = /[A-Z]/.test(password);
    const number = /[0-9]/.test(password);
    const symbol = /[!+-=?#%*@&^$_]/.test(password);
    let strength;
  
    if (password.length < 8 || (lowercase + uppercase + number + symbol) < 3) {
      strength = "Entered password is poor!";
    } else if (password.length >= 8 && password.length <= 11 && (lowercase + uppercase + number + symbol) >= 3) {
      strength = "Entered password is moderate!";
    } else if (password.length > 11 && lowercase && uppercase && number && symbol) {
      strength = "Entered password is strong!";
    }
  
    document.getElementById("result").innerHTML = `${strength}`;
  }
  