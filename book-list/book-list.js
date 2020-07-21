class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    saveToLocalStorage() {
        const bookString = localStorage.getItem('books');
        const bookArray = bookString ? JSON.parse(bookString) : [];
        bookArray.push(this);
        const newBookString = JSON.stringify(bookArray);
        localStorage.setItem('books', newBookString);
    }

    removeFromLocalStorage() {
        const bookString = localStorage.getItem('books');
        const bookArray = JSON.parse(bookString);
        const newBookArray = bookArray.filter((e) => {
            return (e.title !== this.title) || (e.author !== this.author) || (e.isbn !== this.isbn);
        })
        const newBookString = JSON.stringify(newBookArray);
        localStorage.setItem('books', newBookString);
    }

    createRow() {
        const row = document.createElement('tr');
        const titleTd = document.createElement('td');
        titleTd.textContent = this.title;
        const authorTd = document.createElement('td');
        authorTd.textContent = this.author;
        const isbnTd = document.createElement('td');
        isbnTd.textContent = this.isbn;
        const deleteTd = document.createElement('td');
        deleteTd.textContent = 'X';
        row.appendChild(titleTd);
        row.appendChild(authorTd);
        row.appendChild(isbnTd);
        row.appendChild(deleteTd);
        return row;
    }

    validate() {
        if (this.title === '' || this.author === '' || this.isbn === '') {
            Book.showMessage('Please fill in all inputs');
            return false;
        }

        Book.showMessage('Book added');
        return true;
    }

    static showMessage(msg) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = msg;
        const container = document.getElementById('container');
        const form = document.querySelector('form');
        container.insertBefore(messageDiv, form);
        const color = msg === 'Book added' ? 'green' : 'red';
        messageDiv.className = 'button u-full-width';
        messageDiv.style.color = color;
        messageDiv.style.borderColor = color;
        messageDiv.style.cursor = 'default';
        setTimeout(function() {
            messageDiv.remove();
        }, 2000)
    }
}

document.getElementById('submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const newBook = new Book(title, author, isbn);
    if (!newBook.validate()) { return; }
    newBook.saveToLocalStorage();
    const bookTableBody = document.getElementById('book-table');
    bookTableBody.appendChild(newBook.createRow());
})

document.addEventListener('DOMContentLoaded', function() {
    const bookListString = localStorage.getItem('books');
    const bookListArray = JSON.parse(bookListString);
    bookListArray.forEach(function(e) {
        const newBook = new Book(e.title, e.author, e.isbn);
        const bookTableBody = document.getElementById('book-table');
        bookTableBody.appendChild(newBook.createRow());
    });
})

document.getElementById('book-table').addEventListener('click', function(e) {
    if (e.target.textContent === 'X') {
        const bookRow = e.target.parentElement.children;
        const deleteBook = new Book(bookRow[0].textContent, bookRow[1].textContent, bookRow[2].textContent);
        deleteBook.removeFromLocalStorage();
        e.target.parentElement.remove();
    }
})