import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-container">
      {loading && (
        <div>
          {" "}
          <h1>ใจเย็น...</h1>
        </div>
      )}

      {data.map((product)=> ( 
          <div key={product.id} className="card">
           <div><img src={product.image} alt="#"/></div>
           <div className="card-description">
              <h3 className="title">{product.title}</h3>
              <h4>{`Category: ${product.category}`}</h4>
              <h4>{`$ ${product.price}`}</h4>
              <button className="add">Add to cart</button> 
           </div>
          </div>
      ))}
    </div>
  );
};

export default Products;
