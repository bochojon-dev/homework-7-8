import React from "react";
import "./Products.scss";
import { Link } from "react-router-dom";

const Products = ({ loading, data }) => {
  let productItems = data?.slice(3)?.map((el) => (
    <div key={el.id} className="products__card">
      <Link to={"/about"}>
        <img className="image0" src={el.images[0]} alt="product" />
      </Link>
      <Link to={"/about"}>
        <img className="image1" src={el.images[1]} alt="product" />
      </Link>
      <p title={el.description} className="description">
        {el.description}{" "}
      </p>
      <p>{el.stock} ta xarid</p>
      <h3>{el.title}</h3>
    </div>
  ));
  return (
    <>
      {loading ? <h2>Loading...</h2> : <></>}
      <section className="products">
        <div className="container">
          <div className="products__wrapper">{productItems}</div>
        </div>
      </section>
    </>
  );
};

export default Products;
