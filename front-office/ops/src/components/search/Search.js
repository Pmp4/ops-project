import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ parent }) => {
    const [searchState, setSearchState] = useState(false);
    const refs = useRef([]);

    useEffect(() => {
        if (parent !== "HEADER") {
            setSearchState(true);
        }
    }, [parent]);

    const onClickSearchEvent = useCallback(
        (bool) => {
            if (parent === "HEADER") {
                setSearchState(bool);
                if(bool) refs.current[0].focus();
            }
        },
        [parent]
    );

    return (
        <div
            id="search"
            onMouseOver={(event) => onClickSearchEvent(true)}
        >
            <div className={searchState ? "search-part on" : "search-part"}>
                <div
                    className={
                        searchState
                            ? "search-input flex-wrap on"
                            : "search-input flex-wrap"
                    }
                >
                    <input 
                        ref={(el) => (refs.current[0] = el)} 
                    />
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
