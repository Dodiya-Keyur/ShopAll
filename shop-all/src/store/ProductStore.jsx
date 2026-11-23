import { createContext, useEffect, useState } from "react";

export const ProductContex = createContext();

export const ProductProvider = ({ children }) => {
	
	const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	fetch("http://localhost:8080/items")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data.items);
	// 			setProducts(data.items);
	// 		})
	// 		.catch((error) => {
	// 			console.log("Error:", error);
	// 		});
	// }, []);

	return (
		<ProductContex.Provider value={products}>
			{children}
		</ProductContex.Provider>
	);
};
