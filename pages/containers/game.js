import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Player from '../containers/player'
import { getResult, getRandomInt } from '../lib/helpers'
import gameConfigs from '../configs/gameConfigs'
import { get as _get } from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const { weapons } = gameConfigs


class Game extends Component {

  render() {
    let { gameType, player0, player1 } = this.props,
        isGameTypeSelected = !!(gameType !== 2)
    return (
      <div>
        {
          isGameTypeSelected ? (
            <ul>
              <li><Player {...player0} /></li>
              <li><Player {...player1} /></li>
            </ul>
          ) : false
        }
      </div>
    )
  }
}

const mapStateToProps = ({ gameType, player0, player1 }) => {
  return {
    gameType,
    player0,
    player1
  }
}



export default connect(mapStateToProps, null)(Game)