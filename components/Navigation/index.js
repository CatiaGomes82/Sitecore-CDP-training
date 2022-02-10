import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

const Navigation = () => {

    return (
        <header className="header">
            <div className="wrapper header__wrapper">
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/products">
                                <a className="navigation__link">Products</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;