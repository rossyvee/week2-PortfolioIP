

const full_names = [
    {
        "day":"sunday",
        "gender":{
            "male":"Kwasi",
            "female":"Akosua"
        },
        "day":"monday",
        "gender":{
            "male":"Kwadwo",
            "female":"Adwoa"
        },
        "day":"tuesday",
        "gender":{
            "male":"Kwabena",
            "female":"Abenaa"
        },
        "day":"wednesday",
        "gender":{
            "male":"Kwaku",
            "female":"Akua"
        },
        "day":"thursday",
        "gender":{
            "male":"Yaw",
            "female":"Yaa"
        },
        "day":"friday",
        "gender":{
            "male":"Kofi",
            "female":"Afua"
        },
        "day":"saturday",
        "gender":{
            "male":"Kwame",
            "female":"Ama"
        }
    }
]

function getDayofTheWeek(century,year,month,day){
    return ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
}


function getFullNames(){

    const string_birthday =  document.getElementById("birthday").value;

    let birthday = new Date(string_birthday);


    let year = birthday.getFullYear();

    let month =  birthday.getMonth();

    let day = birthday.getDay();


    console.log(year)
    console.log(month)
    console.log(day)

    console.log({year,month,day})



    console.log(typeof birthday)

    console.log({birthday})

    console.log(birthday)
}

