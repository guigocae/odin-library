# Library Book Manager

## Overview

This project is a simple library book manager developed as part of The Odin Project's JavaScript course. The application allows users to manage a collection of books by adding or removing them. Each book entry includes details such as the title, author, number of pages, and whether the book has been read or not.

The project is built using vanilla JavaScript, emphasizing the use of prototypes and objects. It serves as a practical exercise to understand fundamental JavaScript concepts and object-oriented programming principles.

## Features

- **Add a Book**: Users can add a new book to the library by providing the book's title, author, number of pages, and read status.
- **Remove a Book**: Users can remove a book from the library.
- **View Books**: The library displays all books with their respective details.
- **Toggle Read Status**: Users can toggle the read status of a book (read/unread).

## Technologies Used

- **JavaScript**: The core logic of the application is written in vanilla JavaScript.
- **HTML/CSS**: Basic HTML and CSS are used for structuring and styling the user interface.

## Project Structure

- **index.html**: The main HTML file that structures the user interface.
- **styles.css**: Contains the styles for the application.
- **script.js**: The JavaScript file that handles the logic for adding, removing, and displaying books.

## How to Use

1. **Adding a Book**:
   - Fill in the book details (title, author, number of pages, and read status) in the provided form.
   - Click the "Add Book" button to add the book to the library.

2. **Removing a Book**:
   - Each book entry has a "Remove" button. Clicking this button will remove the book from the library.

3. **Toggling Read Status**:
   - Each book entry has a "Toggle Read Status" button. Clicking this button will change the read status of the book.

## Future Improvements

While this project is primarily for learning purposes, there are several areas where it can be improved:

- **Performance Optimization**: The current implementation re-renders the entire list of books whenever the library's state changes. This can be optimized to only update the necessary parts of the DOM.
- **Local Storage**: Implement local storage to persist the library data between sessions.
- **Enhanced UI/UX**: Improve the user interface and experience with better styling and interactive elements.
- **Search and Filter**: Add functionality to search and filter books by title, author, or read status.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

**Note**: This project is part of The Odin Project curriculum and is intended for educational purposes.
