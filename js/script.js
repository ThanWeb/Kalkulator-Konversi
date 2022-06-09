function convert(basis){
    let inputValue = document.querySelectorAll(".input-column")[basis-1].value;

    if(inputValue == ""){
        inputValue = 0;
        basis = 0;
        checkCharacter(basis);
    }

    let flag = 1;
    switch(basis) {
        case 1:
            for(let i = 0; i < inputValue.length; i++) {
                if(inputValue[i] >= 0 && inputValue[i] <= 1)
                    flag = flag * 1;
                else
                    flag = flag * 0;
            }
            break;

        case 2:
            for(let i = 0; i < inputValue.length; i++) {
                if(inputValue[i] >= 0 && inputValue[i] <= 9)
                    flag = flag * 1;
                else
                    flag = flag * 0;
            }
            break;

        case 3:
            for(let i = 0; i < inputValue.length; i++) {
                if(inputValue[i] >= 0 && inputValue[i] <= 7)
                    flag = flag * 1;
                else
                    flag = flag * 0;
            }
            break;

        case 4:
            for(let i = 0; i < inputValue.length; i++) {
                if(inputValue[i] >= 0 && inputValue[i] <= 9 || inputValue[i] == 'A' || inputValue[i] == 'B' || inputValue[i] == 'C' || inputValue[i] == 'D' || inputValue[i] == 'E' || inputValue[i] == 'F' || inputValue[i] == 'a' || inputValue[i] == 'b' || inputValue[i] == 'c' || inputValue[i] == 'd' || inputValue[i] == 'e' || inputValue[i] == 'f')
                    flag = flag * 1;
                else
                    flag = flag * 0;
            }
            break;
    }

    if(flag == 0)
        checkCharacter(basis);
    else{
        const allBasis = [2, 10, 8, 16];

        let binaryValue = parseInt(inputValue, allBasis[basis-1]).toString(2);
        let decimalValue = parseInt(inputValue, allBasis[basis-1]).toString(10);
        let octalValue = parseInt(inputValue, allBasis[basis-1]).toString(8);
        let hexadecimaValue = parseInt(inputValue, allBasis[basis-1]).toString(16);

        const allField = document.querySelectorAll(".input-column");

        allField[0].value = binaryValue;
        allField[1].value = decimalValue;
        allField[2].value = octalValue;
        allField[3].value = hexadecimaValue;
    }
}

function checkCharacter(id){
    const alertMessage = document.getElementById("alert");
    const binaryAlert = "Maaf, bilangan biner hanya mengakui karakter 0 dan 1";
    const DecimalAlert = "Maaf, bilangan desimal hanya mengakui karakter 0, 1, 2, 3, 4, 5, 6, 7, 8 dan 9";
    const OctalAlert = "Maaf, bilangan oktal hanya mengakui karakter 0, 1, 2, 3, 4, 5, 6 dan 7";
    const HexAlert = "Maaf, bilangan heksadesimal hanya mengakui karakter 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E dan F";

    if(id >= 1 && id <= 4)
        alertMessage.classList.remove("hidden");

    switch(id) {
        case 0:
            alertMessage.classList.add("hidden");
            break;

        case 1:
            alertMessage.innerHTML = binaryAlert;
            break;

        case 2:
            alertMessage.innerHTML = DecimalAlert;
            break;

        case 3:
            alertMessage.innerHTML = OctalAlert;
            break;

        case 4:
            alertMessage.innerHTML = HexAlert;
            break;
    }
}