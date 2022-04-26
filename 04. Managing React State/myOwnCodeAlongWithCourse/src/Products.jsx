import React, { useState } from "react";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import { Link, useParams } from "react-router-dom";
import { PageNotFound } from "./PageNotFound";

export default function Products() {
  const [size, setSize] = useState("");
  const { category } = useParams();

  const {
    data: products,
    error,
    loading,
  } = useFetch(`products?category=${category}`);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  }

  const filteredProducts = size
    ? products.filter((product) =>
        product.skus.find((sku) => sku.size === parseInt(size))
      )
    : products;

  if (error) throw error;
  // if (loading) return <Spinner />;
  if (products === []) return <PageNotFound />;
  console.log(products);
  return (
    <>
      <section id="filters">
        <label htmlFor="size">Filter by Size:</label>{" "}
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">All sizes</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </section>
      {size && <h2>Number of products: {filteredProducts.length} items</h2>}
      <section id="products">
        {loading ? (
          <Spinner />
        ) : (
          filteredProducts && filteredProducts.map(renderProduct)
        )}
      </section>
    </>
  );
}
