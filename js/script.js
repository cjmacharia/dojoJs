function addActivity() {

    var li = document.createElement("li");
    var add = document.getElementById("activity").value;

    li.append(add);
    if (add == "") {
        alert("the activity can not be blank");
    }
    else {
        document.getElementById("lists").append(li);
    }
}

function addFriend() {
    var li = document.createElement("li");
    var add = document.getElementById("friends").value;
    var tableRow = document.createElement("tr");
    var tableData = document.createElement("td");
    var tableData_check = document.createElement("td");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    tableRow.append(tableData);
    tableRow.append(tableData_check);


    tableData.append(add);
    tableData_check.append(checkbox);

    li.append(add);

    if (add == "") {
        alert("please add a friend ");
    }
    else {
        document.getElementById("myFriends").append(li);
        document.getElementById("table_friends").append(tableRow);
    }
}