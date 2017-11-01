import { actionTypes, updateGameType } from '../actions/game'
import { combineReducers } from 'redux'
import player0 from './player0'
import player1 from './player1'

const defaultGameType = 2



function gameType (state = defaultGameType, action) {
  switch (action.type) {
    case 'UPDATE_GAME_TYPE':
      return action.gameType
    case 'RESET_GAME_TYPE':
      return defaultGameType
    default: return state
  }
}



const game = combineReducers({
  gameType,
  player0,
  player1
})

export default game