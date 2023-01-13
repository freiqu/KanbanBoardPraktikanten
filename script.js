
// function addItem() {
//     console.log("Hello, World!")
//     let input = document.getElementById("input");
//     appendChildren 
// }

function addItem(e) {
    let list = document.getElementById("todo");
    let input = document.getElementById("input");
    let inputValue = input.value;
    let person = input_person.value;
    let datum = input_datum.value;
    if (inputValue != "") {
        let listItem = document.createElement("div"); // <div></div>
        listItem.classList += "list-item"; // <div class="list-item"></div>
        listItem.innerHTML = "<b>Aufgabe:</b>" + inputValue + "<br>" + "<b>Person:</b>" + person + "<br>" + "<b>Datum:</b>" + datum; // <div class="list-item">test</div>
        let buttonItem = document.createElement("button");
        buttonItem.classList += 'button';
        buttonItem.innerHTML = "In Progress";
        let buttonItem_2 = document.createElement("button");
        buttonItem_2.classList += 'button';
        buttonItem_2.innerHTML = "Delete";
        // buttonItem.addEventListener("click", (ev) => {
        //     verschiebenNachInprogress(ev, listItem, buttonItem)
        // })
        listItem.append(buttonItem);
        listItem.append(buttonItem_2);
        input.value = "";
        input_person.value = "";
        input_datum.value = "";
        list.appendChild(listItem);
        buttonItem_2.addEventListener("click", (ev) => {
            list.removeChild(listItem);
        })
        buttonItem.addEventListener("click", (ev) => {
            verschiebenNachInprogress(ev, listItem, buttonItem, buttonItem_2)
        })
    }
}

function verschiebenNachInprogress(ev, listItem, buttonItem, buttonItem_2) {
    let list = document.getElementById("inprogress");
    list.appendChild(listItem);
    buttonItem.innerHTML = "Done";
    buttonItem_2.addEventListener("click", (ev) => {
        list.removeChild(listItem);
    })
    buttonItem.addEventListener("click", (evn) => {
        verschiebenNachDone(ev, listItem, buttonItem, buttonItem_2)
    })
}

function verschiebenNachDone(evn, listItem, buttonItem, buttonItem_2) {
    let list = document.getElementById("done");
    // listItem.removeChild(buttonItem_2);
    list.appendChild(listItem);
    buttonItem.innerHTML = "Delete";
    buttonItem.addEventListener("click", (e) => {
        list.removeChild(listItem);
    })
    buttonItem_2.addEventListener("click", (e) => {
        list.removeChild(listItem);
    })
}

function myFunction(){
input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      addItem();
    }
})}

function myFunction_2(){
input_person.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      addItem();
    }
})}

function myFunction_3(){
input_datum.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
          addItem();
    }
})}

// localStorage.setItem("inhalt", body);

// document.getElementById("body").innerHTML = localStorage.getItem("inhalt");