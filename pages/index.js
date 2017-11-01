import React, { Component } from 'react'
import Game from './containers/game'
import Options from './containers/options'
import gameConfigs from './configs/gameConfigs'
import withRedux from 'next-redux-wrapper'
import { initStore } from './actions/game'
import stylesheet from 'styles/css/main.scss'
import Head from "next/head"

class Index extends Component {

  render() {

    return (
      <div className="container">
        <Head>
          <title>Rock - Paper - Scissors</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <Options />
        <Game />
      </div>
    )
  }
}

export default withRedux(initStore, null, null)(Index)
