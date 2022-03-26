const H1 = document.getElementById('page-title');
const BUTTON = document.getElementById('mode-selector');
const FOOTER = document.getElementsByTagName('footer')[0];
const BODY = document.getElementsByTagName('body')[0];
const darkModeClass = 'dark-mode';

BUTTON.addEventListener('click', changeMode);

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    H1.classList.toggle(darkModeClass);
    BUTTON.classList.toggle(darkModeClass);
    FOOTER.classList.toggle(darkModeClass);
    BODY.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(BUTTON.classList.contains(darkModeClass)){
        BUTTON.innerHTML = lightMode;
        H1.innerHTML = darktMode + ' ON';
        return;
    }

    BUTTON.innerHTML = darkMode;
        H1.innerHTML = lightMode + ' ON';
}





