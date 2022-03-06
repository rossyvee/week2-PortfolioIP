const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const full_names = [
  {
    day: "sunday",
    gender: {
      male: "Kwasi",
      female: "Akosua",
    },
  },
  {
    day: "monday",
    gender: {
      male: "Kwadwo",
      female: "Adwoa",
    },
  },
  {
    day: "tuesday",
    gender: {
      male: "Kwabena",
      female: "Abenaa",
    },
  },
  {
    day: "wednesday",
    gender: {
      male: "Kwaku",
      female: "Akua",
    },
  },
  {
    day: "thursday",
    gender: {
      male: "Yaw",
      female: "Yaa",
    },
  },
  {
    day: "friday",
    gender: {
      male: "Kofi",
      female: "Afua",
    },
  },
  {
    day: "saturday",
    gender: {
      male: "Kwame",
      female: "Ama",
    },
  },
];

function getFullNames() {
  document.getElementById("result-name").innerHTML = "";
  document.getElementById("name-result").style.display = "none";
  const string_birthday = document.getElementById("birthday").value;

  const gender = document.getElementById("gender").value;

  let birthday = new Date(string_birthday);

  let day = birthday.getDay();

  let dayOfTheWeek = days[day].toLowerCase();

  console.log({ birthday, dayOfTheWeek });

  let arrLength = full_names.length;

  let akan_name = "";

  for (let index = 0; index < arrLength; index++) {
    const element = full_names[index];

    if (element.day == dayOfTheWeek) {
      if (gender == "male") {
        akan_name += element.gender.male;
      }

      if (gender == "female") {
        akan_name += element.gender.female;
      }

      console.log(element);
    }
  }

  document.getElementById("result-name").innerHTML = akan_name;
  document.getElementById("name-result").style.display = "block";

  console.log(`Akan warrior  : ${akan_name}`);
}
