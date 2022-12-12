
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Mainpage = () => {
    //   const fetchProducts = async () => {
  //     const response = await axios
  //       .get('https://fakestoreapi.com/products')
  //       .catch((error) => {
  //         console.log('error', error);
  //       });
  //     console.log(response.data);
  //   };

  const [productData, setproductData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res);
        setproductData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className='flex justify-center text-[30px] font-bold'>
        Product List
      </div>
      {productData.map((post) => {
        const { id, title, price, description, image } = post;
        return (
          <div className='container mx-auto flex flex-col gap-10 justify-center'>
            <div key={post.id}>
              <h1 className='text-[30px] font-bold'>Product {post.id}</h1>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <button className='bg-blue-700 px-2 py-1'>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default Mainpage

