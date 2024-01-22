import { useLocation, Link } from "react-router-dom";

interface Product {
  title: string;
  link: string;
}

interface ProductsInterface {
  data: Product[];
}

interface ProductsProps {
  Navdata: ProductsInterface;
}

function ProductData({ Navdata }: ProductsProps) {
  const location = useLocation();
  const headerWhite = location.pathname === "/about";

  const list = Navdata.data.map((product: Product) => (
    <Link key={product.title} to={`/products/${product.link}`} className="hover:text-gray-400">
      <li>{product.title}</li>
    </Link>
  ));

  return (
    <div className="my-grid mx-[20px] mt-[150px] h-screen md:mt-8">
      <div>
        <ul
          className={`mt-4 flex flex-col gap-0 text-[24px] ${
            headerWhite ? "font-semibold text-grayish" : "text-[#E8E8ED]"
          }`}
        >
          {list}
        </ul>
      </div>
    </div>
  );
}

export default ProductData;
