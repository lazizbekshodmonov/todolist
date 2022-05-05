// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCdfAbO-lLnl7jf0RYkDy_mJ9X2efAhNIc",
    authDomain: "todolist-72c88.firebaseapp.com",
    projectId: "todolist-72c88",
    storageBucket: "todolist-72c88.appspot.com",
    messagingSenderId: "628953904303",
    appId: "1:628953904303:web:a790a5e4aaa4c16325505a",
    measurementId: "G-C8P3WDSHBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let loader = document.querySelector('.loader');

// Get a list of cities from your database
async function getCities(db) {
    loader.style.display = 'flex';
    const citiesCol = collection(db, 'todocontent');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());

    loader.style.display = 'none';
    let data = cityList.sort(function(a, b) {
        return a.id - b.id;
    });
    console.log(data);

    createDomElement(data);

}

getCities(db);
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
                    <input type="checkbox" id="id_${element.id}" class="checkbox" ${checked}/>
                    <label for="id_${element.id}" class="label">
                    </label>
                </div>
                    
                </label>
                <p class="todo__text ${checkText}">${element.todotext}</p>
                <div class="delete">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        // console.log('error');
        let target = e.target,
            targetText = target.parentNode.parentNode.childNodes[2].nextSibling,
            input = target.parentNode.childNodes[1];

        // console.log(targetText);
        if (input.checked) {
            targetText.classList.add("completed__todo");
        } else {
            targetText.classList.remove("completed__todo");
        }
    });
}