window.onload = () => {
    let myListItemNew = localStorage.getItem("inhaltAlt");
    //console.log(myListItemNew);
    let ort = document.getElementById("tabellenInhalt");
    ort.innerHTML = myListItemNew;
} 

window.onbeforeunload = () => {
    let inhalt = tabellenInhalt.innerHTML;
    localStorage.setItem("inhaltAlt", inhalt)
}

function addItem(e) {
    let list = document.getElementById("todo");
    let input = document.getElementById("input");
    let inputValue = input.value;
    // let person = input_person.value;
    // let datum = input_datum.value;
    if (inputValue != "") {
        let listItem = document.createElement("div"); // <div></div>
        listItem.classList += "list-item"; // <div class="list-item"></div>
        listItem.innerHTML = "<b>Aufgabe:</b>" + inputValue + "<br>";
        listItem.innerHTML += "<b>Person:</b>"
        
        let inputPerson = document.createElement("input");
        inputPerson.classList += "input_person";
        inputPerson.innerHTML = "type='text'";
        listItem.innerHTML += "<b>Datum:</b>"
        let inputDatum = document.createElement("input");
        inputPerson.classList += "input_datum";
        inputDatum.innerHTML = "type='text'";

        //listItem.innerHTML = "<b>Aufgabe:</b>" + inputValue + "<br>" + "<b>Person:</b>" + person + "<br>" + "<b>Datum:</b>" + datum; // <div class="list-item">test</div>
        let buttonItem = document.createElement("button");
        buttonItem.classList += 'button';
        buttonItem.innerHTML = "In Progress→";
        let buttonItem_2 = document.createElement("button");
        buttonItem_2.classList += 'button';
        buttonItem_2.innerHTML = "Delete 🗑️";
        listItem.appendChild(buttonItem);
        listItem.appendChild(buttonItem_2);
        input.value = "";
        //input_person.value = "";
        //input_datum.value = "";

        listItem.appendChild(inputPerson);
        listItem.appendChild(inputDatum);
        list.appendChild(listItem);
        //---------------
        // let myListItem = listItem.innerHTML;
        // console.log(myListItem);
        // localStorage.setItem("ListItem", myListItem);
        //---------------
        buttonItem_2.addEventListener("click", (ev) => {
            list.removeChild(listItem);
        })
        buttonItem.addEventListener("click", (ev) => {
            let inputPerson = document.getElementById("input_person").value;
            // let person = inputPerson.value;
            let inputDatum = document.getElementById("input_datum").value;
            // let datum = inputDatum.value;
            listItem.removeChild(buttonItem_2);
            verschiebenNachInprogress(ev, listItem, buttonItem, inputPerson, inputDatum, inputValue)
            // verschiebenNachInprogress(ev, listItem, buttonItem);
        })
    }
}

function verschiebenNachInprogress(ev, listItem, buttonItem, person, datum) {
    let list = document.getElementById("inprogress");
    let buttonItem_2 = document.createElement("button");
    buttonItem_2.classList += 'button';
    buttonItem_2.innerHTML = "Delete 🗑️";
    listItem.appendChild(buttonItem_2);
    listItem.innerHTML = "<b>Aufgabe:</b>" + inputValue + "<br>" + "<b>Person:</b>" + person + "<br>" + "<b>Datum:</b>" + datum;
    list.appendChild(listItem);
    buttonItem.innerHTML = "Done→";
    buttonItem_2.addEventListener("click", (ev) => {
        list.removeChild(listItem);
    })
    buttonItem.addEventListener("click", (evn) => {
        listItem.removeChild(buttonItem_2);
        verschiebenNachDone(ev, listItem, buttonItem)
    })
}

function verschiebenNachDone(evn, listItem, buttonItem) {
    let list = document.getElementById("done");
    // listItem.removeChild(buttonItem_2);
    list.appendChild(listItem);
    buttonItem.innerHTML = "Delete 🗑️";
    buttonItem.addEventListener("click", (e) => {
        // list.parentElement.remove(listItem);
        list.removeChild(listItem)
    })
}

function myFunction(){
input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      addItem();
    }
})}

// function myFunction_2(){
// input_person.addEventListener("keyup", (event) => {
//     if (event.keyCode === 13) {
//       addItem();
//     }
// })}

// function myFunction_3(){
// input_datum.addEventListener("keyup", (event) => {
//     if (event.keyCode === 13) {
//           addItem();
//     }
// })}

// localStorage.setItem("todo", "list-item");
// localStorage.getItem("todo");