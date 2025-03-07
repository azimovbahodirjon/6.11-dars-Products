import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams(); // ✅ useParams() noto‘g‘ri chaqirilgan edi, to‘g‘rilandi
  const {
    data: product,
    isPending,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots text-4xl"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      {product && (
        <section>
          <div className="main-container">
            <h2 className="text-3xl">Product - {product.title}</h2>
          </div>
        </section>
      )}
    </>
  );
}

export default Product;
