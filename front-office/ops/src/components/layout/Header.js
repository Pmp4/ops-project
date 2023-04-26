import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from 'components/search/Search';
import Logo from "img/logo.svg";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

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
                <div className="menu md-font">
                    <ul className="flex-wrap">
                        <li className={location.pathname === "/" ? "on" : ""}>
                            <div className='on-action'></div>
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
                            <div className='on-action'></div>
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
                            <div className='on-action'></div>
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
                    <Search parent={"HEADER"}/>
                    <button type="button" className="user-btn func-btn br-m box-md">
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
