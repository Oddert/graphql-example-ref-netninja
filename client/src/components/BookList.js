import React from 'react'
import { graphql } from 'react-apollo'

import BookDetails from './BookDetails'
import { getBooksQuery } from '../queries'

class BookList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }

  displayBooks () {
    let data = this.props.data
    if (data.loading) return (<div>Loading Books...</div>)
    else return data.books.map(
      each => (
        <li key={each.id} onClick={e => this.setState({ selected: each.id })}>
          {each.name}
        </li>
      )
    )
  }

  render () {
    return (
      <div>
        <ul id='book-list'>
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList)
