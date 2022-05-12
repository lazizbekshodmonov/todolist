'use script';

class TodoItem{
      constructor(todotext, check, id){
            this.todotext = todotext;
            this.check = check;
            this.id = id;
      }
}
// localStorage.clear()
getLocalStorageData ()
let input = document.querySelector('#input'),
      createBtn = document.querySelector('#set_btn'),
      todoContent = document.querySelector('#todo__content');

      async function getLocalStorageData (){
        let loader = document.querySelector('.loader');
        loader.style.display = 'flex';
          
       let json = await localStorage.getItem('todoData');
        loader.style.display = 'none';
        let localData, data = [];
          if(json !== null){
              localData = JSON.parse(json);
              localData.forEach(element => {
                  data.push(element);
              });
          }else{
              localData = [];
              localData.forEach(element => {
                  data.push(element);
              });
          }
          
       createDomElement(data);
       creatElement(data);
       checked()
  }

function creatElement(data){
      createBtn.addEventListener('click', () => {
        
            if(input.value !== ''){
                let NewData = new TodoItem(input.value, false, data.length + 1)
                data.push(NewData);
                localStorage.setItem('todoData', JSON.stringify(data))
                getLocalStorageData ()
                input.value = ''
                
            }
      })
}





function createDomElement(data) {
      let todoContent = document.getElementById('todo__content');
  
      todoContent.innerHTML = '';
      data.sort((a, b) => {
          return b.id - a.id
        })
        console.log(data);
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
          if (input.checked) {
              targetText.classList.add("completed__todo");
              
              
          } else {
              targetText.classList.remove("completed__todo");
              
          }
      });
  }