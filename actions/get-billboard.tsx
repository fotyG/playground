const APIURL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async () => {
  const res = await fetch(APIURL);
  const data = await res.json();
  return data;
};

export default getBillboard;
