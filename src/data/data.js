const data = [
    {
        id: 1,
        title: 'Перепілки 1 кг',
        img: 'https://dobryanka-rus.ru/storage/goods/147035_3ENL8.jpg',
        description: 'Перепілки заморожені 5-6 шт',
        category: "М'ясо",
        price: '340.00'
    },

    {
        id: 2,
        title: 'Перепілки копчені 1 кг',
        img: 'https://dobryanka-rus.ru/storage/goods/147035_3ENL8.jpg',
        description: 'Перепілки копчені 5-6 шт',
        category: "М'ясо",
        price: '390.00'
    },

    {
        id: 3,
        title: 'Перепілки по-французьки 1 кг',
        img: 'https://myasna-kraina.com.ua/342-tm_large_default/perepel-marinovannaya.jpg',
        description: 'Перепілки мариновані у прованських травах 5-6 шт',
        category: "М'ясо",
        price: '400.00'
    },

   



    {
        id: 4,
        title: 'Перепілки тоскана 1 кг',
        img: 'https://myasna-kraina.com.ua/342-tm_large_default/perepel-marinovannaya.jpg',
        description: 'Перепілки мариновані в італійських травах 5-6 шт',
        category: "М'ясо",
        price: '400.00'
    },

    {
        id: 5,
        title: 'Перепелині яйця 10 шт',
        img: 'https://images.unsplash.com/photo-1645218168036-3830b512790d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Перепілки яйця 10 шт',
        category: "Яйця",
        price: '150.00'
    },

    {
        id: 6,
        title: 'Майонез на перепелиних яйцях 150 г',
        img: 'https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Майонез 76% жирність, виготовлено з перепелиних яєць та оливкової олії',
        category: "Майонез",
        price: '180.00'
    },

    {
        id: 7,
        title: 'Майонез на перепелиних яйцях (Дієтичний) 150 г',
        img: 'https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Майонез 47% жирність, виготовлено з перепелиних яєць та оливкової олії',
        category: "Майонез",
        price: '200.00'
    },

    {
        id: 8,
        title: 'Майонез на перепелиних яйцях (Дієтичний) 250 г',
        img: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/05/Mayonnaise-Recipe-11.jpg',
        description: 'Майонез 47% жирність, виготовлено з перепелиних яєць та оливкової олії',
        category: "Майонез",
        price: '250.00'
    },

     { 
        id: 9,
        title: 'Майонез на перепелиних яйцях 250 г',
        img: 'https://www.kitchenaid.com/is/image/content/dam/business-unit/kitchenaid/en-us/marketing-content/site-assets/page-content/pinch-of-help/homemade-mayonnaise/Homemade-mayonnaise-recipe-Thumbnail.jpg?wid=1200&fmt=webp',
        description: 'Майонез 76% жирність, виготовлено з перепелиних яєць та оливкової олії',
        category: "Майонез",
        price: '250.00'
    },

    {
        id: 10,
        title: 'Сосиски 250 г',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdL-5owWL0CIb48MiOa6PqVpZVF2Rm7O_hg&s',
        description: "Сосиски виготовлені з перепелиного м'яса",
        category: "Сосиски",
        price: '150.00'
    },

    {
        id: 11,
        title: 'Сосиски 500 г',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdL-5owWL0CIb48MiOa6PqVpZVF2Rm7O_hg&s',
        description: "Сосиски виготовлені з перепелиного м'яса",
        category: "Сосиски",
        price: '250.00'
    },

    {
        id: 12,
        title: 'Сосиски Карі 250 г',
        img: 'https://5.imimg.com/data5/VV/PH/MY-4094990/chicken-sausage-500x500.jpg',
        description: "Сосиски виготовлені з перепелиного м'яса зі спеціями карі",
        category: "Сосиски",
        price: '200.00'
    },

    {
        id: 13,
        title: 'Сосиски з сиром 250 г',
        img: 'https://thefrenchgrocer.com/wp-content/uploads/2021/03/CHICKEN-LAVA-CHEESE-FINE-SAUSAGE-100GMPC-copy.jpeg',
        description: "Сосиски виготовлені з перепелиного м'яса з додаванням сиру",
        category: "Сосиски",
        price: '200.00'
    },

    {
        id: 14,
        title: 'Паштет 200 г',
        img: 'https://www.saveur.com/uploads/2020/01/14/WF73RXBGKNEXFNHEGGFQFOEUZM.jpg?auto=webp',
        description: "Паштет виготовлений з перепелиного м'яса",
        category: "Паштет",
        price: '150.00'
    },

    {
        id: 15,
        title: 'Паштет 300 г',
        img: 'https://www.saveur.com/uploads/2020/01/14/WF73RXBGKNEXFNHEGGFQFOEUZM.jpg?auto=webp',
        description: "Паштет виготовлений з перепелиного м'яса",
        category: "Паштет",
        price: '210.00'
    },
]

export default data;