import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries'


class BookDetails extends React.Component {
  displayBookDetails () {
    const { book } = this.props.data
    if (book) return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <em>{book.author.name}</em>
        <p>All books by this author</p>
        <ul className='other-books'>
          {book.author.books.map(each =>
            <li key={each.id}>{each.name}</li>
          )}
        </ul>
      </div>
    )
    else return (
      <div>No book selected.</div>
    )
  }

  render () {
    console.log(this.props)
    return (
      <div id='book-details'>
        {this.displayBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  options: props => ({
    variables: {
      id: props.bookId
    }
  })
})(BookDetails)
