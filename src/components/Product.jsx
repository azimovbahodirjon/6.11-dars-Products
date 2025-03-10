import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Heart, Star } from "lucide-react";

function Product({ product }) {
  const { dispatch, products } = useGlobalContext(); // products array olindi
  const [liked, setLiked] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  // Mahsulotni savatchaga qo‘shish
  const addProduct = (e, product) => {
    e.preventDefault();

    const isAlreadyAdded = products.some((p) => p.id === product.id); // Savatchada borligini tekshirish

    if (isAlreadyAdded) {
      toast.warn("⚠️ You have already added this product!");
      return;
    }

    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });

    toast.success("Product added successfully! ✅");
  };

  // Mahsulotni o‘chirish
  const deleteProduct = (e, productId) => {
    e.preventDefault();

    dispatch({
      type: "DELETE_PRODUCT",
      payload: productId,
    });

    setIsDeleted(true); // Ekrandan olib tashlash
  };

  if (isDeleted) {
    return null; // O‘chirilgan mahsulot ekrandan yo‘qoladi
  }

  return (
    <Link
      className="group card bg-base-100 shadow-sm p-4"
      to={`/product/${product.id}`}
    >
      <figure className="relative">
        <img
          className="group-hover:scale-[1.1] transition duration-300"
          src={product.thumbnail}
          alt={product.title}
        />
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
        >
          <Heart
            fill={liked ? "red" : "none"}
            color={liked ? "red" : "black"}
          />
        </button>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>

        {/* ⭐️ Reyting va 💰 Narx */}
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center text-yellow-500">
            <Star size={18} fill="gold" className="mr-1" />
            <span className="text-lg font-semibold">{product.rating}</span>
          </div>
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Tugmalar */}
        <div className="card-actions justify-between">
          <button
            onClick={(e) => deleteProduct(e, product.id)}
            className="btn btn-error btn-sm md:btn-md"
          >
            Delete
          </button>
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
