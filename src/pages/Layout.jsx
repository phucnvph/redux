import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Slidebar from "../components/Slidebar/Slidebar";

const Layout = () => {
    return (
        <>
            <div className="container">
                <Header></Header>
                <Slidebar></Slidebar>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Layout;