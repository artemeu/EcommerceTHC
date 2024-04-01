import data from "../Data/products.json"

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = Number(productId);
            resolve(data.find(prod => prod.id === id));
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = data.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500);
    });
};

export const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
    }).format(price);
};