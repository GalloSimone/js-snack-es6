/**Snack 2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


const squadre =
[
    {name: "teamOne",
    falliSubiti:0,
     punti:0 
    },
    {name: "teamTwo",
    falliSubiti :0, 
     punti:0   
    },
    {name: "teamThree",
     falliSubiti:0, 
     punti:0   
    },
    {name: "teamFour",
    falliSubiti:0,
     punti:0 
    },
    {name: "teamFive",
     falliSubiti:0,
     punti:0
    }
    ]

        
function generateRandomNumbers(min, max){
    let randomNumber =Math.floor(Math.random() * (max - min +1)+ min);
    return randomNumber;
 }



 for (let i =0 ; i < squadre.length ; i++){
     singleTeam = squadre[i];
     singleTeam.falliSubiti= generateRandomNumbers(0,10);
     singleTeam.punti=generateRandomNumbers(5,30);
 }


 const result =[];
for (let i =0 ; i < squadre.length ; i++){
    singleTeam = squadre[i];
    delete singleTeam.punti;
    result.push (singleTeam) ;
}
console.log(result);

 