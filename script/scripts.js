import {data} from '../data/data.js';

const printList = document.getElementById('lista');
const fragment = document.createDocumentFragment();
let button = document.getElementById('btn');


document.addEventListener('DOMContentLoaded', () => {
    loadList(data);
})

const loadList = (data) => {
    data.forEach(biografia => {
        const{bio} = biografia;
        printList.textContent = bio;
        const clone = printList.cloneNode(true);
        fragment.appendChild(clone)
    });
    printList.appendChild(fragment);
}

localStorage.setItem('biografia', JSON.stringify(data));


function confirm(){
    let res = ''
    if(res == true){
        return true;
    }else{
        return false;
    }
}


