import React, { Component } from 'react'
import Game from './containers/game'
import Options from './containers/options'
import gameConfigs from './configs/gameConfigs'
import withRedux from 'next-redux-wrapper'
import { initStore } from './actions/game'

class Index extends Component {

  render() {

    return (
      <div>
        <Options />
        <Game />
      </div>
    )
  }
}

export default withRedux(initStore, null, null)(Index)
