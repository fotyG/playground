const PingMobileDrawer = () => {
  return (
    <span className="absolute flex h-3 w-3 left-0 top-1/2 -translate-y-1/2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
    </span>
  );
};
export default PingMobileDrawer;
