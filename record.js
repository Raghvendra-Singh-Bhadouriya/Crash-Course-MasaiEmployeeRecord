// fill in javascript code here
let form = document.querySelector("form");
let inputName = document.querySelector("#name");
let employeeid = document.querySelector("#employeeID");
let department = document.querySelector("#department");
let experience = document.querySelector("#exp");
let email = document.querySelector("#email")
let mbl = document.querySelector("#mbl");

let data = [];
function handleSubmit(e){
    e.preventDefault()
    let obj={
        Name:inputName.value,
        Id:employeeid.value,
        Department:department.value,
        Experience:experience.value,
        Email:email.value,
        Mobile:mbl.value,
    };
    data.push(obj);

    saveData()
    loadData()
    //showData(data)
    form.reset();
    
}
form.addEventListener("submit", handleSubmit)

/*=====================================Save Data=======================================*/
function saveData(){
    localStorage.setItem("data", JSON.stringify(data));
}

/*====================================Load Data========================================*/
function loadData(){
    let storedData = JSON.parse(localStorage.getItem("data"));
    if(storedData){
        showData(storedData);
    }
    else{
        console.log("Data not be saved")
    } 
}

/*====================================Show Data========================================*/
let tbody = document.querySelector("tbody");
function showData(data){
    tbody.innerHTML = "";
    data.forEach((detail,i) => {
        let tr = document.createElement("tr");
        tr.className="tablerow";
        tr.style.border = "2px solid black";

        let td1 = document.createElement("td");
        td1.textContent=detail.Name;

        let td2 = document.createElement("td");
        td2.textContent=detail.Id;
         
        let td3 = document.createElement("td");
        td3.textContent=detail.Department;

        let td4 = document.createElement("td");
        td4.textContent=detail.Experience;

        let td5 = document.createElement("td");
        td5.textContent=detail.Email;

        let td6 = document.createElement("td");
        td6.textContent=detail.Mobile;

        let td7 = document.createElement("td");
        //td7.textContent=detail.Experience;
        if(detail.Experience > 5){
            td7.textContent="Senior";
        }
        else if(detail.Experience > 2 && detail.Experience < 5){
            td7.textContent="Junior";
        }
        else if(detail.Experience <= 1){
            td7.textContent="Fresher"
        }

        let button = document.createElement("button");
        button.textContent="DELETE";
        button.className="btn"
        button.addEventListener("click",function(){
            handleDelete(i);
        })

        tr.append(td1, td2, td3, td4, td5, td6, td7, button)
        tbody.append(tr);
    })
}

/*=====================================Handle Delete======================================*/
function handleDelete(index){
    data.splice(index,1);

    saveData();
    loadData()
    showData(data);
}

loadData()

