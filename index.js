todos = document.getElementById("todoBody");
if(localStorage.getItem("todo") !== null){
    setTimeout(() => {
        displayTodos();
    }, 1);
}

function displayTodos(){
    s='';
        st = localStorage.getItem("todo")
        st = JSON.parse(localStorage.getItem("todo"));
        st.forEach(element => {
            if(element[3]==true){
                s+=`
                <div class="container">
               <div class="row my-2">
                 <div class="col-10 ">
                <button onClick="{striker(${element[2]})}" id="cards" class="card-body complete">
                <h5 class="card-title" id="card-t"><i class="fa-solid fa-badge-check"></i>${element[0]}</h5>
                <p class="card-text" id="card-d">${element[1]}</p>
                </button>
            </div>
        
            <div class="col">
                <i onClick="{deletion(${element[2]})}" class="my-5 fa-solid fa-trash-can fa-2xl hh"></i>
            </div>
            </div>
            </div>
        
                `
            }
            else{
            s += `
            <div class="container">
               <div class="row my-2">
                 <div class="col-10">
        
                <button onClick="{striker(${element[2]})}" id="cards" class="card-body">
                <h5 class="card-title" id="card-t">${element[0]}</h5>
                <p class="card-text" id="card-d">${element[1]}</p>
                </button>
            </div>
        
            <div class="col">
            <i onClick="{deletion(${element[2]})}" class="my-5 fa-solid fa-trash-can fa-2xl"></i>
              
            </div>
            </div>
            </div>
        
                `;
            }
            
        })
        todos.innerHTML = s;
}

function striker(key){
    arr = JSON.parse(localStorage.getItem("todo"));
    for(let i=0;i<arr.length;i++){
        if(arr[i][2]==key){
            arr[i][3] = !arr[i][3];
            localStorage.setItem("todo",JSON.stringify(arr));
            displayTodos();
        }
    }
}

function deletion(item){
    arr = JSON.parse(localStorage.getItem("todo"));
    for(let i=0;i<arr.length;i++){
        if(arr[i][2]==item){
            arr.splice(i,1);
            localStorage.setItem("todo",JSON.stringify(arr));
            displayTodos();
        }
    }
}

document.getElementById("top").addEventListener("click",function(){
    window.scrollTo(0,0);
});

document.getElementById("adds").addEventListener("click", function(){
    var x = document.getElementById("title").value;
    var y = document.getElementById("desc").value;
    if(x===''){
        title.classList.add("face");
        return;
    }
    if(y===''){
        y='&nbsp';
    }
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    if(localStorage.getItem("todo") === null){
        let cnt = 0;
        let completed = false;
        localStorage.setItem("bool",JSON.stringify(completed));
        localStorage.setItem("count", JSON.stringify(cnt));
        itemArray = [];
        itemArray.push([x,y,cnt,completed]);
        localStorage.setItem("todo", JSON.stringify(itemArray));
    }else{
        localStorage.setItem("bool",JSON.stringify(false));
        localStorage.setItem("count", JSON.stringify(parseInt(localStorage.getItem("count"))+1));
        itemArray = JSON.parse(localStorage.getItem("todo"));
        itemArray.push([x,y,localStorage.getItem("count"),false]);
        localStorage.setItem("todo", JSON.stringify(itemArray));
    }
    todos = document.getElementById("todoBody");
    localStorage.setItem("todo", JSON.stringify(itemArray));
    displayTodos();
    window.scrollTo(0, document.body.scrollHeight);
    
})
