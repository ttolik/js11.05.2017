var month = prompt("Enter name of a month");
var mo = month;
switch (mo) {
    case "January": {
        mo = 1;
        break
    }
    case "February": {
        mo = 2;
        break
    }
    case "March": {
        mo = 3;
        break
    }
    case "April": {
        mo = 4;
        break
    }
    case "May": {
        mo = 5;
        break
    }
    case "June": {
        mo = 6;
        break
    }
    case "July": {
        mo = 7;
        break
    }
    case "August": {
        mo = 8;
        break
    }
    case "September": {
        mo = 9;
        break
    }
    case "October": {
        mo = 10;
        break
    }
    case "November": {
        mo = 11;
        break
    }
    case "December": {
        mo = 12;
        break
    }
    default: {
        alert("You enter inccorect month");
        break
    }
        var question = confirm("You wanna continue ?");
}
alert(mo);