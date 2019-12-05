import React from 'react'
import { withRouter } from 'react-router-dom'
import clsx from 'clsx'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import PageTitle from '../../typography/PageTitle'
import AddButtonSet from '../../button/AddButtonSet'
import EditButtonSet from '../../button/EditButtonSet'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  permute: {
    fontWeight: 300,
    marginTop: '1.3rem',
    marginBottom: '0.8rem',
  },
  permuteMessage: {
    fontWeight: 200,
    marginBotton: '0.8rem',
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
// - 수정하는 경우, menuId를 사용하여 수정 전 기존의 메뉴 정보 출력
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
        onChange={props.handleInputChange('menuName')}
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
        onChange={props.handleInputChange('menuPrice')}
      />
      <Typography
        variant="h5"
        className={classes.permute}
      >
        AI 학습 데이터 선택
      </Typography>
      {
        (props.menuNameList.length > 0)
        ? (
            <FormGroup>
            {
              props.menuNameList.map((item, index) => {
                console.log(item.checked)
                return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={item.checked}
                      value={index}
                      onChange={props.handleMenuNameCheckbox(index)}
                      style={{ color: '#4051B6'}}
                    />
                  }
                  label={item.name}
                />
              )})
            }
            </FormGroup>
          )
        : (
          <Typography
            variant="body1"
            className={classes.permuteMessage}
          >
            메뉴 이름을 입력해주셔야 합니다.
          </Typography>
        )
      }
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
