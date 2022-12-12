
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Login = () => {



  // const [userData, setuserData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://fakestoreapi.com/users')
  //     .then((res) => {
  //       console.log(res);
  //       setuserData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);



  return (
<div className='container'>
<form>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" />
    </div>
  </div>

  <button type="submit" className="btn btn-primary">Sign in</button>
</form>

{/* cccccccccc */}





{/* {userData.map((post) => {
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
 */}

</div>
  )
}

export default Login