import ProductSkeleton from "../components/ProductSkeleton";
import ProductCard from "./ProductCard";

function RelatedProducts({ related, loading, product }) {
  return (
    <div className="productCard" style={{ height: "200px" }}>
      {loading ? <ProductSkeleton /> : <div className="flex justify-center gap-4 flex-wrap">
      {related?.map((product)=>(
        <div key={product.id} className="w-[250px]">
<ProductCard  product={product}/>

        </div>
      ))}
      </div>}
    </div>
  );
}

export default RelatedProducts;
