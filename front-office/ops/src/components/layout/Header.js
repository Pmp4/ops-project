import { faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "img/logo.svg";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname.split("/"))
        console.log(location.pathname)
    }, [location]);

    return (
        <div id="header" className="box">
            <div className="header-wrap flex-wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="menu">
                    <ul className="flex-wrap br-m">
                        <li className={location.pathname === "/" ? "on" : ""}>
                            <Link to="/">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}홈
                            </Link>
                        </li>
                        <li
                            className={
                                location.pathname.split("/")[1] === "social" ? "on" : ""
                            }
                        >
                            <Link to="/social">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}
                                소셜
                            </Link>
                        </li>
                        <li
                            className={
                                location.pathname.split("/")[1] === "blog" ? "on" : ""
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
                    <button type="button" className="setting-btn">
                        <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                    </button>
                    <div className='search-wrap'>
                        <div className='search-btn'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
