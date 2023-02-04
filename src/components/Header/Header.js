import "./Header.scss";
import HarbourLogo from "../../assets/logos/harbour60.png";


function Header() {

    return (
        <section className="header">
            <img src={HarbourLogo} alt="harbour 60 logo" className="header__logo" />

        </section>

    )
}

export default Header;