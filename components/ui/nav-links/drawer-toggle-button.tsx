const DrawerToggleButton = () => {
  return (
    <label
      htmlFor="my-drawer-3"
      className="btn btn-square btn-ghost"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block w-6 h-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </label>
  );
};
export default DrawerToggleButton;
