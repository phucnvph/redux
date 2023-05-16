import { Link, NavLink, useNavigate } from "react-router-dom";


const Blog = () => {

    const navigate = useNavigate();

    const activeClass = ({ isActive }) => {
        return isActive ? 'nav-link custom-active' : 'nav-link';
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/home" className={activeClass}>Home</NavLink>
                            {/* <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/blog">Blog</a> */}
                            <NavLink to="/blog" className={activeClass}>Blog</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>


            <div className="row pt-5" style={{ 
                height: 500
             }}>
                <div className="col-4 border">
                    <h1>Sidebar Left</h1>
                </div>
                <div className="col-8 border">
                    <div>
                        <h2>Blog page</h2>

                        <button onClick={() => {
                            navigate('/home');
                        }}>To Home Page</button>

                        <button onClick={() => {
                            navigate(-1);
                        }}>Black -1</button>

                        <button onClick={() => {
                            navigate(1);
                        }}>Go to 1</button>
                    </div>

                </div>
            </div>
            <footer className="py-3 my-4 bg-warning">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted">© 2022 Company, Inc</p>
            </footer>

        </>
    );
}

export default Blog;