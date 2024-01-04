const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter');

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    //validate form
    if (newItem === '') {
        alert('Please add an item Lee');
        return;
    }

    //create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    //create button
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

//add li to the dom
    itemList.appendChild(li);

    checkUi();

    itemInput.value = '';


}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;

}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e) {
    if (e.target.parentNode.classList.contains('remove-item')) {

        if (confirm('Sure Lee?')) {

            e.target.parentElement.parentElement.remove();
            
            checkUi();
        }
    }
}


function clearItems(e) {
    itemList.innerHTML = '';

    checkUi();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');

    const text = e.target.value.toLowerCase();

    
    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLocaleLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function checkUi() {
const items = itemList.querySelectorAll('li');

    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}



//event listener
itemForm.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

clearBtn.addEventListener('click', clearItems);

itemFilter.addEventListener('input', filterItems);

checkUi();

//local and session storage

localStorage.setItem('name', 'Dan');

console.log(localStorage.getItem('name'));

// localStorage.removeItem('name');

console.log(localStorage.getItem('name'));

localStorage.clear();

//easy to use in most cases, gets tricky when you want to store objects


