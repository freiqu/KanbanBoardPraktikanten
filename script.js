window.onload = () => {
    let myListItemNew = localStorage.getItem("inhaltAlt");

    let ort = document.getElementById("tabellenInhalt");
    if (myListItemNew != null && myListItemNew != "") {
        ort.innerHTML = myListItemNew;
    }

    let deleteButtons = document.getElementsByClassName("delete-button");
    let container = document.getElementsByClassName("list-item");
    let person = document.getElementsByClassName("input-person");
    let datum = document.getElementsByClassName("input-datum");
    let inputValue = document.getElementsByClassName("paragraph");

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", (ev) => {
            let button = ev.target;
            button.parentElement.parentElement.removeChild(button.parentElement);
        })
    }

    let verschiebenButtons = document.getElementsByClassName("button-nach-in-progress");

    for (let i = 0; i < verschiebenButtons.length; i++) {
        verschiebenButtons[i].addEventListener("click", (ev) => {
            //let right_container = ev.target.parentElement;
            console.log(Array.from(ev.target.parentElement.children))
            verschiebenNachInprogress(ev, ev.target.parentElement, ev.target,
                [].slice.call(ev.target.parentElement.children).find((child) => { return child.classList.contains("input-person") }).value, 
                [].slice.call(ev.target.parentElement.children).find((child) => { return child.classList.contains("input-datum") }).value, 
                [].slice.call(ev.target.parentElement.children).find((child) => { return child.classList.contains("aufgaben-paragraph") }).innerHTML)
        })
    }

    let verschiebenButtonsDone = document.getElementsByClassName("button-nach-done");

    let listItem_fuer_done = document.getElementsByClassName("list-item-in-progress")
    // for (let i = 0; i < verschiebenButtonsDone; i++) {
    //     verschiebenButtonsDone[i].addEventListener("click", (ev) => {
    //         verschiebenNachDone(evn, listItem_fuer_done[i])
    //     })
    // }
    for (let i = 0; i < verschiebenButtonsDone.length; i++) {
        verschiebenButtonsDone[i].addEventListener("click", (ev) => {
            //let right_container = ev.target.parentElement;
            // ev.target.parentElement.removeChild(buttonItem_2);
            // ev.target.parentElement.removeChild(buttonItem);
            verschiebenNachDone(ev, ev.target.parentElement)
        })
    }
}

window.onbeforeunload = () => {
    let inhalt = tabellenInhalt.innerHTML;
    if (inhalt != null && inhalt != "") {
        localStorage.setItem("inhaltAlt", inhalt);
    }
    else {
        localStorage.clear;
    }
}

function remove(list, listItem) {
    list.removeChild(listItem);
}

function addItem(e) {
    let list = document.getElementById("todo");
    let input = document.getElementById("input");
    let inputValue = input.value;
    inputValue.classList += "input-value";
    // let person = input_person.value;
    // let datum = input_datum.value;
    if (inputValue != "") {
        let listItem = document.createElement("div"); // <div></div>
        listItem.classList += "list-item"; // <div class="list-item"></div>
        //listItem.innerHTML = "<b>Aufgabe:</b>" + inputValue + "<br>";
        let paragraph = document.createElement("p");
        paragraph.classList += "aufgaben-paragraph";
        listItem.innerHTML += "<b>Aufgabe :</b>";
        paragraph.innerHTML = inputValue;
        listItem.appendChild(paragraph);
        listItem.innerHTML += "<b>Person👥:</b>";
        let inputPerson = document.createElement("input");
        inputPerson.classList += "input-person";
        inputPerson.innerHTML = "type='text'";
        listItem.innerHTML += "<b>Datum🗓:</b>";
        let inputDatum = document.createElement("input");
        inputDatum.classList += 'input-datum';
        inputDatum.innerHTML = "type='text'";

        //listItem.innerHTML = "<b>Aufgabe:</b>" + inputValue + "<br>" + "<b>Person:</b>" + person + "<br>" + "<b>Datum:</b>" + datum; // <div class="list-item">test</div>
        let buttonItem = document.createElement("button");
        buttonItem.classList += 'button-nach-in-progress';
        buttonItem.innerHTML = "In Progress→";
        let buttonItem_2 = document.createElement("button");
        buttonItem_2.classList += 'delete-button';
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
            buttonItem_2.parentElement.parentElement.removeChild(buttonItem_2.parentElement);
        })

        buttonItem.addEventListener("click", (ev) => {
            let inputPerson = document.getElementsByClassName("input-person");
            let person = inputPerson.value;
            let inputDatum = document.getElementsByClassName("input-datum");
            let datum = inputDatum.value;
            listItem.removeChild(buttonItem_2);
            verschiebenNachInprogress(ev, listItem, buttonItem, person, datum, inputValue)
        })
    }
}

function verschiebenNachInprogress(ev, listItem, buttonItem, person, datum, inputValue) {
    let list = document.getElementById("inprogress");
    let buttonItem_2 = document.createElement("button");
    buttonItem_2.classList += 'delete-button';
    buttonItem_2.innerHTML = "Delete 🗑️";
    listItem.innerHTML = "<b>Aufgabe:</b>" + inputValue + "<br>" + "<b>Person:</b>" + person + "<br>" + "<b>Datum:</b>" + datum;
    //listItem.innerHTML += "<br>" + "<b>Person:</b>" + person + "<br>" + "<b>Datum:</b>" + datum;
    buttonItem.classList = buttonItem.classList = 'button-nach-done';
    buttonItem.innerHTML = "Done→";
    listItem.classList = 'list-item-in-progress';
    listItem.appendChild(buttonItem);
    listItem.appendChild(buttonItem_2);
    list.appendChild(listItem);
    buttonItem_2.addEventListener("click", (ev) => {
        list.removeChild(listItem);
    })
    buttonItem.addEventListener("click", (evn) => {
        //listItem.removeChild(buttonItem_2);
        //listItem.removeChild(buttonItem);
        verschiebenNachDone(ev, listItem)
    })
}

function verschiebenNachDone(evn, listItem) {
    let list = document.getElementById("done");
    // listItem.removeChild(buttonItem_2);
    let buttonItem_2 = document.createElement("button");
    buttonItem_2.classList += 'delete-button';
    buttonItem_2.innerHTML = "Delete 🗑️";
    listItem.appendChild(buttonItem_2);
    list.appendChild(listItem);
    //buttonItem.innerHTML = "Delete 🗑️";
    buttonItem_2.addEventListener("click", (e) => {
        // list.parentElement.remove(listItem);
        list.removeChild(listItem)
    })
}

function myFunction() {
    input.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            addItem();
        }
    })
}

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