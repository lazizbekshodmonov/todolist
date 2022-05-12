




let loader = document.querySelector('.loader');

//create todo item
let input = document.querySelector('#input'),
      create = document.querySelector('#set_btn');
class TodoItem{
    constructor(todotext, check, id){
        this.todotext = todotext;
        this.check = check;
        this.id = id;
    }
}

create.addEventListener('click', () => {
      
      if(input.value !== ''){
        let data = JSON.parse(localStorage.getItem('localData'));
        console.log(data);
        let a;
        if(data !== null){
            a = data.length + 1;
        }else{
            a = 1;
            data = [];
        }
        let newTodoItem = new TodoItem(input.value, false, a)
        data.unshift(newTodoItem)
        localStorage.clear();
        localStorage.setItem('localData', JSON.stringify(data));
        getCities();
        checked();
        
      }
      
})

// Get a list of cities from your database
async function getCities() {
    loader.style.display = 'flex';
    
    let localData = await localStorage.getItem('localData')
      
    loader.style.display = 'none';
    // let data = JSON.parse(localData).sort((a, b) => {
    //     return b.id - a.id;
    // });
    if(JSON.parse(localData) !== null){
        console.log(JSON.parse(localData));


        createDomElement(JSON.parse(localData));
    }
    

}

getCities();
checked();


function createDomElement(data) {
      let todoContent = document.getElementById('todo__content');
  
      todoContent.innerHTML = '';
      data.forEach((element) => {
          let checkText = ' ',
              checked = '';
          if (element.check == true) {
              checkText = 'completed__todo';
              checked = 'checked';
          } else {
              checkText = '';
              checked = '';
          }
  
          todoContent.innerHTML += `
              <li class="todo__item">
                  <div class="todo__checkbox">
                      <input type="checkbox" id="id_${element.id}" value="${element.id}" class="checkbox" ${checked}/>
                      <label for="id_${element.id}" class="label">
                      </label>
                  </div>
                      
                  </label>
                  <p class="todo__text ${checkText}">${element.todotext}</p>
                  <div class="delete">
                      <svg class="deleteSvg" value = "${element.id}" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
                          </svg>
                  </div>
              </li>
          `;
  
      });
  
  }
  
  
  
  function checked() {
      let todoContent = document.querySelector('#todo__content');
      todoContent.addEventListener('change', (e) => {
  
          let target = e.target,
              targetText = target.parentNode.parentNode.childNodes[2].nextSibling,
              input = target.parentNode.childNodes[1];
              let localData = JSON.parse(localStorage.getItem('localData'));
          if (input.checked) {
              targetText.classList.add("completed__todo");
              
              let data = localData.forEach((item) => {
                  if(item.id == input.getAttribute('value')){
                      if (item.check) {
                        item.check = true;
                      }
                        
                  }
              })
                localStorage.clear();
                localStorage.setItem('localData', JSON.stringify(data));
                console.log(localData);
              
          } else {
              targetText.classList.remove("completed__todo");
              let data = localData.forEach((item) => {
                  console.log(item);
                if(item.id == input.getAttribute('value')){
                    if (item.check) {
                      item.check = false;
                    }else{
                      item.check = false;
                    }
                    console.log(localData);
                }
            })
            localStorage.clear();
            localStorage.setItem('localData', JSON.stringify(data));
          }
      });
  }
  function deleteElement(){
     let todocontent = document.querySelector('#todo__content');

     todocontent.addEventListener('click', (e) =>{
      let target = e.target;
      let localData = localStorage.getItem('localData')
    
        let data = JSON.parse(localData).sort((a, b) => {
            return a.id - b.id;
        });
        if(target && target.classList.contains('deleteSvg')){
                
                removeElement(data, +target.getAttribute('value'))
        }
    });
    }

  deleteElement()
  
function removeElement(Array, Alement){
      let element = Alement;
      let array = Array;
      array = array.filter((item) => {
            return item.id !== element;
      })
      localStorage.clear();
      localStorage.setItem('localData', JSON.stringify(array));
      getCities();
      checked();
}


