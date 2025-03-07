import ProductsContainer from "../components/ProductContainer";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products?limit=194");

  if (isPending) {
    return (
      <section className="main-container">
        <h1 className="text-3xl">Product</h1>
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-dots text-4xl"></span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="main-container">
        <h1 className="text-3xl">Product</h1>
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500 text-xl">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="main-container mb-5">
        <h1 className="text-3xl">Product</h1>
      </div>
      {products && <ProductsContainer products={products} />}
    </section>
  );
}

export default Home;
