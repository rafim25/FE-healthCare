const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white w-full">
      <img src="/images/logo.svg" alt="Company Logo" className="h-10" />{" "}
      {/* Dummy logo */}
      <h1 className="text-xl font-bold">Bayer Health Management</h1>{" "}
      {/* Company name */}
    </header>
  );
};

export default Header;
