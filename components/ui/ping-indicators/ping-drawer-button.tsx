const PingDrawerButton = () => {
  return (
    <span className="absolute flex h-3 w-3 top-1 right-1">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
    </span>
  );
};
export default PingDrawerButton;
