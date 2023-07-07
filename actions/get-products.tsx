const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async () => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
};

export default getProducts;
