import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
