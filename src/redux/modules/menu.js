import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

// util functions
import permute from '../../utils/generateMenuNames'

// action types
const CHANGE_INPUT = 'menu/CHANGE_INPUT'
const GET_MENU_DATA = 'menu/GET_MENU_DATA'
const CREATE_MENU_RESULT = 'menu/CREATE_MENU_RESULT'
const UPDATE_MENU_RESULT = 'menu/UPDATE_MENU_RESULT'
const DELETE_MENU_RESULT = 'menu/DELETE_MENU_RESULT'

const UPDATE_MENU_NAME_LIST = 'menu/UPDATE_MENU_LIST' // UI 출력할 리스트값 갱신
const ON_CHECK_MENU_NAME_LIST = 'menu/ON_ON_CHECK_MENU_NAME_LIST' // 메뉴 이름 추천값 중 체크박스 선택

// action generator functions
// names will be re-used with `bindActionCreators`

// ## ACTION - Change Input
// |- Change input value for each input forms
export const changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

// ## ACTION - Generate (candidate) Menu List
// |- Auto-generate menu lists that are possible with current menu name
// |- Permute and generate all possible value sets
export const generateMenuList = (menuName) => (dispatch) => {
  // if the input value is empty, make menuNameList empty as well
  if (menuName === '') {
    return dispatch(updateMenuNameList({ menuNameList: [] }))
  }

  const menuLettersArray = menuName.trim().split(' ')
  const menuNameList = permute(menuLettersArray)
  // checked flag for use of checkbox
  const menuNameListWithStatus = menuNameList.map((menuName) => {
    const menuNameWithStatus = {
      name: menuName,
      checked: false,
    }
    return menuNameWithStatus
  })
  dispatch(updateMenuNameList({ menuNameList: menuNameListWithStatus }))
}
const updateMenuNameList = createAction(UPDATE_MENU_NAME_LIST, payload => ({ menuNameList: payload.menuNameList }))

// ## ACTION - Change chekcbox of each menu name list
// |- Handle checkbox feature for each manu name set list
// |- When a checkbox is pressed, the change will be reflected on the state
export const checkMenuNameList = (idx) => (dispatch, getState) => {
  const { menu: { menuNameList } } = getState()

  // deep copy
  const newMenuNameList = menuNameList.map((item, index) => {
    if (index !== idx) {
      const newMenu = {
        name: item.name,
        checked: item.checked
      }
      return newMenu
    } else {
      const newMenu = {
        name: item.name,
        checked: !item.checked
      }
      return newMenu
    }
  })

  dispatch(onCheckMenuNameList({ updatedMenuNameList: newMenuNameList }))
}
const onCheckMenuNameList = createAction(ON_CHECK_MENU_NAME_LIST, payload => ({ updatedMenuNameList: payload.updatedMenuNameList }))

// ## ACTION - Get data of particular menu item
// |- By providing Store's ID and the Menu's ID
// |- Fetch the data of that menu from API Server
export const getMenu = (store_id, menu_id) => (dispatch) => {
  axios.get(`http://visquit.ga/menu/${menu_id}?store_id=${store_id}`)
    .then(({ data: { results } }) => {
      const menuId = menu_id
      const menuName = results[0].menu_name
      const menuPrice = results[0].menu_price
      dispatch(getMenuData({ menuId, menuName, menuPrice }))
      dispatch(generateMenuList(menuName))
    })
}
const getMenuData = createAction(GET_MENU_DATA, payload => ({ menuId: payload.menuId, menuName: payload.menuName, menuPrice: payload.menuPrice }))

// ## ACTION - Create a new menu for particular store
export const createMenu = (store_id, menu_name, menu_price) => (dispatch) => {
  return axios.post(`http://visquit.ga/menu?store_id=${store_id}`, {
    store_id: store_id,
    menu_id: 0, // Will be excluded in server-side
    menu_name: menu_name,
    menu_price: menu_price,
  })
  // TODOS: 작업 실패했을 경우의 처리 로직 추가 필요
}

// ## ACTION - Update a menu for particular store
export const updateMenu = (store_id, menu_id, menu_name, menu_price) => (dispatch) => {
  return axios.put(`http://visquit.ga/menu/${menu_id}?store_id=${store_id}`, {
    store_id: store_id,
    menu_id: menu_id, // Will be excluded in server-side
    menu_name: menu_name,
    menu_price: menu_price,
  })
  // TODOS: 작업 실패했을 경우의 처리 로직 추가 필요
}

// ## ACTION - Delete a menu for particular store
export const deleteMenu = (store_id, menu_id) => (dispatch) => {
  return axios.delete(`http://visquit.ga/menu/${menu_id}?store_id=${store_id}`)
  // TODOS: 작업 실패했을 경우의 처리 로직 추가 필요
}

// default state for this slice state
const initialState = {
  menuId: '',
  menuName: '',
  menuPrice: '',
  menuNameList: [],
  menuNameListChosen: [],
}


// reducer for this slice state
export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    [action.payload.key]: action.payload.value,
  }),
  [UPDATE_MENU_NAME_LIST]: (state, action) => ({
    ...state,
    menuNameList: action.payload.menuNameList,
  }),
  [ON_CHECK_MENU_NAME_LIST]: (state, action) => ({
    ...state,
    menuNameList: action.payload.updatedMenuNameList,
  }),
  [GET_MENU_DATA]: (state, action) => ({
    ...state,
    menuId: action.payload.menuId,
    menuName: action.payload.menuName,
    menuPrice: action.payload.menuPrice,
  })
}, initialState)
