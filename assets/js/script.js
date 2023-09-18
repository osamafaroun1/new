let toDoInput = document.getElementById('todoInput');
let addTask = document.getElementById('add');
let todoList = document.getElementById("todoList");
let DeleteAll = document.getElementById("DeleteAll");
let search=document.getElementById('search');


let mood = 'create';
let tmp;
//create data
let dataPro;

if (localStorage.product != null) {
    dataPro = JSON.parse(localStorage.getItem('product'));
} else {
    dataPro = [];
}
function createData() {

    if (toDoInput.value != '') {
        if (mood === 'create') {
            let newPro = {
                task: toDoInput.value
            }
            dataPro.push(newPro);


        } else{
            let newPro = {
                task: toDoInput.value
            }
            dataPro[tmp] = newPro;
            addTask.innerHTML="Add";
            mood='create'
        }

        localStorage.setItem('product', JSON.stringify(dataPro));
        toDoInput.value = '';
    }

    else {
        alert('please input data');
    }


    showData();
}


//showData

function showData() {
    let list = ''

    for (let index = 0; index < dataPro.length; index++) {

        list += `
         <li class="d-flex bg-info justify-content-between p-2 m-2">${(index) + "." + (dataPro[index].task)}
         <div>
         <button class="btn btn-sm btn-warning mr-2" id="Edit" onclick="updateData(${index})">Edit</button>
         <button class="btn btn-sm btn-danger" onclick="deleteData(${index})"  id="Delete">Delete</button></li>
         </div>
         
        `
    }
    toDoInput.focus();
    toDoInput.select();
    todoList.innerHTML = list;

    if (dataPro.length > 0) {
        DeleteAll.innerHTML = `
        <button class="btn btn-sm btn-warning w-100 p-2" onclick="deletAll()">Delete All(${dataPro.length})</button>
        `
    } else {
        DeleteAll.innerHTML = '';
    }
}

showData();

//deleteData
function deleteData(index) {
    dataPro.splice(index, 1);
    localStorage.product = JSON.stringify(dataPro);
    showData();
}

//deletAll
function deletAll() {
    dataPro.splice(0);
    localStorage.product = JSON.stringify(dataPro);
    showData();
}


//updateData
function updateData(index) {
    toDoInput.value = dataPro[index].task;
    addTask.innerHTML = 'Edit';
    mood = 'update';
    tmp = index;
}


//searchData With name Task
function searchData(){
   for (let index = 0; index < dataPro.length; index++) {
       if(search.value==dataPro[index].task){
          
      
       alert("task is found in index" +"  "+ `${index}`+"   "+" and value is :"+"  "+ dataPro[index].task);
       search.value='';
       break;
       }else{
           alert('task not found')
          
       }
   }
 
}



