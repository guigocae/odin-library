const myLibrary = [];

function Book(title, author, pages, read=false) {
    if(!new.target)
        throw Error('Must use the new operator to call the function');
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        let readed = "not read yet";
        if(this.read)
            readed = "already readed";
        return `${title} by ${author}, ${pages} pages, ${readed}`;
    }
}

function addBookToLibrary(title, author, pages, read) {

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function showBooks() {
    const grid = document.querySelector('.library-container');
    myLibrary.forEach((element) => {
        let read = "Not read yet";
        if(element.read) 
            read = "Already readed";

        let book = `
            <div class="books">
                <h3 class="titulo">${element.title}</h3>
                <p>Author: ${element.author}</p>
                <p>Pages: ${element.pages}</p>
                <small>${read}</small>
            </div>
        `;
        grid.innerHTML += book;
    })
}

document.getElementById("addBook").addEventListener("click", () => {

})

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);
addBookToLibrary("Harry Potter", "J.K. Rowling", 457, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 457, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 457, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 457, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 457, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);
console.log(myLibrary)
showBooks();