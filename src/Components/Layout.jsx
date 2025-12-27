import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f1eee9] dark:bg-[#0b1220] transition-colors">
      <Navbar />
      <main className="pt-10">{children}</main>
    </div>
  );
};

export default Layout;
