function addActivity() {

    var li = document.createElement("li");
    var add = document.getElementById("activity").value;

    li.append(add);
    // var input = document.createElement("input");
    //
    // input.type = "checkbox";
    // p2.append("done?");

    if (add == "") {
        alert("the activity can not be blank");
    }
    else {
        document.getElementById("lists").append(li);
        document.getElementById("check").append(p2);
    }
}

