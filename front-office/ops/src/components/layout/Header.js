import { faBell, faCircleHalfStroke, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from 'components/search/Search';
import Logo from "img/logo.svg";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [test, setTest] = useState(false);

    useEffect(() => {

    }, [location]);

    return (
        <div id="header">
            <div className="header-wrap clearfix">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="menu">
                    <ul className="flex-wrap">
                        <li className={location.pathname === "/" ? "on" : ""}>
                            <Link to="/">
                                {/* <FontAwesomeIcon icon={faHouse} /> */}
                                <span>홈</span>
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
                                <span>소셜</span>
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
                                <span>블로그</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="func flex-wrap">
                    <button 
                        type="button" 
                        className={test ? "search-btn btn-s-black on" : "search-btn btn-s-black"}
                        onClick={() => setTest(!test)}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <button type="button" className="mode-btn btn-s-none">
                        <FontAwesomeIcon icon={faCircleHalfStroke} />
                    </button>
                    <button type="button" className="alarm-btn btn-s-none">
                        <FontAwesomeIcon icon={faBell} />
                    </button>
                    <button type="button" className="user-btn btn-s-none">
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
