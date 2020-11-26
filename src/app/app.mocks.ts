import { Server } from 'miragejs';

const restaurants = [
    {
        id: 1580385928455,
        name: 'Mama Tomato',
        email: 'mama@tomato.pe',
        phoneNumber: '1951452535'
    },
    {
        id: 1580385928457,
        name: 'Tremendo Burrito',
        email: 'tremendo@burrito.com',
        phoneNumber: '1951172535'
    },
    {
        id: 1580385936498,
        name: 'McDonalds',
        email : 'mc@donalds.com',
        phoneNumber : '123124234'
    },
    {
      id: 1580385928435,
      name: 'Mama Tomato',
      email: 'mama@tomato.pe',
      phoneNumber: '1951452535'
  },
  {
      id: 1580325928457,
      name: 'Tremendo Burrito',
      email: 'tremendo@burrito.com',
      phoneNumber: '1951172535'
  },
  {
      id: 1580315936498,
      name: 'McDonalds',
      email : 'mc@donalds.com',
      phoneNumber : '123124234'
  }
];

const products = [
  {
      id: 4214151,
      name: 'Prosciutto Lovers',
      price: 79.00,
      restaurant: 1580385928455,
      tags: [

      ]
  },
  {
      id: 4214152,
      name: 'Combo Hawaiiana Grande',
      price: 83.90,
      restaurant: 1580385928455,
      tags: [

      ]
  },
  {
      id: 4214153,
      name: 'Pizza Suprema Queen Familiar',
      price: 83.00,
      restaurant: 1580385928455,
      tags: [

      ]
  },
  {
    id: 4214154,
    name: 'Arma tu Tremendo Burrito (500gr)',
    price: 25.90,
    restaurant: 1580385928457,
    tags: [
        
    ]
  },
  {
      id: 4214155,
      name: 'Arma tu Mexican Bowl Mediano (24oz)',
      price: 25.90,
      restaurant: 1580385928457,
      tags: [
          
      ]
  }
];

export default () => {
    new Server({
      seeds(server) {
        server.db.loadData({
            restaurants,
            products
        });
      },
      routes() {
        this.namespace = '/api';
  
        this.get('/restaurants', schema => schema.db.restaurants);
  
        this.post('/restaurants', (schema, request) => {
          const restaurant = JSON.parse(request.requestBody);
          restaurant.id = Date.now();
          console.log(restaurant.id)
          return schema.db.restaurants.insert(restaurant);
        });

        this.get('/restaurants/:id', (schema, request) => {
          const restaurant = schema.db.restaurants.find(request.params.id);
          return restaurant;
        });

        this.put('/restaurants/:id', (schema, request) => {
          const restaurant = schema.db.restaurants.find(request.params.id);
          return restaurant;
        });

        this.get('/products/:id', (schema, request) => {
            const products =  schema.db.products.where({restaurant: request.params.id})
            console.log(products)
            return products
        });

        this.get('/restaurants/:id/products/:pid', (schema, request) => {
            const product = schema.db.products.find(request.params.pid);
            return product;
        });

        this.post('/restaurants/:id/products', (schema, request) => {
          const product = JSON.parse(request.requestBody);
          product.id = Date.now();
          return schema.db.product.insert(product);
        });
  
        this.put('/restaurants/:id/products/:pid', (schema, request) => {
          const restaurant = schema.db.restaurants.find(request.params.id);
          return restaurant;
        });
      }
    });
  };