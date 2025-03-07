import React from "react";
import Product from "./Product";

function ProductsContainer({ products }) {
  // Xatolikni oldini olish
  if (!products || !Array.isArray(products.products)) {
    console.error(
      "Xatolik: products mavjud emas yoki noto‘g‘ri formatda!",
      products
    );
    return <div>Loading Products...</div>;
  }

  console.log("Mahsulotlar:", products.products);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 main-container gap-5">
      {products.products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductsContainer;
