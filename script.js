
// function addItem() {
//     console.log("Hello, World!")
//     let input = document.getElementById("input");
//     appendChildren 
// }

function addItem(e) {
    let list = document.getElementById("todo");
    let input = document.getElementById("input");
    let inputValue = input.value;
    if (inputValue != "") {
        let listItem = document.createElement("div"); // <div></div>
        listItem.classList += "list-item"; // <div class="list-item"></div>
        listItem.innerHTML = inputValue; // <div class="list-item">test</div>
        let buttonItem = document.createElement("button");
        buttonItem.classList += 'button';
        buttonItem.innerHTML = "weiter";
        buttonItem.addEventListener("click", (ev) => {
            verschiebenNachInprogress(ev, inputValue, listItem, buttonItem)
        })
        listItem.append(buttonItem);
        input.value = "";
        list.appendChild(listItem);
    }
}

function verschiebenNachInprogress(ev, text, listItem, buttonItem) {
    console.log(text)
    let list = document.getElementById("inprogress");
    list.appendChild(listItem);
    buttonItem.addEventListener("click", (evn) => {
        verschiebenNachDone(ev, text, listItem, buttonItem)
    })
}

function verschiebenNachDone(evn, text, listItem, buttonItem) {
    let list = document.getElementById("done");
    list.appendChild(listItem);
    buttonItem.addEventListener("click", (e) => {
        list.removeChild(listItem);
    })
}

