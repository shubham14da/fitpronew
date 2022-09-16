import React from 'react';
import './pagination.css'

function Pagination({postsPerPage, totalPost, paginate}) {
    const pageNumber = [];
    for (let i = 1; i<= Math.ceil(totalPost / postsPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <ul className='pagination'>
            {
                pageNumber.map((item, index) => {
                    return (
                        <li key={index} className="page-item" onClick={() => paginate(item)}>
                            <p className='page-link'>
                                {item}
                            </p>
                        </li>
                        
                    )
                })
            }
        </ul>
    )
}

export default Pagination