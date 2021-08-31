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

function displayBooks() {
    itemsContainer.innerHTML ='';

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
        if(finished == "on") {
            isRead.classList.add('read');
            isRead.textContent ='Read';
        } else {
            isRead.classList.add('notRead');
            isRead.textContent = 'Not read';
        }

        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('tagsContainer');

        const editContainer = document.createElement('div');
        editContainer.classList.add('editContainer');
        editContainer.textContent = 'EDIT';

        const deleteContainer = document.createElement('div');
        deleteContainer.classList.add('deleteContainer');
        deleteContainer.textContent = 'DELETE';

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(isRead);

        tagsContainer.appendChild(editContainer);
        tagsContainer.appendChild(deleteContainer);

        item.appendChild(bookContainer);
        item.appendChild(tagsContainer);

        itemsContainer.appendChild(item);
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
    const formIsRead = document.getElementById('isRead').value;

    const book = new Book(formTitle, formAuthor, formPages, formIsRead);
    addBookToLibrary(book);
    displayBooks();
});