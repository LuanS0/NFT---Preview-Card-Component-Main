const $root = document.querySelector(':root');
const $themeSelector = document.querySelector('input[name=theme]');

const getStyle = (element, style) => {
    return window
            .getComputedStyle(element)
            .getPropertyValue(style);
}

const lightMode = {
    bgMain: getStyle($root, '--bg-main'),
    bgColor: getStyle($root, '--bg-color'),
    clrSpan: getStyle($root, '--clr-span'), 
    ttCard: getStyle($root, '--tt-card'),
    descriptionCard: getStyle($root, '--description-card'),
}

const darkMode = {
    bgMain: '#404556',
    bgColor: '#26333e',
    clrSpan: '#fffefd', 
    ttCard: '#ffffff',
    descriptionCard: '#ffffff'
}

const converterKey = key => {
    return '--'+key.replace(/([A-Z])/,'-$1').toLowerCase();
    
};

const changeTheme = (mode) => {
    return Object.keys(mode).map(
        function (key){
            $root.style.setProperty(converterKey(key),mode[key]);
        }
    );
}


$themeSelector.addEventListener('change', (e) => {
    const el = e.target;
    el.checked ? changeTheme(darkMode) : changeTheme(lightMode);
})