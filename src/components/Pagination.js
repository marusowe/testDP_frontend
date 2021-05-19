import React, {useEffect} from "react";

export const Pagination = ({nextPage, prevPage, fetchUrls}) => {

    const handleClick = (page) => {
        fetchUrls(page)
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item${prevPage ? '' : ' disabled'}`}>
                    <button
                        className="page-link"
                        onClick={() => handleClick(prevPage)}
                    >Назад</button>
                </li>
                <li className={`page-item${nextPage ? '' : ' disabled'}`}>
                    <button
                        className="page-link"
                        onClick={() => handleClick(nextPage)}
                    >Вперед</button>
                </li>
            </ul>
        </nav>
    )
}