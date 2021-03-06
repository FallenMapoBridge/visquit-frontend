// URL에 따라 보여줄 컴포넌트들의 모음
import withSplitting from '../utils/withSplitting'

export const Home = withSplitting(() => import('./Home'))
export const Menu = withSplitting(() => import('./Menu'))
export const MenuEdit = withSplitting(() => import('./MenuEdit'))
export const OrdersPending = withSplitting(() => import('./OrdersPending'))
export const OrdersHistory = withSplitting(() => import('./OrdersHistory'))
