// document 
const hr = document.querySelector(".hr"),
    min = document.querySelector(".min"),
    sec = document.querySelector(".sec");
change_color = document.querySelector("#change_color");

setInterval(() => {
    // degree
    const deg1 = 30,
        deg2 = 6;
    // geting the time
    const houre = new Date().getHours() * deg1,
        minute = new Date().getMinutes() * deg2,
        second = new Date().getSeconds() * deg2;

    // painting the time
    hr.style.transform = `rotateZ(${(houre)+ (minute/12)}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${second}deg)`;
});

// adding change color 

change_color.addEventListener('click', () => {

    if (change_color.value == "Light Mood") {
        change_color.value = "Dark Mood";
        document.body.style.backgroundColor = "#fff";
    } else {
        change_color.value = "Light Mood";
        document.body.style.backgroundColor = "#2f3542";
    }
});