const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}`);
  const data = await res.json();
  return data;
};

export default getBillboard;
