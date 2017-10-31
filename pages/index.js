import React, { Component } from 'react'
import Game from './game'
import gameConfigs from './configs/gameConfigs'
import { get as _get } from 'lodash'

const simulateAGame = 0,
      againstNPC = 1,
      restart = 2

class Index extends Component {
  constructor(props) {
    super(props)
    this._handleTypeBtnClicked = this._handleTypeBtnClicked.bind(this)
    this._generateGameTypes = this._generateGameTypes.bind(this)
    this.state = {
      type: null
    }
  }

  _handleTypeBtnClicked(e) {
    e.preventDefault()
    let type = e.target.value
    type = parseInt(type, 10)
    type = (type === restart) ? null : type
    this.setState({ type })
  }

  _generateGameTypes(gameTypes = []) {
    let typeConfigs = _get(gameConfigs, 'types', [])
    return gameTypes.map((gameType, i) => (
      <li key={`game-type-${i}`}>
        <button value={gameType} onClick={this._handleTypeBtnClicked}>
          { _get(typeConfigs, gameType, '') }
        </button>
      </li>
    ))
  }

  render() {
    let { type } = this.state,
        gameTypes = [ simulateAGame, againstNPC ],
        restartType = [ restart ],
        hasTypeChoosen = type !== null

    return (
      <div>
        <p>Rock–paper–scissors</p>
        <ul>{ this._generateGameTypes(gameTypes) }</ul>
        { hasTypeChoosen ? <ul>{ this._generateGameTypes(restartType) }</ul> : false }
        <Game type={type} />
      </div>
    )
  }
}

export default Index