import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
    <img className="home__image"
    src="https://www.mobiledekho.com/wp-content/uploads/2018/01/800x500-7-1.jpg" alt="amazon banner"/>

<div className="home__row">
<Product
    id = "12321341"
    title = "Sold on a Monday: A Novel Paperback – March 27, 2020s"
    price ={11.96}
    rating = {5}
    image = "https://images-na.ssl-images-amazon.com/images/I/41oSSR2M7iL._SX331_BO1,204,203,200_.jpg"
     />

<Product
    id = "12321341"
    title = "Sold on a Monday: A Novel Paperback – March 27, 2020s"
    price ={11.96}
    rating = {5}
    image = "https://images-na.ssl-images-amazon.com/images/I/41oSSR2M7iL._SX331_BO1,204,203,200_.jpg"
     />
</div>
<div className="home__row">
<Product
    id = "12321341"
    title = "Sold on a Monday: A Novel Paperback – March 27, 2020s"
    price ={11.96}
    rating = {5}
    image = "https://images-na.ssl-images-amazon.com/images/I/41oSSR2M7iL._SX331_BO1,204,203,200_.jpg"
     />

<Product
    id = "12321341"
    title = "Sold on a Monday: A Novel Paperback – March 27, 2020s"
    price ={11.96}
    rating = {5}
    image = "https://images-na.ssl-images-amazon.com/images/I/41oSSR2M7iL._SX331_BO1,204,203,200_.jpg"
     />

<Product
    id = "12321341"
    title = "Sold on a Monday: A Novel Paperback – March 27, 2020s"
    price ={11.96}
    rating = {5}
    image = "https://images-na.ssl-images-amazon.com/images/I/41oSSR2M7iL._SX331_BO1,204,203,200_.jpg"
     />
</div>

<div className="home__row">
<Product
    id = "12321341"
    title = "Sold on a Monday: A Novel Paperback – March 27, 2020s"
    price ={11.96}
    rating = {5}
    image = "https://images-na.ssl-images-amazon.com/images/I/41oSSR2M7iL._SX331_BO1,204,203,200_.jpg"
     />
</div>
   
    </div>
  )
}

export default Home;
