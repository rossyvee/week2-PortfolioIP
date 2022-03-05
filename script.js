const DAYS = ["sunday" , "monday","tuesday","wednesday","thursday", "friday","saturday"];

const NAMES = {
    "male": {
        "sunday": "Kwasi",
        "monday": "Kwadwo",
        "tuesday": "Kwabena",
        "wednesday": "Kwaku",
        "thursday": "Yaw",
        "friday": "Kofi",
        "saturday": "Kwame"
        },
    "female": {
        "sunday": "Akosua",
        "monday": "Adwoa",
        "tuesday": "Abenaa",
        "wednesday": "Akua",
        "thursday": "Yaa",
        "friday": "Afua",
        "saturday": "Ama"
    }
}

let birthday = document.getElementById('birthday');
let gender = document.getElementById('gender');
let submitBtn = document.getElementById('submit-btn');
let results = document.getElementById("result-name");