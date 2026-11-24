import style from "./Header.module.css";
function Header(){
    return(
        <header classname={style.Header}>
            <h1>Travel Agency</h1>
            <nav classname={style.nav}>

                <a href="#">Acceuil</a>
                <a href="#">destination</a>
                <a href="#">contacts</a>
            </nav>
        </header>

    );
    }
export default Header;