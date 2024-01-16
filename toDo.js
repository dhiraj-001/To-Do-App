let ToDoList = [{iteam: 'buy Milk', dueDate: '30-2-2023'},{iteam: 'buy apple', dueDate: '30-2-2023'}];
displayIteams();
function AddtoDo() {
    let inputElement = document.querySelector("#ToDoInput");
    let dateElement = document.querySelector("#ToDo-Date");
    let ToDoiteam = inputElement.value;
    let ToDoDate = dateElement.value;
    ToDoList.push({iteam: ToDoiteam, dueDate:ToDoDate});
    inputElement.value = "";
    dateElement.value = '';
    console.log(ToDoiteam);
    displayIteams();
}

function displayIteams() {
    let containerElement = document.querySelector(".todo-container");

    let newHTML = "";
    for (let i = 0; i < ToDoList.length; i++) {
        let {iteam, dueDate} = ToDoList[i];
        newHTML += `
        <div style="display: flex; gap: 50px;">
        <div style="width:200px" class="todojs"><div class="jstxt">${iteam}</div></div>
        <div style="width:150px;" class="todojs"><div class="jstxt">${dueDate}</div></div>
       
        <button class="btndlt" onclick = "ToDoList.splice(${i},1);displayIteams();" style="width:100px;height: 30px;
        border-radius: 5px;"> Delete </Button>
        </div>
        `;
    }

    containerElement.innerHTML = newHTML;
}
