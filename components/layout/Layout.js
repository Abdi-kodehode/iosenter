import Header from '../Header';
import Nav from '../nav/Nav'
import Footer from '../Footer';
import Meta from '../Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
