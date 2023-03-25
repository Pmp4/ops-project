import Logo from "img/logo.svg"
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    useEffect(() => {

    }, [location]);


    return (
        <div id="header" className='box'>
            <div className="header-wrap flex-wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div className="menu">
                    <ul className='flex-wrap'>
                        <li className={location.pathname === "/" ? "on" : ""}>
                            <Link to="/">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}
                                홈
                            </Link>
                        </li>
                        <li className={location.pathname === "/social" ? "on" : ""}>
                            <Link to="/social">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}
                                소셜
                            </Link>
                        </li>
                        <li className={location.pathname === "/blog" ? "on" : ""}>
                            <Link to="/blog">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}
                                블로그
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='info'>
                    각종
                </div>
            </div>
        </div>
    );
};

export default Header;
