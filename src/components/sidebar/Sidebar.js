import React, { useState } from 'react'
import clsx from 'clsx'
import { withRouter } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ReceiptIcon from '@material-ui/icons/Receipt'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import routes from '../../utils/temp/routes'

const drawerWidth = 180
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const Sidebar = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [isOrdersOpen, setOrdersOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const onDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const onDrawerClose = () => {
    if (isOrdersOpen === true || isMenuOpen === true) {
      setOrdersOpen(false)
      setMenuOpen(false)
    }
    setDrawerOpen(false);
  };

  const onOrdersExpand = () => {
    if (isDrawerOpen === false) {
      setDrawerOpen(true)
    }
    setOrdersOpen(!isOrdersOpen)
  }

  const onMenuExpand = () => {
    if (isDrawerOpen === false) {
      setDrawerOpen(true)
    }
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isDrawerOpen,
        })}
        color="primary"
        position="fixed"
      >
        <Toolbar>
          <IconButton
            className={clsx(classes.menuButton, {
              [classes.hide]: isDrawerOpen,
            })}
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4"
            color="inherit"
          >
            VISQUIT PoS
         </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isDrawerOpen,
          [classes.drawerClose]: !isDrawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen,
          }),
        }}
        open={isDrawerOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={onDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            onClick={onMenuExpand}
            button
          >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary='메뉴 관리' />
            {isMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => props.history.push('/menu')}
              >
                <ListItemText primary="메뉴 목록" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={() => props.history.push('/menu/edit/new')}
              >
                <ListItemText primary="새 메뉴 등록" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            onClick={onOrdersExpand}
            button
          >
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary='주문 확인' />
            {isOrdersOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOrdersOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => props.history.push('/orders/pending')}
              >
                <ListItemText primary="현재 주문 목록" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={() => props.history.push('/orders/history')}
              >
                <ListItemText primary="처리 완료 주문" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  )
}

export default withRouter(Sidebar)
