const orders = [
  {
    order_date: '2019-12-04',
    order_time: '16:12:45',
    order_num: 100,
    order_price: 21000,
    serve_fl: false,
    order_items: [
      {
        menu_name: '통새우 버거',
        item_quantity: 3,
        item_price: 5000
      },
      {
        menu_name: '감자튀김',
        item_quantity: 1,
        item_price: 2000
      },
      {
        menu_name: '사이다',
        item_quantity: 2,
        item_price: 2000
      },
    ]
  },
  {
    order_date: '2019-12-04',
    order_time: '16:33:29',
    order_num: 101,
    order_price: 10000,
    serve_fl: false,
    order_items: [
      {
        menu_name: '불고기 버거',
        item_quantity: 1,
        item_price: 3000
      },
      {
        menu_name: '통새우 버거',
        item_quantity: 1,
        item_price: 3000
      },
      {
        menu_name: '야채라이스 버거',
        item_quantity: 2,
        item_price: 2000
      },
    ]
  },
  {
    order_date: '2019-12-05',
    order_time: '14:41:55',
    order_num: 102,
    order_price: 15000,
    serve_fl: false,
    order_items: [
      {
        menu_name: '시저 샐러드',
        item_quantity: 1,
        item_price: 3000
      },
      {
        menu_name: '아메리카노',
        item_quantity: 2,
        item_price: 3000
      },
      {
        menu_name: '아이스크림',
        item_quantity: 3,
        item_price: 2000
      },
    ]
  }
]

export default orders
