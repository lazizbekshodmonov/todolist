let root = document.querySelector(':root');

let changeColorBtn = document.querySelector('.dark__white'),
    bgImage = document.querySelector('.bg__image img');




let a = true;


changeColorBtn.addEventListener('click', () => {
    if (a) {
        changeColorBtn.childNodes[1].src = './icons/while.svg';
        bgImage.src = './image/Bitmap-dark.png';


        root.style.setProperty('--todo-item-color', '#25273D');
        root.style.setProperty('--background', '#171823');
        root.style.setProperty('--box-shadow', '0px 35px 50px -15px rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--text-color', '#C8CBE7');
        root.style.setProperty('--input-color', '#C8CBE7');
        root.style.setProperty('--completed-text-color', '#4D5067');
        root.style.setProperty('--border-color', '#393A4B');
        root.style.setProperty('--hover-color', '#E3E4F1');
        root.style.setProperty('--footer-text-color', '#5B5E7E');
        root.style.setProperty('--checked-color', '#4D5067');
        a = false;
    } else {
        changeColorBtn.childNodes[1].src = './icons/dark.svg';
        bgImage.src = './image/Bitmap.png';

        root.style.setProperty('--todo-item-color', '#ffffff');
        root.style.setProperty('--background', '#F2F2F2');
        root.style.setProperty('--box-shadow', '0px 35px 50px -15px rgba(194, 195, 214, 0.5)');
        root.style.setProperty('--text-color', '#494C6B');
        root.style.setProperty('--input-color', '#393A4B');
        root.style.setProperty('--completed-text-color', '#D1D2DA');
        root.style.setProperty('--border-color', '#E3E4F1');
        root.style.setProperty('--hover-color', '#494C6B');
        root.style.setProperty('--footer-text-color', '#9495A5');
        root.style.setProperty('--checked-color', '#D1D2DA');
        a = true;
    }
});