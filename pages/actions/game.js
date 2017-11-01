import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer, { defaultState } from '../reducers/game'
import { getResult, getRandomInt } from '../lib/helpers'
import gameConfigs from '../configs/gameConfigs'
import { get as _get } from 'lodash'
import logger from 'redux-logger'

export const actionTypes = {
  UPDATE_GAME_TYPE: 'UPDATE_GAME_TYPE',
  RESET_GAME_TYPE: 'RESET_GAME_TYPE'
}

export const updateGameType = (gameType) => dispatch => {
  let isPlayer0NPC = true,
      isPlayer1NPC = gameType === 0
  return Promise.resolve(dispatch(resetGameType()))
          .then(dispatch({
            type: actionTypes.UPDATE_GAME_TYPE,
            gameType
          }))
          .then(dispatch(initPlayerInfo(0, isPlayer0NPC)))
          .then(dispatch(initPlayerInfo(1, isPlayer1NPC)))
    
}

export const resetGameType = () => dispatch => {
  return dispatch({
    type: actionTypes.RESET_GAME_TYPE
  })
}

export const initStore = (initialState = defaultState) => {
  return createStore(reducer, initialState, compose(applyMiddleware(thunkMiddleware), applyMiddleware(logger)))
}

const getRandomWeaponId = () => {
  let { weapons, players } = gameConfigs,
      lastWeaponId = Math.max(0, weapons.length),
      randomNum = getRandomInt(1, lastWeaponId)

  return randomNum
}

export const initPlayerInfo = (playerIndex, isNPC = false) => (dispatch, getState) => {
  
  let storeState = getState(),
      { gameType } = storeState,
      isNPCVsNPC = gameType === 0,
      playerType = isNPC ? 0 : 1,
      weaponId = isNPC ? getRandomWeaponId() : '',
      todos = [
        dispatch(updatePlayerInfo(playerIndex, 'PLAYER', playerType)),
        dispatch(updatePlayerInfo(playerIndex, 'WEAPON', weaponId)),
        dispatch(updatePlayerInfo(playerIndex, 'RESULT', ''))
      ]

  if (isNPCVsNPC)
    return  Promise.all(todos)
              .then(dispatch(updateResults()))

  return Promise.all(todos)



}

export const updateResults = () => (dispatch, getState) => {
  let storeState = getState(),
      player0Weapon = _get(storeState, 'player0.weapon.id', ''),
      player1Weapon = _get(storeState, 'player1.weapon.id', ''),
      caculatedResult = [],
      p0CaculatedResult = '',
      p1CaculatedResult = ''

  if (player0Weapon >= 0 && player1Weapon >= 0) {
    caculatedResult = getResult(player0Weapon, player1Weapon)
    p0CaculatedResult = _get(caculatedResult, 'player0', '')
    p1CaculatedResult = _get(caculatedResult, 'player1', '')

    return Promise.all([
      dispatch(updatePlayerInfo(0, 'RESULT', p0CaculatedResult)),
      dispatch(updatePlayerInfo(1, 'RESULT', p1CaculatedResult))
    ])
  }

  return Promise.resolve()

}

export const updatePlayerWeapon = (playerIndex, weaponId) => (dispatch) => {
  return Promise.resolve(dispatch(updatePlayerInfo(playerIndex, 'WEAPON', weaponId)))
          .then(dispatch(updateResults()))
}

const updatePlayerInfo = (playerIndex, propertyName, id) => dispatch => {
  return dispatch({
    type: `UPDATE_PLAYER${playerIndex}_${propertyName}`,
    id
  })
}
