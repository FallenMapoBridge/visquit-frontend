import { createAction, handleActions } from 'redux-actions'

// action types
const CHANGE_INPUT = 'menu/CHANGE_INPUT'
const CREATE_MENU = 'menu/CREATE_MENU'
const READ_MENU = 'menu/READ_MENU'
const UPDATE_MENU = 'menu/UPDATE_MENU'
const DELETE_MENU = 'menu/DELETE_MENU'

// action generator functions
// names will be re-used with `bindActionCreators`
export const changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

// default state for this slice state
const initialState = {
  menuId: '',
  menuName: '',
  menuPrice: '',
}

// reducer for this slice state
export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.value,
  }),
}, initialState)
