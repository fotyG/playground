import StoreNav from "./components/StoreNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StoreNav />
      {children}
    </>
  );
};
export default layout;
