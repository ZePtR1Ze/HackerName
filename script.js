function myFunction() {
    var parrafoNuevo = document.getElementById("nuevo");
    var input = document.getElementById("user-input").value.toLowerCase();
            
    var output = " ";
    
            for(i=0; i < input.length; i++) {
                if (input[i] === "a") {
                    output += 4;
                } else if (input[i] === "e") {
                    output += 3;
                } else if (input[i] === "i") {
                    output += 1;
                } else if (input[i] === "o") {
                    output += 0;
                } else {
                    output += input[i];
                }
            };

      alert("Your `hacker` name is: " + output);
    }