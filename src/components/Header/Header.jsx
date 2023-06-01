import './Header.scss'
import logo from '../../assets/logo.png'
import CarWidget from "../CarWidget/CarWidget"


const Header = () => {

    return(
        <header className="header">
            <div className="header__container">
                <div className='header__nav'>
                <img className='header__logo' src={logo} alt="logo" />
                <a className="header__link">KeebMx</a>
                </div>
                
                <nav className="header__nav">
                    <a className="header__link" href="#">Home</a>
                    <a className="header__link" href="#">Catalogo</a>
                    <a className="header__link" href="#">About</a>
                    <a className="header__link" href="#">Contact</a>

                    <CarWidget />
                </nav>

            </div>
        </header>
    )
}

export default Header
