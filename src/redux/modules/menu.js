import { createAction, handleActions } from 'redux-actions'

// util functions
import permute from '../../utils/generateMenuNames'

// action types
const CHANGE_INPUT = 'menu/CHANGE_INPUT'
const CREATE_MENU = 'menu/CREATE_MENU'
const READ_MENU = 'menu/READ_MENU'
const UPDATE_MENU = 'menu/UPDATE_MENU'
const DELETE_MENU = 'menu/DELETE_MENU'

const GENERATE_MENU_LIST = 'menu/GENERATE_MENU_LIST' // 메뉴 리스트 생성
const UPDATE_MENU_NAME_LIST = 'menu/UPDATE_MENU_LIST' // UI 출력할 리스트값 갱신
const CHOOSE_MENU_NAME = 'menu/CHOOSE_MENU_NAME' // 메뉴 추천 선택

// action generator functions
// names will be re-used with `bindActionCreators`
export const changeInput = createAction(CHANGE_INPUT, payload => ({ key: payload.key, value: payload.value }))

export const generateMenuList = (menuName) => (dispatch) => {
  const menuLettersArray = menuName.split(' ')
  const menuList = permute(menuLettersArray)
  dispatch(updateMenuNameList({ menuNameList: menuList }))
}
const updateMenuNameList = createAction(UPDATE_MENU_NAME_LIST, payload => ({ menuNameList: payload.menuNameList }))

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
  })
}, initialState)
