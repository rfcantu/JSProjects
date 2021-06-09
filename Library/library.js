var myLibrary = [];
var currIndex = 0;

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "have not read", currIndex++)
lotr = new Book("Lord of the Rings", "J.R.R. Tolkien", 295, "have not read", currIndex++)

myLibrary.push(theHobbit)
myLibrary.push(lotr)

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.index = currIndex++;

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`
    }

    this.remove = () => {
        myLibrary.splice(this.index, 1)
    }
}

function displayForm() {
    document.getElementById("addBook").style.visibility = "visible";
}

function hideForm() {
    document.getElementById("addBook").style.visibility = "hidden";
}

function addBookToLibrary() {
    curr = document.getElementById("addBook")
    book = new Book(
        curr.elements.namedItem("title").value,
        curr.elements.namedItem("author").value,
        curr.elements.namedItem("pages").value,
        curr.elements.namedItem("read").value
    );
    myLibrary.push(book);
    hideForm()
}

function showBooks() {
    var tab = document.getElementById("books");
    myLibrary.forEach((item, index) => {
        let row = tab.insertRow(index);
        let cell = row.insertCell(0)
        var button = document.createElement('button')
        button.onclick = () => {
            item.remove()
        }
        cell.innerHTML = item.info() + button
    });
}