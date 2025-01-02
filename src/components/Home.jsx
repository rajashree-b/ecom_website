import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/Context";

const Home = () => {
  const { data, isError, addToCart } = useContext(AppContext); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isError) {
    return (
      <h2 className="text-center" style={{ padding: "10rem" }}>
        Something went wrong...
      </h2>
    );
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <div
          className="card mb-3"
          key={product.id}
          style={{
            width: "18rem",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card-body">
              <h5 className="card-title">{product.name.toUpperCase()}</h5>
              <p className="card-text">{"$" + product.price}</p>
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                  alert("Product added to cart successfully");
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
