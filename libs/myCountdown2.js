
// Listener to form
document.getElementById("addTimer").addEventListener('submit', saveDate);

// Save date to LocalStorage
function saveDate(e){

    // Get form values
    var getDay = document.getElementById("day").value;
    var getMonth = document.getElementById("month").value;
    var getYear = document.getElementById("year").value;


    // Check requirements
    if (getDay == "" || getMonth == "" || getYear == ""){
        alert("Все поля даты обязаельны для заполнения");
    }


    //Create an object
    var date = {
        day: getDay,
        month: getMonth,
        year: getYear
    }

    // If timers array is not exist in LocalStorage
    if (localStorage.getItem('timers') === null){
        // Init array
        var timers = [];

        // Add to array
        timers.push(date);

        // Set to LocalStorage
        localStorage.setItem('timers', JSON.stringify(timers));
    }

    console.log(date);



    


    // Prevent form from submitting
    e.preventDefault();
}