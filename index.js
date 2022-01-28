var xmlDoc

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDoc = this.responseXML;
            showTable();
        }
    };
    xmlhttp.open("GET", "train.xml", true);
    xmlhttp.send();
}

function showTable() {
    var i;
    var table = "<tr><th>Train Name</th><th>Train Code</th><th>Start Station Name</th><th>Start Station Code</th><th>End station name</th><th>End Station Code</th><th>Engine operator</th></tr>";
    var x = xmlDoc.getElementsByTagName("train");
    for (i = 0; i < x.length; i++) {

        table += "<tr><td>" + x[i].getElementsByTagName("train_name")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("train_code")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("start_station_name")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("start_station_code")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("end_station_name")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("end_station_code")[0].childNodes[0].nodeValue +
            "</td><td>" + x[i].getElementsByTagName("emp_name")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }

    document.getElementById("table").innerHTML = table;
}


function deleteRecord() {
    var i = document.getElementById("indexToDel").value;
    y = xmlDoc.getElementsByTagName("train")[i];
    xmlDoc.documentElement.removeChild(y);
    showTable();
}

function addNewRecord() {
    var i
    var mTrain = []
    var x = document.getElementById("newRecForm")
    train = xmlDoc.createElement("train")
    mTrain[0] = xmlDoc.createElement("train_name")
    mTrain[1] = xmlDoc.createElement("train_code")
    mTrain[2] = xmlDoc.createElement("start_station_name")
    mTrain[3] = xmlDoc.createElement("start_station_code")
    mTrain[4] = xmlDoc.createElement("end_station_name")
    mTrain[5] = xmlDoc.createElement("end_station_code")
    mTrain[6] = xmlDoc.createElement("emp_name")
    for (i = 0; i < 7; i++) {
        mTrain[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        train.appendChild(mTrain[i])
    }
    xmlDoc.documentElement.appendChild(train);
    console.log("Record added: " + x.elements[0].value)
    showTable()
}

function initForm() {
    setInputFilter(document.getElementById("phoneField"), function(value) {
        return /^\d*?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    });
    setInputFilter(document.getElementById("nameField"), function(value) {
        return /^[A-Za-z]+$/.test(value); // Allow digits and '.' only, using a RegExp
    });

}


function testPassAndMail() {
    var pass1 = document.getElementById("passField1").value;
    var email = document.getElementById("emailField").value;
    var flag = false;
    if (pass1.match(/[a-z]/g) &&
        pass1.match(/[A-Z]/g) &&
        pass1.match(/[0-9]/g) &&
        pass1.match(/[^a-zA-Z\d]/g) &&
        pass1.match(/.[A-Z]|[0-9]|[$&+,:;=?@#|'<>.^*()%!-]./) &&
        pass1.length >= 8) {
        if (pass1 == document.getElementById("passField2").value) {
            flag = true;
        } else {
            window.alert("Passwords do not match");
            return;
        }
    } else {
        window.alert("Invalid password.\n Password must containa minimum of 1 lower case letter [a-z]\n" +
            "* a minimum of 1 upper case letter [A-Z]  \n" +
            "* a minimum of 1 numeric character [0-9]  \n" +
            "* at least 1 special charecter\n" +
            "And at least 1 upper case, numeric, and special character must be EMBEDDED somewhere in the middle of the password, and not just be the first or the last character of the password string.");
        return;
    }

    if (!email.match(/.*@christuniversity.in$/)) {
        flag = false;
    }
    if (flag) window.alert("success");
    else window.alert("Invalid Email");
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}