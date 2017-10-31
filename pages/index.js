import React, { Component } from 'react'
import Game from './game'

class Index extends Component {
  constructor(props) {
    super(props)
    this._handleTypeBtnClicked = this._handleTypeBtnClicked.bind(this)
    this.state = {
      type: 0
    }
  }

  _handleTypeBtnClicked(e) {
    let type = e.target.value
    type = parseInt(type, 10)
    this.setState({ type })
  }

  render() {
    let { type } = this.state
    return (
      <div>
        <p>Rock–paper–scissors</p>
        <ul>
          <li>
            <button value={0} onClick={this._handleTypeBtnClicked}>
              simulate a game (Computer vs Computer)
            </button>
          </li>
          <li>
            <button value={1} onClick={this._handleTypeBtnClicked}>
              play against the computer
            </button>
          </li>
        </ul>
        <Game type={type} />
      </div>
    )
  }
}

export default Index