var arrayNames = [];
adName();


function adName() {
    for (var i = 0; i < 2; i++) {

        var userName = prompt("Введите " + (i + 1) + " имя");
        if (!userName) {
            break;
        } else {
            arrayNames.push(userName);
        }
    }
    compareNames();
    return arrayNames;
}

function compareNames() {
    var userName = prompt("Введите имя пользователя");

    for (var i = 0; i < arrayNames.length; i++) {
        if (userName == arrayNames[i]) {
            alert(userName + ", вы успешно вошли.");
            return userName;
        } else {
            alert("нет такого пользователя.");
            return userName;
        }
    }
}
