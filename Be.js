let count = 1;

function addStudent() {

    let name = document.getElementById("name").value;
    let usn = document.getElementById("usn").value;
    let dept = document.getElementById("dept").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;

    if (name == "" || usn == "" || dept == "" || date == "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("tableBody");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = count;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = usn;
    row.insertCell(3).innerHTML = dept;
    row.insertCell(4).innerHTML = date;

    let statusCell = row.insertCell(5);
    statusCell.innerHTML = status;

    if (status == "Present") {
        statusCell.className = "present";
    } else {
        statusCell.className = "absent";
    }

    count++;

    document.getElementById("name").value = "";
    document.getElementById("usn").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("date").value = "";
}