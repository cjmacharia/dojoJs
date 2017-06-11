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
    li.append(add);

    if (add == "") {
        alert("please add a friend ");
    }
    else {
        document.getElementById("myFriends").append(li);
    }
}