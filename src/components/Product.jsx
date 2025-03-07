import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ product }) {
  const { dispatch, products } = useGlobalContext();

  const addProduct = (e, product) => {
    e.preventDefault();

    const item = products.some((p) => p.id === product.id);

    if (item) {
      toast.warn("Already Added ");
      return;
    }

    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });

    toast.success("Product added successfully! ✅");
  };

  return (
    <Link
      className="group card bg-base-100 shadow-sm"
      to={`/product/${product.id}`}
    >
      <figure>
        <img
          className="group-hover:scale-[1.1] transition duration-300"
          src={product.thumbnail}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={(e) => addProduct(e, product)}
            className="btn btn-primary btn-sm md:btn-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
