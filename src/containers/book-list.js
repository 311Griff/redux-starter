import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                {book.title}
            </li>
            );
        });
    }

    //this render will access the renderList function above to make a list of books
    render() {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
                </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as props inside BookList
    return {
      books: state.books
    };
}

export default connect(mapStateToProps)(BookList);