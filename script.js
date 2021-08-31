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

// Adding placeholders for presentation 

let fake1 = new Book('Cool Book', 'Great Autor', 543, false);

let fake2 = new Book('Cool Book', 'Great Autor', 543, false);

let fake3 = new Book('Cool Book', 'Great Autor', 543, false);

let fake4 = new Book('Cool Book', 'Great Autor', 543, false);

let fake5 = new Book('Cool Book', 'Great Autor', 543, false);

addBookToLibrary(fake1);
addBookToLibrary(fake2);
addBookToLibrary(fake3);
addBookToLibrary(fake4);
addBookToLibrary(fake5);

displayBooks();