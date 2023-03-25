import { faCircleHalfStroke, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "img/logo.svg";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    useEffect(() => {
    }, [location]);

    return (
        <div id="header" className="box-lg">
            <div className="header-wrap flex-wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="menu md-font">
                    <ul className="flex-wrap box-md">
                        <li className={location.pathname === "/" ? "on" : ""}>
                            <Link to="/">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}홈
                            </Link>
                        </li>
                        <li
                            className={
                                location.pathname.split("/")[1] === "social"
                                    ? "on"
                                    : ""
                            }
                        >
                            <Link to="/social">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}
                                소셜
                            </Link>
                        </li>
                        <li
                            className={
                                location.pathname.split("/")[1] === "blog"
                                    ? "on"
                                    : ""
                            }
                        >
                            <Link to="/blog">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}
                                블로그
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="func flex-wrap">
                    <button type="button" className="mode-btn func-btn br-m">
                        <FontAwesomeIcon icon={faCircleHalfStroke} />
                    </button>
                    <div className="search-part flex-wrap">
                        <div className='search-input'>
                            <input />
                        </div>
                        <button type="button" className="search-btn func-btn br-m">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
