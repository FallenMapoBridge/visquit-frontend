const orders = [
  {
    order_date: '2019-12-06',
    order_time: '13:12:45',
    order_num: 1,
    order_price: 10000,
    serve_fl: false,
    order_items: [
      {
        menu_name: '불고기버거',
        item_quantity: 2,
        item_price: 3000
      },
      {
        menu_name: '감자튀김',
        item_quantity: 1,
        item_price: 2000
      },
      {
        menu_name: '콜라',
        item_quantity: 1,
        item_price: 2000
      },
    ]
  },
  {
    order_date: '2019-12-06',
    order_time: '13:14:45',
    order_num: 2,
    order_price: 11000,
    serve_fl: false,
    order_items: [
      {
        menu_name: '불고기버거',
        item_quantity: 2,
        item_price: 3000
      },
      {
        menu_name: '야채라이스버거',
        item_quantity: 1,
        item_price: 2000
      },
    ]
  }
]

export default orders
