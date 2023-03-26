import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <div id="search">
            <div className="search-part">
                <div className="search-input flex-wrap">
                    <input />
                    <button type="button" className="search-btn func-btn br-m">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                {/* <div className="search-list-part">
                    <div className="blank"></div>
                    <ul className="search-list box-md">
                        <li>테스트입니다.</li>
                        <li>검색어임</li>
                        <li>입니다람쥐</li>
                        <li>리액트로 프로젝트</li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Search;
