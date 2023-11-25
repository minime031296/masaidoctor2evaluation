let form = document.querySelector("form");
let Name = document.getElementById("name");
let doctid = document.getElementById("doctor_id");
let specialize = document.getElementById("specialization");
let Experience = document.getElementById("experience");
let email = document.getElementById("email");
let cell = document.getElementById("mobile"); 
let tbody = document.querySelector("tbody");

let Data = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let obj = {
        NAME: Name.value,
        DOCID: doctid.value,
        SPZ: specialize.value,
        EXP: Experience.value,
        EMAIL: email.value,
        CELL: cell.value,
    };

    Data.push(obj);
    console.log(Data);

    tbody.innerHTML = null;

    Data.forEach((ele) => {
        let row = document.createElement("tr");

        let tName = document.createElement("td");
        tName.textContent = ele.NAME;
        row.appendChild(tName);

        let tDoctorID = document.createElement("td");
        tDoctorID.textContent = ele.DOCID;
        row.appendChild(tDoctorID);

        let tSpecial = document.createElement("td");
        tSpecial.textContent = ele.SPZ;
        row.appendChild(tSpecial);

        let tExp = document.createElement("td");
        tExp.textContent = ele.EXP;
        row.appendChild(tExp);

        let tEmail = document.createElement("td");
        tEmail.textContent = ele.EMAIL;
        row.appendChild(tEmail);

        let tMobile = document.createElement("td");
        tMobile.textContent = ele.CELL; 
        row.appendChild(tMobile);

        let tRole = document.createElement("td");
        if (ele.EXP > 5) {
            tRole.textContent = "Senior";
        } else if (ele.EXP >= 2 && ele.EXP <= 5) {
            tRole.textContent = "Junior";
        } else if (ele.EXP <= 1) {
            tRole.textContent = "Fresher";
        }
        row.appendChild(tRole);

        let tDelete = document.createElement("td");
        let dBtn = document.createElement("button");
        dBtn.innerText = "DELETE";
        dBtn.addEventListener("click", function () {
            let index = Data.indexOf(ele);
            Data.splice(index, 1);
            row.remove();
            dBtn.style.backgroundColor = "red";
        });
        tDelete.appendChild(dBtn);
        row.appendChild(tDelete);

        tbody.appendChild(row);
    });
});

