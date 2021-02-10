import React , {Component} from "react"

export const MyContext = React.createContext();

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            addBooks: books => {
                const currentlyReading = books.filter(book => book.shelf ==="currentlyReading");
                const wantToRead = books.filter(book => book.shelf ==="wantToRead");
                const read = books.filter(book => book.shelf ==="read");
                this.setState({books,currentlyReading,wantToRead,read});
            },
            moveBook: (Book,newShelf,allShelfs) => {
                console.log(newShelf);
                const newBooks = this.state.books.map(allBooks => {
                    const  foundId = allShelfs[newShelf].find(
                        bookId => bookId === allBooks.id
                    );
                    if(foundId){
                        allBooks.shelf = newShelf;
                    }
                    return allBooks;
                });
                this.state.addBooks(newBooks);
            }
        }
    }
    render(){
       return (
           <MyContext.Provider value={{...this.state}}>
             {this.props.children}
           </MyContext.Provider>
       );
    }

}