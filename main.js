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

Book.prototype.toggleStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function showBooks() {
    const grid = document.querySelector('.library-container');
    grid.innerHTML = "";
    myLibrary.forEach((element) => {
        let book = `
            <div class="books" data-id="${element.id}">
                <h3 class="titulo">${element.title}</h3>
                <p>Author: ${element.author}</p>
                <p>Pages: ${element.pages}</p>
                <small>Not read yet <input type="checkbox" class="bookRead"></small>
                <div class="excluir">Excluir</div>
            </div>
        `;
        if(element.read) 
            book = `
            <div class="books" data-id="${element.id}">
                <h3 class="titulo">${element.title}</h3>
                <p>Author: ${element.author}</p>
                <p>Pages: ${element.pages}</p>
                <small>Already readed <input type="checkbox" class="bookRead" checked></small>
                <div class="excluir">Excluir</div>
            </div>
        `;
        grid.innerHTML += book;
    })

    document.querySelectorAll(".books").forEach((element) => {
        const checkbox = element.querySelector(".bookRead");
        element.querySelector(".excluir").addEventListener("click", () => {
            deleteBook(element.dataset.id);
            showBooks();
        });
        checkbox.addEventListener("click", () => {
            toggleBookStatus(element.dataset.id);
            showBooks();
        });
    });

}

function deleteBook(id) {
    const index = myLibrary.findIndex((element) => element.id === id);
    if (index === -1) {
        console.error("Book not found with the given ID:", id);
        return; 
    }
    myLibrary.splice(index, 1);
}

function toggleBookStatus(id) {
    const index = myLibrary.findIndex((element) => element.id === id);
    if (index === -1) {
        console.error("Book not found with the given ID:", id);
        return; 
    }
    myLibrary[index].toggleStatus();
}

document.getElementById("formAddBook").addEventListener("submit", (event) => {
    event.preventDefault();

    const bookTitle = document.querySelector("#bookTitle");
    const bookAuthor = document.querySelector("#bookAuthor");
    const bookPages = document.querySelector("#bookPages");
    const bookRead = document.querySelector("#bookReadCheck").checked;

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

    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookRead.checked = false;
    document.querySelector(".modal-addBook").close();

    showBooks();
});

document.getElementById("openModal").addEventListener("click", () => {
    const modal = document.querySelector(".modal-addBook");
    modal.showModal()
    modal.classList.add('animate__animated', 'animate__fadeIn');
});

document.getElementById("closeModal").addEventListener("click", () => {
    const modal = document.querySelector(".modal-addBook");
    modal.classList.remove('animate__fadeIn'); 
    modal.classList.add('animate__animated', 'animate__fadeOut');

    modal.addEventListener('animationend', () => {
        modal.close(); 
        modal.classList.remove('animate__fadeOut'); 
      }, { once: true });
});