
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {

	return (
		<section className="mx-auto max-w-7xl px-4 py-8">
			<div className="mb-6">
				<h2 className="text-2xl font-bold text-gray-900">
					Trending Products
				</h2>

				<p className="mt-1 text-sm text-gray-500">
					Discover our most popular products
				</p>
			</div>

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductList;
