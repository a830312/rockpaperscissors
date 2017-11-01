import React, { Component } from 'react'
import Game from './containers/game'
import Options from './containers/options'
import gameConfigs from './configs/gameConfigs'
import withRedux from 'next-redux-wrapper'
import { initStore } from './actions/game'

class Index extends Component {

  render() {

    return (
      <div className="container">
        <Options />
        <Game />
        <style global jsx>
        {`
          body {
            font-family: "Arial";
            background-color: #eee;
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 0 5px;
            display: inline-block;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }

          .btn {
            position: relative;
            padding: 6px 16px;
            vertical-align: middle;
            letter-spacing: 0px;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 14px;
            background-color: transparent;
            border: 1px solid #797979;
            border-right-color: transparent;
            cursor: pointer;
          }

          .btn:last-of-type {
            border-right-color: #797979;
          }

          .container {
            max-width: 720px;
            min-width: 320px;
            min-height: 100vh;
            margin auto;
            text-align: center;
            border: 10px solid #fff;
            background-color: #eee;
            color: #797979;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
          }
        `}
        </style>
      </div>
    )
  }
}

export default withRedux(initStore, null, null)(Index)
