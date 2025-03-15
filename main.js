const myLibrary = [];

function Book(title, author, pages, read=false) {
    if(!new.target)
        throw Error('Must use the new operator to call the function');
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function showBooks() {
    const grid = document.querySelector('.library-container');
    grid.innerHTML = "";
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

document.getElementById("openModal").addEventListener("click", () => {
    document.querySelector(".modal-addBook").showModal()
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.querySelector(".modal-addBook").close();
});

document.getElementById("formAddBook").addEventListener("submit", (event) => {
    event.preventDefault();

    const bookTitle = document.querySelector("#bookTitle");
    const bookAuthor = document.querySelector("#bookAuthor");
    const bookPages = document.querySelector("#bookPages");
    const bookRead = document.querySelector("#bookRead").checked;

    const inputs = [bookAuthor, bookTitle, bookPages];
    let empty = 0;

    inputs.forEach((input) => {
        if(input.value == ""){
            const element = document.querySelector(`label[for=${input.id}]`);
            element.style.color = "red";
            setTimeout(() => {
                element.style.color = "white"
            }, 500);
            empty = 1;
        }
    });

    if(empty)
        return;

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead);
    showBooks();
    console.log(myLibrary)
});