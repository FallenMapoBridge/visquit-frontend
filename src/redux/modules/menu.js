import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

// util functions
import permute from '../../utils/generateMenuNames'

// action types
const CHANGE_INPUT = 'menu/CHANGE_INPUT'
const CREATE_MENU = 'menu/CREATE_MENU'
const GET_MENU_DATA = 'menu/GET_MENU_DATA'
const UPDATE_MENU = 'menu/UPDATE_MENU'
const DELETE_MENU = 'menu/DELETE_MENU'

const UPDATE_MENU_NAME_LIST = 'menu/UPDATE_MENU_LIST' // UI 출력할 리스트값 갱신
const ON_CHECK_MENU_NAME_LIST = 'menu/ON_ON_CHECK_MENU_NAME_LIST' // 메뉴 이름 추천값 중 체크박스 선택

// action generator functions
// names will be re-used with `bindActionCreators`
export const changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

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

export const getMenu = (store_id, menu_id) => (dispatch) => {
  axios.get(`http://visquit.ga/menu/${menu_id}?store_id=${store_id}`)
    .then(({ data: { results } }) => {
      const menuId = menu_id
      const menuName = results[0].menu_name
      const menuPrice = results[0].menu_price
      dispatch(getMenuData({ menuId, menuName, menuPrice }))
    })
}
const getMenuData = createAction(GET_MENU_DATA, payload => ({ menuId: payload.menuId, menuName: payload.menuName, menuPrice: payload.menuPrice }))

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
