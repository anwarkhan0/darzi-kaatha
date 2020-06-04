export function insertLoader(){
    document.querySelector('.container').innerHTML = '<div style="width: 100px; margin: auto;"><div class="loader"></div></div>';
}

export function removeLoader(){
    const loader = document.querySelector('.loader');
    loader.remove();
}