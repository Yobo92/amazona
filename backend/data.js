import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Yobo',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'John',
            email: 'john@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        }
    ],
    products: [
        {
            _id:'1',
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/shirt1.jpg',
            price:120,
            countInStock: 10,
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            _id:'2',
            name:'Adidas Fit Shirt',
            category:'Shirts',
            image:'/images/shirt2.jpg',
            price:120,
            countInStock: 20,
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            _id:'3',
            name:'Lacoste Free Shirt',
            category:'Shirts',
            image:'/images/shirt3.jpg',
            price:220,
            countInStock: 0,
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            _id:'4',
            name:'Nike Slim Pants',
            category:'Pants',
            image:'/images/pants1.jpg',
            price:120,
            countInStock: 0,
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            _id:'5',
            name:'Puma Slim Pants',
            category:'Pants',
            image:'/images/pants2.jpg',
            price:78,
            countInStock: 5,
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            _id:'3',
            name:'Adidas Slim Pants',
            category:'Pants',
            image:'/images/pants3.jpg',
            price:120,
            countInStock: 12,
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },

    ],
};

export default data;