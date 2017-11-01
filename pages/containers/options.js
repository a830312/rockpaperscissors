import React, { Component } from 'react'
import gameConfigs from '../configs/gameConfigs'
import { get as _get } from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateGameType, resetGameType } from '../actions/game'

const simulateAGame = 0,
      againstNPC = 1,
      restart = 2

class Options extends Component {
  constructor(props) {
    super(props)
    this._handleTypeBtnClicked = this._handleTypeBtnClicked.bind(this)
    this._generateGameTypes = this._generateGameTypes.bind(this)
  }

  _handleTypeBtnClicked(e) {
    e.preventDefault()
    let gameType = e.target.value,
        { updateGameType, resetGameType } = this.props

    gameType = parseInt(gameType, 10)

    if (gameType === restart)
      resetGameType(gameType)

    updateGameType(gameType)
  }

  _generateGameTypes(gameTypes = []) {
    let typeConfigs = _get(gameConfigs, 'types', [])
    return gameTypes.map((gameType, i) => (
      <li key={`game-type-${i}`} className="options__option">
        <button className="btn options__option-btn" value={gameType} onClick={this._handleTypeBtnClicked}>
          { _get(typeConfigs, gameType, '') }
        </button>
      </li>
    ))
  }

  render() {
    let { gameType } = this.props,
        gameTypes = [ simulateAGame, againstNPC ],
        restartType = [ restart ],
        hasTypeChoosen = gameType !== restart

    return (
      <div>
        <p>Rock–paper–scissors</p>
        { hasTypeChoosen ? false : <ul className="options">{ this._generateGameTypes(gameTypes) }</ul> }
        { hasTypeChoosen ? <ul>{ this._generateGameTypes(restartType) }</ul> : false }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    gameType: state.gameType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGameType: bindActionCreators(updateGameType, dispatch),
    resetGameType: bindActionCreators(resetGameType, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options)