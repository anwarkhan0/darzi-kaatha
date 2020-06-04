const insertElement = (position, parent, element)=>{
    
    const insert = document.querySelector(parent);
    insert.insertAdjacentHTML(position, element);
}

export default insertElement;