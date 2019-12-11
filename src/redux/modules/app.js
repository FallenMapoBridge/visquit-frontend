import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

// action types
const EXAMPLE_INCREASE = 'app/EXAMPLE_INCREASE'
const EXAMPLE_DECREASE = 'app/EXAMPLE_DECREASE'

const UPDATE_MENU_LIST = 'app/UPDATE_MENU_LIST'

// action generator functions
// names will be re-used with `bindActionCreators`
export const getMenuList = (store_id) => (dispatch) => {
  axios.get(`http://visquit.ga/menu?store_id=${store_id}`)
    .then(({ data: { results } }) => {
      dispatch(updateMenuList({ menuList: results[0] }))
    })
}
const updateMenuList = createAction(UPDATE_MENU_LIST, payload => ({ menuList: payload.menuList }))

// default state for this slice state
const initialState = {
  menuList: [],
}

// reducer for this slice state
export default handleActions({
  [UPDATE_MENU_LIST]: (state, action) => ({
    ...state,
    menuList: action.payload.menuList
  })
}, initialState)
