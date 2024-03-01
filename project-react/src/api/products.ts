export const getProductData = async () => {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
};
