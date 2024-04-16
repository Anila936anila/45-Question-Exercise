// Please dont change line 3 to 8. (Anila)

let  personName: string = "Anila Hunain";

let lowercaseName = personName.toLowerCase();
let uppercaseName = personName.toUpperCase();

let word: string[] =personName.split(' ');

let titlecaseName: string = ""

for (let i = 0; i <word.length; i++) { 
    titlecaseName += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " "
   };

    console.log(lowercaseName);
    console.log(uppercaseName);
    console.log(titlecaseName);


