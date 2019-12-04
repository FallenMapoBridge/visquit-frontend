import React from 'react'
import { withRouter } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import PageTitle from '../../typography/PageTitle'
import AddButtonSet from '../../button/AddButtonSet'
import EditButtonSet from '../../button/EditButtonSet'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  title: {
    fontWeight: 200,
    marginBottom: '1.5rem'
  },
  textField: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(1),
    width: 200,
    display: 'block'
  },
}))

// # TODOS
// - 각 버튼에 대한 이벤트 함수 연결해주기
// - 현재 URI 기준으로 버튼 다르게 출력
//   - URI에 '/new'가 있으면, 추가 버튼셋
//     - location.pathname === '/menu/edit/new'
//   - URI에 '/:menuId'가 있으면, 수정 버튼셋
//     - match.params.menuId
// - API 체크해서 존재하지 않는 menuId이면 404

const MenuEditContent = (props) => {
  const classes = useStyles()
  const { match, location, history } = props
  return (
    <Paper className={classes.root}>
      <PageTitle>
        {// 메뉴 신규 추가시
        (location.pathname === '/menu/edit/new')
        ? (`새로운 메뉴 등록`)
          // 기존 메뉴 수정시
        : (match.params.menuId)
          ? (`메뉴 수정`)
          : (``)
        }
      </PageTitle>
      <TextField
        id="menuName"
        label="메뉴 이름"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        value={props.menuName}
        onChange={props.handleChange('menuName')}
      />
      <TextField
        id="menuPrice"
        label="가격"
        type="search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        value={props.menuPrice}
        onChange={props.handleChange('menuPrice')}
      />
      {
        // 메뉴 신규 추가시
        (location.pathname === '/menu/edit/new')
        ? (
            <AddButtonSet
              onClickCreate={() => alert('create button!')}
              onClickCancel={() => history.push('/menu')}
            />
          )
          // 기존 메뉴 수정시
        : (match.params.menuId)
          ? (
            <EditButtonSet
              onClickUpdate={() => alert('update button!')}
              onClickDelete={() => alert('delete button!')}
              onClickCancel={() => history.push('/menu')}
            />
          )
          : (<></>)
      }
    </Paper>
  )
}

export default withRouter(MenuEditContent)
