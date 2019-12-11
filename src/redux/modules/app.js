import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

// action types
const EXAMPLE_INCREASE = 'app/EXAMPLE_INCREASE'
const EXAMPLE_DECREASE = 'app/EXAMPLE_DECREASE'

const UPDATE_MENU_LIST = 'app/UPDATE_MENU_LIST'
const UPDATE_ORDER_PENDING_LIST = 'app/UPDATE_ORDER_PENDING_LIST'
const UPDATE_ORDER_HISTORY_LIST = 'app/UPDATE_ORDER_HISTORY_LIST'

// action generator functions
// names will be re-used with `bindActionCreators`
export const getMenuList = (store_id) => (dispatch) => {
  axios.get(`http://visquit.ga/menu?store_id=${store_id}`)
    .then(({ data: { results } }) => {
      dispatch(updateMenuList({ menuList: results[0] }))
    })
}
const updateMenuList = createAction(UPDATE_MENU_LIST, payload => ({ menuList: payload.menuList }))

export const getOrderPendingList = (store_id) => (dispatch) => {
  axios.get(`http://visquit.ga/store/${store_id}/orders`)
    .then(({ data: { results } }) => {
      dispatch(updateOrderPendingList({ orderPendingList: results[0]}))
    })
}
const updateOrderPendingList = createAction(UPDATE_ORDER_PENDING_LIST, payload => ({ orderPendingList: payload.orderPendingList }))

export const getOrderHistoryList = (store_id) => (dispatch) => {
  axios.get(`http://visquit.ga/store/${store_id}/orders/history`)
    .then(({ data: { results } }) => {
      dispatch(updateOrderHistoryList({ orderHistoryList: results[0]}))
    })
}
const updateOrderHistoryList = createAction(UPDATE_ORDER_HISTORY_LIST, payload => ({ orderHistoryList: payload.orderHistoryList }))

// default state for this slice state
const initialState = {
  storeId: 1,
  menuList: [],
  orderPendingList: [],
  orderHistoryList: [],
}

// reducer for this slice state
export default handleActions({
  [UPDATE_MENU_LIST]: (state, action) => ({
    ...state,
    menuList: action.payload.menuList,
  }),
  [UPDATE_ORDER_PENDING_LIST]: (state, action) => ({
    ...state,
    orderPendingList: action.payload.orderPendingList,
  }),
  [UPDATE_ORDER_HISTORY_LIST]: (state, action) => ({
    ...state,
    orderHistoryList: action.payload.orderHistoryList,
  }),
}, initialState)
