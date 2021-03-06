const itemsContainer = document.querySelector('.items-container');

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let booksInLocalStorage = localStorage.length;
console.log(booksInLocalStorage);

for(let i=0; i<booksInLocalStorage; i++) {
    let book = JSON.parse(localStorage.getItem('book' + i));
    addBookToLibrary(book);
}
displayBooks();


function displayBooks() {
    itemsContainer.innerHTML ='';
    let id = 0;

    myLibrary.forEach(function(book) {

        const item = document.createElement('div');
        item.classList.add('item');
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('bookContainer');

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = book.title;

        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = book.author;

        const pages = document.createElement('div');
        pages.classList.add('pages');
        pages.textContent = book.pages;

        const isRead = document.createElement('div');
        let finished = book.isRead;
        if(finished == true) {
            isRead.classList.add('read');
            isRead.textContent ='Read';
        } else {
            isRead.classList.add('notRead');
            isRead.textContent = 'Not read';
        }

        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('tagsContainer');

        const editContainer = document.createElement('div');
        editContainer.setAttribute('id', 'id'+id);
        editContainer.classList.add('editContainer');
        editContainer.textContent = 'EDIT';
        editContainer.addEventListener('click', () => {
            let localId = deleteContainer.getAttribute('id').slice(2);
            if(myLibrary[localId].isRead == true) {
                myLibrary[localId].isRead = false;
            } else {
                myLibrary[localId].isRead = true
            }
            displayBooks();
        });

        const deleteContainer = document.createElement('div');
        deleteContainer.classList.add('deleteContainer');
        deleteContainer.setAttribute('id', 'id'+id);
        deleteContainer.textContent = 'DELETE';
        deleteContainer.addEventListener('click', () => {
            let localId = deleteContainer.getAttribute('id').slice(2);
            myLibrary.splice(localId, 1);
            console.log(deleteContainer.getAttribute('id'));
            console.log(myLibrary);
            displayBooks();
        });

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(isRead);

        tagsContainer.appendChild(editContainer);
        tagsContainer.appendChild(deleteContainer);

        item.appendChild(bookContainer);
        item.appendChild(tagsContainer);

        itemsContainer.appendChild(item);

        const bookName = 'book' + id;
        console.log(book);
        localStorage.setItem(bookName, JSON.stringify(book));

        id++;
    });
}

let modal = document.querySelector('.bg-modal');
let addButton = document.querySelector('.add-book');

addButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

let closePop = document.querySelector('.close');
closePop.addEventListener('click', () => {
    modal.style.display = 'none';
});

const newBookForm = document.querySelector('#newBook');

newBookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formTitle = document.getElementById('title').value;
    const formAuthor = document.getElementById('author').value;
    const formPages = document.getElementById('pages').value;
    const formIsRead = document.getElementById('isRead').checked;
    console.log(formIsRead);

    const book = new Book(formTitle, formAuthor, formPages, formIsRead);
    addBookToLibrary(book);
    displayBooks();
    modal.style.display = 'none';

    newBookForm.reset();
});
