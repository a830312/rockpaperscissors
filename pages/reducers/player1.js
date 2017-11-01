import { combineReducers } from 'redux'
import gameConfigs from '../configs/gameConfigs'
import { get as _get } from 'lodash'

const { players, weapons, results } = gameConfigs

const defaultPlayer = {
        name: '',
        id: ''
      },
      defaultWeapon = {
        name: '',
        id: ''
      },
      defaultResult = {
        name: '',
        id: ''
      }

function player (state = defaultPlayer, action) {
  let { type, id } = action,
      name = _get(players, id, '')
  switch(type) {
    case 'UPDATE_PLAYER1_PLAYER':
      return {
        name,
        id
      }
    case 'RESET_GAME_TYPE':
      return defaultPlayer
    default:
      return state
  }
}

function weapon (state = defaultWeapon, action) {
  let { type, id } = action,
      name = _get(weapons, id, '')
  switch(action.type) {
    case 'UPDATE_PLAYER1_WEAPON':
      return {
        name,
        id
      }
    case 'RESET_GAME_TYPE':
      return defaultWeapon
    default:
      return state
  }
}

function result (state = defaultResult, action) {
  let { type, id } = action,
      name = _get(results, id, '')
  switch(action.type) {
    case 'UPDATE_PLAYER1_RESULT':
      return {
        name,
        id
      }
    case 'RESET_GAME_TYPE':
      return defaultWeapon
    default:
      return state
  }
}

function num(state = 1, action) {
  return state
}

export default combineReducers({
  num,
  player,
  weapon,
  result
})