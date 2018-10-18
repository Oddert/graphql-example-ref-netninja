import React from 'react'
import { graphql, compose } from 'react-apollo'

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries'

class AddBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    }
    this.submitForm = this.submitForm.bind(this)
  }

  displayAuthors () {
    let data = this.props.getAuthorsQuery
    if (data.loading) return (<option disabled>Loading Authors...</option>)
    else return data.authors.map(
      each => <option key={each.id} value={each.id}>{each.name}</option>
    )
  }

  submitForm (e) {
    e.preventDefault()
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
    this.setState({
      name: '',
      genre: '',
      authorId: ''
    })
  }

  render () {
    return (
      <form className='add-book' onSubmit={this.submitForm}>
        <div className='field'>
          <label>Book Name:</label>
          <input type='text' onChange={e => this.setState({ name: e.target.value })} value={this.state.name} />
        </div>
        <div className='field'>
          <label>Genre:</label>
          <input type='text' onChange={e => this.setState({ genre: e.target.value })} value={this.state.genre} />
        </div>
        <div className='field'>
          <label>Author:</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}  value={this.state.authorId}>
            <option>-Select Author-</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose (
  graphql (getAuthorsQuery, { name: "getAuthorsQuery" })
  , graphql (addBookMutation, { name: "addBookMutation" })
)(AddBook)
