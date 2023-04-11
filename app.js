let getSaveBtn = document.getElementById("btn-for-save");
let getInp = document.getElementById("form1");
let getTabbody = document.getElementById("table-body-id");
let listsNumbers = 1;
let getTr = document.getElementsByTagName("tr");


let getForm = document.getElementById("form-id1");
let getTh = document.getElementsByClassName("th-class");
let getTrClass1 = document.getElementsByClassName("tr-class")


let getTd1 = document.getElementsByClassName("td1-class");
let getTd2 = document.getElementsByClassName("td2-class");
let getTd3 = document.getElementsByClassName("td3-class");


let something1;
let something2;
let something3;
let something4;


if (localStorage.getItem("Numbers") === null) {

    something1 = [];

} else {

    something1 = JSON.parse(localStorage.getItem("Numbers"));

}

if (localStorage.getItem("Todo Items") === null) {

    something2 = [];

} else {

    something2 = JSON.parse(localStorage.getItem("Todo Items"));

}

if (localStorage.getItem("Status") === null) {

    something3 = [];

} else {

    something3 = JSON.parse(localStorage.getItem("Status"));

}

if (localStorage.getItem("Actions") === null) {

    something4 = [];

} else {

    something4 = JSON.parse(localStorage.getItem("Actions"));

};


getSaveBtn.onclick = () => {

    if (getInp.value.length < 1) {

        alert("Please add something in input field");

    }
    else if (getInp.value.length <= 1) {

        alert("input field must be required 2 chracters");

    } else {

        let createElemForTr1 = document.createElement("tr");
        let createElemForTh1 = document.createElement("th");
        let createElemForTd1 = document.createElement("td");
        let createElemForTd2 = document.createElement("td");
        let createElemForTd3 = document.createElement("td");
        let createBtnForFinish1 = document.createElement("button");
        let createBtnForDelete1 = document.createElement("button");

        createElemForTr1.setAttribute("class", "tr-class");


        // work on table rows
        getTabbody.appendChild(createElemForTr1);

        createElemForTr1.appendChild(createElemForTh1);
        createElemForTr1.appendChild(createElemForTd1);
        createElemForTr1.appendChild(createElemForTd2);
        createElemForTr1.appendChild(createElemForTd3);

        createElemForTd1.setAttribute("class", "class1 class2 td1-class");
        createElemForTd2.setAttribute("class", "td2-class");
        createElemForTd3.setAttribute("class", "td3-class");


        // work on td and th nodes
        createElemForTh1.setAttribute("scope", "row");
        createElemForTh1.setAttribute("class", "th-class");

        let createThNode = document.createTextNode(listsNumbers);
        createElemForTh1.appendChild(createThNode);

        let createTd1Node = document.createTextNode(getInp.value);
        createElemForTd1.appendChild(createTd1Node);

        let createTd2Node = document.createTextNode("In Progress");
        createElemForTd2.appendChild(createTd2Node);


        // work on buttons
        createElemForTd3.appendChild(createBtnForDelete1);
        createElemForTd3.appendChild(createBtnForFinish1);

        createBtnForFinish1.setAttribute("class", "btn btn-success ms-1");
        createBtnForFinish1.setAttribute("onclick", "finishBtn(this)");


        createBtnForDelete1.setAttribute("class", "btn btn-danger");
        createBtnForDelete1.setAttribute("onclick", "deleteBtn(this)");

        let createDelBtnNodeVal1 = document.createTextNode("Delete");
        let createFiniBtnNodeVal1 = document.createTextNode("Finish");

        createBtnForDelete1.appendChild(createDelBtnNodeVal1);
        createBtnForFinish1.appendChild(createFiniBtnNodeVal1);


        // work on localStorage
        something1.push(listsNumbers);
        something2.push(createElemForTd1.innerText);
        something3.push(createElemForTd2.innerText);
        something4.push(createElemForTd3.innerText);


        localStorage.setItem("Numbers", JSON.stringify(something1));
        localStorage.setItem("Todo Items", JSON.stringify(something2));
        localStorage.setItem("Status", JSON.stringify(something3));
        localStorage.setItem("Actions", JSON.stringify(something4));


        getInp.value = "";

        listsNumbers += 1;

    };

};


let jsonParse1 = JSON.parse(localStorage.getItem("Numbers"));
let largest = jsonParse1[0];

for (let i = 0; i < jsonParse1.length; i++) {

    if (largest < jsonParse1[i]) {

        largest = jsonParse1[i];

    }

};

console.log("This is largest", largest);
listsNumbers = largest + 1;


// delete and finished btn work
function deleteBtn(e) {

    let getNumbFromLocaStor = JSON.parse(localStorage.getItem("Numbers"));

    e.parentElement.parentElement.remove();

    newArr1ForLocalStorNumb = [];
    newArr2ForLocalStorTodoItems = [];
    newArr3ForLocalStorStatus = [];
    newArr4ForLocalStorActions = [];


    something1 = [];
    something2 = [];
    something3 = [];
    something4 = [];


    for (let i = 0; i < getNumbFromLocaStor.length; i++) {

        something1.push(+getTh[i].innerText);
        something2.push(getTd1[i].innerText);
        something3.push(getTd2[i].innerText);
        something4.push(getTd3[i].innerText);


        localStorage.setItem("Numbers", JSON.stringify(something1));
        localStorage.setItem("Todo Items", JSON.stringify(something2));
        localStorage.setItem("Status", JSON.stringify(something3));
        localStorage.setItem("Actions", JSON.stringify(something4));

    };

}


function finishBtn(e) {

    console.log(e.parentElement.parentElement);

    console.log(e.parentElement.previousElementSibling.innerText);


    if (e.parentElement.previousElementSibling.innerText == "In Progress") {

        e.parentElement.previousElementSibling.innerText = "Finished";

    } else {

        e.parentElement.previousElementSibling.innerText = "In Progress";

    }

    e.parentElement.parentElement.classList.toggle("class2");

};


let setItems1 = JSON.parse(localStorage.getItem("Numbers"));

for (let i = 0; i < setItems1.length; i++) {
    const element1 = setItems1[i];
    console.log(element1);



    let createTr1ForLocaStor = document.createElement("tr");

    createTr1ForLocaStor.setAttribute("class", "tr-class");

    let createTh1ForLocaStor = document.createElement("th");
    createTr1ForLocaStor.appendChild(createTh1ForLocaStor);

    createTh1ForLocaStor.setAttribute("class", "th-class");
    createTh1ForLocaStor.setAttribute("scope", "row");

    let createTh1TextNode = document.createTextNode(setItems1[i]);
    createTh1ForLocaStor.appendChild(createTh1TextNode);

    getTabbody.appendChild(createTr1ForLocaStor);


};


let getTr1 = document.getElementsByClassName("tr-class");


let setItems2 = JSON.parse(localStorage.getItem("Todo Items"));

for (let j = 0; j < setItems2.length; j++) {
    const element2 = setItems2[j];
    console.log(element2);

    let createTd1ForLocaStor = document.createElement("td");
    let createTd1TextNode = document.createTextNode(setItems2[j]);

    createTd1ForLocaStor.setAttribute("class", "class1 class2 td1-class");

    createTd1ForLocaStor.appendChild(createTd1TextNode);

    getTr1[j].appendChild(createTd1ForLocaStor);

};


let setItems3 = JSON.parse(localStorage.getItem("Status"));

for (let k = 0; k < setItems3.length; k++) {

    let createTd2ForLocaStor = document.createElement("td");
    let createTd2TextNode = document.createTextNode(setItems3[k]);

    createTd2ForLocaStor.setAttribute("class", "td2-class");

    createTd2ForLocaStor.appendChild(createTd2TextNode);

    getTr1[k].appendChild(createTd2ForLocaStor);

}


let setItems4 = JSON.parse(localStorage.getItem("Actions"));

for (let l = 0; l < getTr1.length; l++) {

    let createTd3ForLocaStor = document.createElement("td");


    let createBtnForDelete2 = document.createElement("button");
    let createTxtNodeForDel2Btn = document.createTextNode('Delete');
    createBtnForDelete2.appendChild(createTxtNodeForDel2Btn);

    createBtnForDelete2.setAttribute("class", "btn btn-danger");
    createBtnForDelete2.setAttribute("onclick", "deleteBtn(this)");

    createTd3ForLocaStor.appendChild(createBtnForDelete2);

    createTd3ForLocaStor.setAttribute("class", "td3-class");

    let createBtnForFinish2 = document.createElement("button");
    let createTxtNodeForFiniBtn2 = document.createTextNode("Finish");
    createBtnForFinish2.appendChild(createTxtNodeForFiniBtn2);

    createBtnForFinish2.setAttribute("class", "btn btn-success ms-1");
    createBtnForFinish2.setAttribute("onclick", "finishBtn(this)");

    createTd3ForLocaStor.appendChild(createBtnForFinish2);

    getTr1[l].appendChild(createTd3ForLocaStor);

};






// if (localStorage.getItem("something") == null) {

//     localStorage.setItem("something", '[]');

// }

// let store1 = JSON.parse(localStorage.getItem("something"));
// store1.push("Hello");
// store1.push("Hello World!");

// localStorage.setItem("something", JSON.stringify(store1));

// console.log(store1);

// for (let i = 0; i < store1.length; i++) {

//     console.log((store1[i]));

// };






// let arr5 = [];
// arr5.push(1);
// arr5.push("Hello");
// arr5.push("In Progress");
// arr5.push("DeleteFinish");
// // arr5.push("Finish");

// localStorage.setItem("something", JSON.stringify(arr5));

// for (let i = 0; i < arr5.length; i++) {

//     console.log(arr5[i]);






//     let createTrForLocaStor = document.createElement("tr");
//     let createTdForLocaStor = document.createElement("td");
//     createTrForLocaStor.appendChild(createTdForLocaStor);

//     let createTdTextNode = document.createTextNode(arr5[0]);
//     createTdForLocaStor.appendChild(createTdTextNode);


//     getTabbody.appendChild(createTrForLocaStor);



// };






// let something1;
// if (localStorage.getItem("Numbers" === null)) {

//     something1 = [];
//     // something2 = [];
//     // something3 = [];
//     // something4 = [];
//     something1.push(listsNumbers);

// } else {
//     something1 = JSON.parse(localStorage.getItem("Numbers"));
//     // something1.push(listsNumbers);
// }


// // something2.push(createElemForTd1.innerText);
// // something2.push(createElemForTd2.innerText);
// // something2.push(createElemForTd3.innerText);



// localStorage.setItem("Numbers", JSON.stringify(something1));
// // localStorage.setItem("Todo Items", JSON.stringify(something2));
// // localStorage.setItem("Status", JSON.stringify(something3));
// // localStorage.setItem("Actions", JSON.stringify(something4));
// console.log(localStorage.getItem("Numbers"));