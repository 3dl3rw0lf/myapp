
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">MiTienda</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Tecnología</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Audio y TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Electrodomésticos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Deportes y Fitness</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Otras Categorías</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;