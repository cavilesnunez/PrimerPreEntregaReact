import './Header.scss'
import logo from '../../assets/logo.png'


const Header = () => {

    return(
        <header className="header">
            <div className="header__container">
                
                <img className='header__logo' src={logo} alt="logo"  />

                <nav className="header__nav">
                    <a className="header__link" href="#">Home</a>
                    <a className="header__link" href="#">Catalogo</a>
                    <a className="header__link" href="#">About</a>
                    <a className="header__link" href="#">Contact</a>
                    <i class="bi bi-cart"></i>

                </nav>
            </div>
        </header>
    )
}

export default Header
